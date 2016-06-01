import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page.component";
import {VersionControlPageComponent} from "./version-control-page.component";
import {WebcamViewerPageComponent} from "./webcam-viewer-page.component";
import { Title } from '@angular/platform-browser';


@Component({
    selector: 'pvcs-app',
    templateUrl: 'templates/app.html',
    directives: [ROUTER_DIRECTIVES]

})
@Routes([
    { path: '/home', component: MainPageComponent, },
    { path: '/version-control', component: VersionControlPageComponent },
    { path: '/webcam-viewer', component: WebcamViewerPageComponent },
    { path: '*', component: MainPageComponent },
])
export class AppComponent {
}
