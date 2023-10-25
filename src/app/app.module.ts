import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './My-Components/home/home.component';
import { AboutComponent } from './My-Components/about/about.component';
import { ContactComponent } from './My-Components/contact/contact.component';
import { FaqComponent } from './My-Components/faq/faq.component';
import { GalleryComponent } from './My-Components/gallery/gallery.component';
import { CompaniesComponent } from './My-Components/Placement/companies/companies.component';
import { PlacePolicyComponent } from './My-Components/Placement/place-policy/place-policy.component';
import { PlaceSummaryComponent } from './My-Components/Placement/place-summary/place-summary.component';
import { PlacementsComponent } from './My-Components/Placement/placements/placements.component';
import { WhyComponent } from './My-Components/Placement/why/why.component';
import { FacultyComponent } from './My-Components/Tpo-Team/faculty/faculty.component';
import { StudentCellComponent } from './My-Components/Tpo-Team/student-cell/student-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    GalleryComponent,
    CompaniesComponent,
    PlacePolicyComponent,
    PlaceSummaryComponent,
    PlacementsComponent,
    WhyComponent,
    FacultyComponent,
    StudentCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    CommonModule,
    MatTabsModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
