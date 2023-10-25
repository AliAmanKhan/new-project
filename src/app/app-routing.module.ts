import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './My-Components/home/home.component';
import { AboutComponent } from './My-Components/about/about.component';
import { FaqComponent } from './My-Components/faq/faq.component';
import { CompaniesComponent } from './My-Components/Placement/companies/companies.component';
import { PlacePolicyComponent } from './My-Components/Placement/place-policy/place-policy.component';
import { PlaceSummaryComponent } from './My-Components/Placement/place-summary/place-summary.component';
import { PlacementsComponent } from './My-Components/Placement/placements/placements.component';
import { WhyComponent } from './My-Components/Placement/why/why.component';
import { GalleryComponent } from './My-Components/gallery/gallery.component';
import { ContactComponent } from './My-Components/contact/contact.component';
import { FacultyComponent } from './My-Components/Tpo-Team/faculty/faculty.component';
import { StudentCellComponent } from './My-Components/Tpo-Team/student-cell/student-cell.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'student', component: StudentCellComponent },
  { path: 'placements', component: PlacementsComponent },
  { path: 'place-summary', component: PlaceSummaryComponent },
  { path: 'place-policy', component: PlacePolicyComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'why', component: WhyComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
