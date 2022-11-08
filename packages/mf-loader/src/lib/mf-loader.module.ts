import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components';

@NgModule({
  declarations: [WrapperComponent],
  imports: [CommonModule],
  exports: [
    WrapperComponent,
  ],
})
export class MfLoaderModule {}
