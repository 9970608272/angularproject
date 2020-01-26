
import { Photographer } from './photographer';

export class booking{

    id:number;
  
    photographer:Photographer;
   
  
        constructor()
        {
            this.id = 0;
           
            this.photographer = new Photographer();
          
        }
}