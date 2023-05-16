import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { OrganizationService } from 'src/service/organization.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit, OnDestroy {
  public organizationList: any = [];
  public p: any;
  private subs = new Subscription();

  constructor(private service: OrganizationService, private router: Router, private toastr: ToastrService) {};

  ngOnInit() {
    this.getOrganizationList();
  }

  // To get the organization list
  getOrganizationList() {
    this.service.getOrganizationList().subscribe((res:any)=>{
      this.organizationList = res?.data;     
    })     
  }

  // To navigate to the edit page
  editOrganization(id: number) {
    this.router.navigate(['edit-organisation/'+ id]);
  }

  // To delete organization
  deleteOrganization(id: number) {
    this.service.deleteOrganization(id).subscribe((res:any)=>{
      this.toastr.success(res?.message);
      this.getOrganizationList();
    }) 
  }

  addOrganization(){
    this.router.navigate(['add-organisation']);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
