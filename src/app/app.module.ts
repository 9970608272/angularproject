import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgModel, FormsModule, NgForm} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { ListofphotographersComponent } from './listofphotographers/listofphotographers.component';

import { ListofusersComponent } from './listofusers/listofusers.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { BookingrequestComponent } from './bookingrequest/bookingrequest.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { ViewplanComponent } from './viewplan/viewplan.component';
import { GallaryComponent } from './gallary/gallary.component';
import { UserComponent } from './user/user.component';
import { ViewavailabiltyComponent } from './viewavailabilty/viewavailabilty.component';

import { BookphotographerComponent } from './bookphotographer/bookphotographer.component';
import { HelpComponent } from './help/help.component';
import { ListofcustomersComponent } from './listofcustomers/listofcustomers.component';
import { DeletephotographerComponent } from './listofphotographers/deletephotographer/deletephotographer.component';
import { EditphotographerComponent } from './listofphotographers/editphotographer/editphotographer.component';
import { DeleteviewplanComponent } from './viewplan/deleteviewplan/deleteviewplan.component';
import { DeletecustomerComponent } from './listofcustomers/deletecustomer/deletecustomer.component';
import { DeleteuserlistComponent } from './listofusers/deleteuserlist/deleteuserlist.component';
import { AddAddressComponent } from './address/add-address/add-address.component';
import { BookingComponent } from './listofusers/booking/booking.component';

import { SelectuseraddressComponent } from './user/selectuseraddress/selectuseraddress.component';
import { DeletepersonalinfoComponent } from './personalinfo/deletepersonalinfo/deletepersonalinfo.component';
import { EditpersonalinfoComponent } from './personalinfo/editpersonalinfo/editpersonalinfo.component';
import { TimeComponent } from './viewavailabilty/time/time.component';
import { ShowGalleryComponent } from './show-gallery/show-gallery.component';





@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  LoginComponent,
  AboutusComponent,
  ContactusComponent,
  AdminComponent,
  RegisterComponent,
  ListofphotographersComponent,
 
  ListofusersComponent,
  PhotographerComponent,
  BookingrequestComponent,
  PersonalinfoComponent,
  ViewplanComponent,
  GallaryComponent,
  UserComponent,
  ViewavailabiltyComponent,
  
  BookphotographerComponent,
  HelpComponent,
  ListofcustomersComponent,
  DeletephotographerComponent,
  EditphotographerComponent,
  DeleteviewplanComponent,
  DeletecustomerComponent,
  DeleteuserlistComponent,
  AddAddressComponent,
  BookingComponent,

  SelectuseraddressComponent,

  DeletepersonalinfoComponent,

  EditpersonalinfoComponent,

  TimeComponent,

  ShowGalleryComponent,


  
 
   ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   RouterModule.forRoot([
     { path:"home",component:HomeComponent },
     { path:"login", component:LoginComponent },
     { path:"aboutus", component:AboutusComponent },
     { path:"contactus", component:ContactusComponent },
     { path:"register", component:RegisterComponent },
     { path:"admin", component:AdminComponent },
     { path:"user", component:UserComponent },
     { path:"photographer", component:PhotographerComponent },
     { path:"help", component:HelpComponent },
     { path:"viewplan", component:ViewplanComponent },
     { path:"gallary", component:GallaryComponent },
     { path:"listofphotographers", component:ListofphotographersComponent },
     { path:"listofusers", component:ListofusersComponent },
     { path:"bookphotographer", component:BookphotographerComponent },
     
     
     { path:"bookingrequest", component:BookingrequestComponent },
     { path:"viewavailabilty", component:ViewavailabiltyComponent },
     { path:"personalinfo", component:PersonalinfoComponent },
     { path:"listofcustomers", component:ListofcustomersComponent },
     { path:"deletephotographer/:photographerId", component:DeletephotographerComponent },
     { path:"editphotographer/:photographerId", component:EditphotographerComponent },
     { path:"deletecustomer/:customerId", component:DeletecustomerComponent },
     { path:"deleteviewplan/:planId", component:DeleteviewplanComponent },
     { path:"addaddress", component:AddAddressComponent },
     { path:"deletepersonalinfo/:photographerId", component:DeletepersonalinfoComponent },
     { path:"editpersonalinfo/:photographerId", component:EditpersonalinfoComponent },
     { path:"deleteuserlist/:userId", component:DeleteuserlistComponent },
     { path:"time", component:TimeComponent },
     { path:"addaddress", component:AddAddressComponent },
  
     { path:"showgallery/:id", component:ShowGalleryComponent }
  

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor()
{
  console.log("app module created")
}

 }
