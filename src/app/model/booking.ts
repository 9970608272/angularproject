
import { Customer } from './customer';
import { Photographer } from './photographer';
import { Plan } from './plan';

export class Booking{
    
    id:number;
    plan:Plan;
    time:string;
    customer:Customer;
    photographer:Photographer;
   
  
        constructor()
        {
            this.id = 0;
            this.plan = new Plan();
            this.time = "";
            this.customer =new Customer();
            this.photographer = new Photographer();
          
        }
}