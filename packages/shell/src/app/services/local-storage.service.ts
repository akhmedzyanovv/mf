import { Injectable, InjectionToken, OnDestroy } from '@angular/core';

//TODO exclude to library
export const ADD_RECORD = 'addRecord';
export const REMOVE_RECORD = 'removeRecord';

export interface Record {
  type: string;
  date: string;
  amount: string;
}

export const Storage: InjectionToken<string> = new InjectionToken<string>('Storage');

@Injectable()
export class LocalStorageService implements OnDestroy {

  private localStorageKey = 'recycling';


  public constructor() {
    this.addListeners();
  }

  public ngOnDestroy(): void {
    this.removeListeners();
  }

  private addListeners(): void {
    // @ts-ignore
    addEventListener(ADD_RECORD, this.addRecordListener.bind(this));
    // @ts-ignore
    addEventListener(REMOVE_RECORD, this.removeRecordListener.bind(this));
  }

  private removeListeners(): void {
    // @ts-ignore
    removeEventListener(ADD_RECORD, this.addRecordListener.bind(this));
    // @ts-ignore
    removeEventListener(REMOVE_RECORD, this.removeRecordListener.bind(this));
  }

  private addRecordListener(event: CustomEvent<Record>): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify([
      ...this.getRecords(),
      event.detail,
    ]));

    this.emitChanges();
  }

  private removeRecordListener(event: CustomEvent<number>): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify([
      ...this.getRecords().splice(event.detail, 1),
    ]));

    this.emitChanges();
  }

  private getRecords(): Record[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) ?? '[]');
  }

  private emitChanges(): void {
    dispatchEvent(new Event("storage"));
  }
}
