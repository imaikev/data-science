import {NgModule} from '@angular/core';

import {MainLayoutComponent} from './main-layout.component';
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from "@angular/router";
import {SideNavComponent} from "./side-nav/side-nav.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatMenuModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule
    ],
    exports: [
        MainLayoutComponent,
        NavBarComponent,
        MatListModule,
        MatInputModule,
        MatCardModule,
        SideNavComponent],
    declarations: [
        MainLayoutComponent,
        NavBarComponent,
        SideNavComponent
    ],
    providers: [],
})
export class MainLayoutModule {
}
