import { Injectable } from '@angular/core';
import { Container, ContainerMap, Scope, WrapperOptions } from '../../types';

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope };

@Injectable({
  providedIn: 'root'
})
export class MfLoaderService {
  private containerMap: ContainerMap = {};
  private isDefaultScopeInitialized = false;

  public async loadRemoteModule<T = any>(options: WrapperOptions): Promise<T> {
    const remoteEntry = options.remoteEntry;

    if (remoteEntry) {
      await this.loadRemoteModuleEntry(remoteEntry);
    }

    return await this.lookupExposedModule<T>(remoteEntry, options.exposedModule);
  }

  private async lookupExposedModule<T>(
    key: string,
    exposedModule: string
  ): Promise<T> {
    const container = this.containerMap[key];
    const factory = await container.get(exposedModule);
    const Module = factory();
    return Module as T;
  }

  private async loadRemoteModuleEntry(remoteEntry: string): Promise<void> {
    if (this.containerMap[remoteEntry]) {
      return Promise.resolve();
    }
    return await import(/* webpackIgnore:true */ remoteEntry).then(
      (container) => {
        this.initRemote(container);
        this.containerMap[remoteEntry] = container;
      }
    );
  }

  private async initRemote(container: Container) {
    if (!this.isDefaultScopeInitialized) {
      await __webpack_init_sharing__('default');
      this.isDefaultScopeInitialized = true;
    }

    await container.init(__webpack_share_scopes__.default);
    return container;
  }

}
