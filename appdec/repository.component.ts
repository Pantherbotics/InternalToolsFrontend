import { Component } from '@angular/core';

@Component({
    selector: 'pvcs-repo'
})
export class RepositoryComponent {
    id: String;
    state: String;
    date: Date;
    link: String;
    path: String;
}
