import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationFormComponent } from './organization-form/organization-form.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';

const routes: Routes = [
  { path: 'organization', component: OrganizationListComponent },
  { path: '',   redirectTo: '/organization', pathMatch: 'full' },
  { path: 'add-organisation', component: OrganizationFormComponent },
  { path: 'edit-organisation/:id', component: OrganizationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
