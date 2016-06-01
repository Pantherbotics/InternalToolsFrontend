import { Component } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {RepositoryComponent} from "./repository.component";

import 'rxjs/add/operator/map'


@Component({
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'templates/version-control.html',

})
export class VersionControlPageComponent {

    repos: Array<RepositoryComponent> = new Array<RepositoryComponent>();

    constructor(http: Http) {
        http.get('customData.json')
            // Call map on the response observable to get the parsed people object
            // .map(res => res.json())
            // Subscribe to the observable to get the parsed people object and attach it to the
            // component
            .map(res => res.json())
            .subscribe(repos => this.generateRepos(repos));
    }

    generateRepos(repoJSON: JSON) {
        console.log(repoJSON);
        for (var index in repoJSON) {
            if (index.substring(0, 2) == "__") { continue; }

            var repo: RepositoryComponent = new RepositoryComponent();
            repo.id = index;
            repo.path = repoJSON[index]['path'];
            // repo.state = repoJSON[index]['state'];
            repo.date = repoJSON[index]['date'];
            repo.link = repoJSON[index]['link'];
            this.repos.push(repo);
        }
        console.log(this.repos);
    }
}
