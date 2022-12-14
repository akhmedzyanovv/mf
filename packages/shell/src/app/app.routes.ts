import { Route } from '@angular/router';
import { WrapperComponent, WrapperOptions } from 'mf-loader';

const angularWrapperOptions: WrapperOptions = {
  remoteEntry: 'http://localhost:4201/remoteEntry.mjs',
  exposedModule: './Module',
  elementName: 'angular-element',
};

const reactWrapperOptions: WrapperOptions = {
  remoteEntry: 'http://localhost:4202/remoteEntry.js',
  exposedModule: './Module',
  elementName: 'react-element',
};

export const appRoutes: Route[] = [
  {
    path: '',
    component: WrapperComponent,
    outlet: 'angular-app',
    data: angularWrapperOptions,
  },
  {
    path: '',
    component: WrapperComponent,
    outlet: 'react-app',
    data: reactWrapperOptions,
  },
];
