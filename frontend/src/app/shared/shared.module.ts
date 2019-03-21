import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {
    MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule,
    MatTooltipModule, MatProgressBarModule, MatSlideToggleModule, MatDialogModule, MatMenuModule, MatSliderModule,
    MatTabsModule, MatCheckboxModule, MatRadioModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule, MatTableModule,
    MatSortModule, MatPaginatorModule
} from "@angular/material";
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MainLayoutModule} from "./layouts/main-layout/main-layout.module";

@NgModule({
    imports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
        // Material Modules
        MatTooltipModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSliderModule,
        MatTabsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        // Chart module
        NgxChartsModule,
        MainLayoutModule
    ],
    exports: [
        // Angular Modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
        // Material Modules
        MatTooltipModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSliderModule,
        MatSliderModule,
        MatTabsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatSortModule,
        // Chart module
        NgxChartsModule,
        MainLayoutModule
    ],
    declarations: [],
    providers: [
    ],
    entryComponents: []
})
export class SharedModule {
}
