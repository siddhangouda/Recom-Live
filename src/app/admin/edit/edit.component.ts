import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  masterId : number ;
  childList : any ;
  rows: FormArray;

  selectChildForm : FormGroup

  constructor(private restAPI: RestApiService ,
              private route : ActivatedRoute ,
              private router : Router, 
              private fb : FormBuilder) { 

                 
                this.selectChildForm = this.fb.group(
                  {
                    row : this.fb.array([])
                  }
                )
                
              }

  ngOnInit(): void {


    this.route.params.subscribe(res => {
      this.masterId = res.queryParams
      // console.log(this.masterId)
    })


    this.restAPI.getListbyId(this.masterId,'child_event_data/').subscribe(res => {
      this.childList = res[0].child_events;
      this.addrows(this.childList)
    })

this.selectChildForm
}
  addrows(childList: any) {
    this.selectChildForm = this.fb.group({
      row: this.fb.array(
        childList.map(x => this.fb.group({
          id :[x.id],
          vc_event_title: [x.vc_event_title, [Validators.required, Validators.minLength(2)]],
          db_registrationTotal_physical: [x.db_registrationTotal_physical, [Validators.required, Validators.minLength(2)]],
          db_registrationTotal_virtual: [x.db_registrationTotal_virtual, [Validators.required, Validators.minLength(2)]],
          vc_description:[x.vc_description, [Validators.required, Validators.minLength(2)]]
        })
        
        )
      )
    })
  }

selectChild(i){

const newData =  this.selectChildForm.value.row[i];
this.restAPI.postForm('update_child_event/' , newData).subscribe(res=> {
  console.log(res);
}) 
}

deleteChild(i){
  const childId = this.selectChildForm.value.row[i].id
  this.restAPI.postForm('delete_child_event/', {id: childId}).subscribe(res=> {
    console.log(res);
  })
  location.reload();
  // this.ngOnInit();
  // this.ngOnInit();
}

editChild(i){
  this.router.navigate(['admin/editChild',{ queryParams: i}])
}

editmaster(id){
this.router.navigate(['admin/editmaster',{ queryParams: id}])
}
addChild(id){
  this.router.navigate(['admin/createchild'],{queryParams:{"masterId": id}})
}
}