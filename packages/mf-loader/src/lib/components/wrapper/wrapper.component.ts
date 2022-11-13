import { AfterContentInit, Component, ElementRef } from '@angular/core';
import { MfLoaderService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { WrapperOptions } from '../../types';

@Component({
  selector: 'mf-wrapper',
  template: '',
})
export class WrapperComponent implements AfterContentInit {

  options: WrapperOptions | undefined;
  private element: HTMLElement | null = null;

  constructor(
    private readonly mfLoaderService: MfLoaderService,
    private readonly route: ActivatedRoute,
    private readonly hostElement: ElementRef
  ) {
  }

  async ngAfterContentInit() {
    this.options = this.route.snapshot.data as WrapperOptions;

    try {
      await this.mfLoaderService.loadRemoteModule(this.options);
      this.element = document.createElement(this.options.elementName);
      this.hostElement?.nativeElement.appendChild(this.element);
    } catch (error) {
      console.error(error);
    }
  }
}
