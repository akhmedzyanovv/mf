const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation(config);

/*mport { withModuleFederation } from '@nrwl/angular/module-federation';
import { config } from './module-federation.config';

export default withModuleFederation(config);
*/