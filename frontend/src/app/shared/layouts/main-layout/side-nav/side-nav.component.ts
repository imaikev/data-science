import {Component, Input, OnInit} from '@angular/core';
import {NavigationItem} from "../main-layout.types";
import {MatListModule} from '@angular/material/list';

@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {
    @Input()
    public menuItems: NavigationItem[];

    constructor() {
    }

    ngOnInit() {
    }
}
