import {bootstrap } from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {provide} from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy,
        { useClass: HashLocationStrategy }),
    HTTP_PROVIDERS
]);
