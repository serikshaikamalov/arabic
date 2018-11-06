import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'books-index-page',
    templateUrl: './books-index-page.component.html',
    styleUrls: ['./books-index-page.component.scss']
})
export class BooksIndexPageComponent implements OnInit {
    constructor(
        private title: Title,
        private meta: Meta
    ) { }

    ngOnInit(): void {
        this.title.setTitle('Home / Angular SSR');
        this.meta.updateTag({
            'description': 'Welcome to home section'
        });
    }
}
