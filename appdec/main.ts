import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import { provide, PLATFORM_DIRECTIVES } from '@angular/core';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(PLATFORM_DIRECTIVES, { useValue: [ROUTER_DIRECTIVES], multi: true })
]);