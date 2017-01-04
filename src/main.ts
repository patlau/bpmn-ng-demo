import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

/*
import 'lodash';
import 'lodash/collection';
import 'lodash/collection/filter';
import 'lodash/collection/map';
import 'lodash/collection/forEach';
import 'lodash/collection/reduce';
import 'lodash/collection/groupBy';
import 'lodash/collection/some';
import 'lodash/collection/every';
import 'lodash/object/assign';
import 'lodash/object/pick';
import 'lodash/function/defer';
import 'lodash/function/bind';
import 'lodash/function/debounce';
import 'bpmn-js/lib/Viewer';
*/

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
