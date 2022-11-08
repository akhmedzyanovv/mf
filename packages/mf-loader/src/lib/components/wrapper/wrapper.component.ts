import { AfterContentInit, Component, ElementRef, Input } from '@angular/core';
import { MfLoaderService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { WrapperOptions } from '../../types';

@Component({
  selector: 'mf-wrapper',
  template: '',
})
export class WrapperComponent implements AfterContentInit {

  @Input() options: WrapperOptions | undefined;
  private element: HTMLElement | null = null;

  constructor(
    private readonly mfLoaderService: MfLoaderService,
    private readonly route: ActivatedRoute,
    private readonly hostElement: ElementRef,
  ) {
  }

  async ngAfterContentInit() {
    const options =
      this.options ?? (this.route.snapshot.data as WrapperOptions);

    try {
      await this.mfLoaderService.loadRemoteModule(options);
      this.element = document.createElement(options.elementName);
      this.hostElement?.nativeElement.appendChild(this.element);
    } catch (error) {
      console.error(error);
    }
  }
}
