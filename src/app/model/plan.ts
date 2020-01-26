
import { Photographer } from './photographer';
import { FunctionType } from './FType';

export class Plan{

    id:number;
    fType:FunctionType;
    charges:number;
   
    photographer:Photographer;

        constructor()
        {
            this.id = 0;
            this.fType = FunctionType.OTHER;
            this.charges = 0;
            this.photographer = new Photographer();
        }
}