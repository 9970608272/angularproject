
import { Customer } from './customer';
import { Photographer } from './photographer';
import { Plan } from './plan';
import { Time } from '@angular/common';

export class Booking{
    
    id:number;
    plan:Plan;
    date:Date;
    time:any;
    customer:Customer;
    photographer:Photographer;
   
  
        constructor()
        {
            this.id = 0;
            this.plan = new Plan();
            this.date = new Date();
            this.time = new Date;
            this.customer =new Customer();
            this.photographer = new Photographer();
          
        }
}