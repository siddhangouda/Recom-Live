import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// primeng components
import { PrimeNGConfig } from 'primeng/api';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {

//for css styles
@ViewChild('stickyMenu') stickyMenu: any;
sticky: boolean = false;
menuPosition: any;


// for ts logic
eventData: any;
decodedId: any;
displayPosition: boolean;
position: string;
selected: string;
name: any;
supportedByData: any;
speakersData: any;
ourPartnersData: any;
associationsData: any;
PointsData:any
mediaData: any;
eventType: any = 'multiple';
vc_description:any;


// for child Event
selectedChild: any = 0;
childEventsData : any ;
agenda: any;
brouchure: any;
floorPlan: any;
floorplan_hidden: boolean;
agenda_hidden: boolean;
brouchur_hidden: boolean;
tabIndex=0;
event_docs: any;
partnership: any;
Visa: any;
    keyobjective: any;



constructor(private primengConfig: PrimeNGConfig,
private restApi: RestApiService,
private route: ActivatedRoute,
private router: Router,
) {

}

ngOnInit(): void {
this.agenda_hidden=false;
this.floorplan_hidden=false;
this.brouchur_hidden=false;
this.primengConfig.ripple = true;
//decoding id(redierectTo) from params
this.route.params.subscribe(params => {
this.decodedId = params.id
console.log(this.decodedId);

this.restApi.getList('date_filter/upcomingall/').subscribe(res => {
// this.decodedId = res[0].id
console.log("dasds",res)
res = res.upcoming_events_all.filter((r1)=> {
return r1.event_url_id == this.decodedId;

})
console.log ("id is",this.decodedId = res[0].id);

this.restApi.getListbyId(this.decodedId, 'event_data/').subscribe(responce => {
this.eventData = responce
console.log("see", responce)

this.agenda=responce[0].vc_agenda_link;
this.brouchure=responce[0].vc_brochure_link;
this.floorPlan=responce[0].vc_floorPlan_link;
this.event_docs=responce[0].event_docs;

if(this.event_docs){
for(let i=0;i<this.event_docs.length;i++){
if(this.event_docs[i].vc_document_title=='Partnership'){
this.partnership = this.event_docs[i].vc_document_url
}else if(this.event_docs[i].vc_document_title=='Visa'){
this.Visa = this.event_docs[i].vc_document_url
}
}
console.log('parnerlink',this.partnership)
}

if(this.floorPlan==null){
this.floorplan_hidden=true;
}
if(this.agenda==null){
this.agenda_hidden=true;
}
if(this.brouchure==null){
this.brouchur_hidden=true;
}
// child event
this.childEventsData = responce[0].child_events;

this.supportedByData = responce[0].child_events[this.selectedChild].supporters;
this.speakersData = responce[0].child_events[this.selectedChild].speakers;
this.ourPartnersData = responce[0].child_events[this.selectedChild].partners;
this.associationsData = responce[0].child_events[this.selectedChild].associates;
this.mediaData = responce[0].child_events[this.selectedChild].media_partners;
console.log(responce[0].child_events[this.selectedChild].event_questions)
// this.PointsData = responce[0].child_events[this.selectedChild].event_questions
this.PointsData = filterData(responce[0].child_events[this.selectedChild].event_questions);

this.keyobjective = filterData1(responce[0].child_events[this.selectedChild].event_questions);
this.vc_description = this.eventData[0].child_events[this.selectedChild].vc_description
console.log('keyobjective',this.keyobjective)
})
})



})






}

ngAfterViewInit() {
// this.menuPosition = this.stickyMenu.
// forEach( _results =>{
// console.log("position2" , _results)
// })


this.menuPosition = this.stickyMenu.nativeElement.offsetTop
this.menuPosition = this.stickyMenu.nativeElement.offsetTop


}

showPositionDialog(position: string, selected) {
this.position = position;
this.displayPosition = true;
this.selected = selected;
}

// download data baased on clicked button

downloadFile(data){

this.restApi.postForm('contact_register/', data).subscribe(res => {
console.log(res)
})
const link = document.createElement('a');
link.setAttribute('target', '_blank');
if (this.selected == "Agenda") {
link.setAttribute('href', this.eventData[0].vc_agenda_link);
} else if (this.selected == "Brochure") {
link.setAttribute('href', this.eventData[0].vc_brochure_link);
}
else if (this.selected == "partnership") {
link.setAttribute('href', this.partnership);
}
else if (this.selected == "Visa") {
link.setAttribute('href', this.Visa);
}
else {
link.setAttribute('href', this.eventData[0].vc_floorPlan_link);
}
document.body.appendChild(link);
link.click();
link.remove();
//hide pop-up window
this.displayPosition = false;
}

goToRegister(id) {

this.router.navigate(['/register',id]);
}

selectEvent(i) {
this.tabIndex = i;
this.selectedChild = i;
this.supportedByData = this.eventData[0].child_events[i].supporters;
this.speakersData = this.eventData[0].child_events[this.selectedChild].speakers;
this.ourPartnersData = this.eventData[0].child_events[this.selectedChild].partners;
this.associationsData = this.eventData[0].child_events[this.selectedChild].associates;
this.mediaData = this.eventData[0].child_events[this.selectedChild].media_partners;
this.vc_description = this.eventData[0].child_events[this.selectedChild].vc_description
this.PointsData = filterData(this.eventData[0].child_events[this.selectedChild].event_questions);
console.log(this.PointsData)
this.keyobjective = filterData1(this.eventData[0].child_events[this.selectedChild].event_questions);
}

@HostListener('window:scroll', ['$event'])
handleScroll() {
const windowScroll = window.pageYOffset;
if (windowScroll >= this.menuPosition) {
this.sticky = true;
} else {
this.sticky = false;
}
}
}
function filterData(arg0: any): any {

return arg0.filter(object => {
return object['question'] != 'KEY OBJECTIVES TO BE DISCUSSED';
});
}
function filterData1(arg0: any): any {
 
    return arg0.filter(object => {
    return object['question'] == 'KEY OBJECTIVES TO BE DISCUSSED';
    });
    }
