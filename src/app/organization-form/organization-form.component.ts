import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { OrganizationService } from 'src/service/organization.service';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent implements OnInit, OnDestroy{
  public form!: FormGroup;
  public submitted: boolean = false;
  public id: any;
  public organizationData: any;
  private subs = new Subscription();

  constructor(private formBuilder: FormBuilder,
    private service: OrganizationService, 
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {};

  ngOnInit() {
    this.setForm();
    this.getIdFromUrl();
  }

  // To get id from the url
  getIdFromUrl() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      if(this.id !== null) {
        this.getOrganizationData(this.id);
      }
    });
  }


  // To set form
  setForm() {
    if(this.id === null) {
     this.form = this.formBuilder.group({
            title: ['', Validators.required],
            description:[''],
            organization_id:[1]
     })
    } else {
      this.form = this.formBuilder.group({
        title: [this.organizationData?.title, Validators.required],
        description:[this.organizationData?.description],
        organization_id:[1]
      })
    }
  }

  get f() { return this.form.controls; }

  // To get organization data based on id
  getOrganizationData(id: any) {
    this.service.getOrganizationData(id).subscribe((res:any)=>{
      this.organizationData = res;
      // this.organizationData.title = 'test';
      // this.organizationData.description = 'test description'
      this.setForm();
    }) 

  }

  // To submit form data
  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } 
    if(this.id === null) {
      this.createOrganization(this.form.value);
    } else {
      this.updateOrganization(this.id,this.form.value);
    }
  }

  // To create organization
  createOrganization(data: any) {
    this.service.saveOrganization(data).subscribe((res:any)=>{
      this.toastr.success(res?.message);
      this.router.navigate(['organisation']);
    }) 
  }

  // To update organization details
  updateOrganization(id: string, data: any) {
    this.service.updateOrganization(id,data).subscribe((res:any)=>{
      this.toastr.success(res?.message);
      this.router.navigate(['organisation']);
    }) 
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

