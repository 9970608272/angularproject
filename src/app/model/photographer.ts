import { Address } from './address';

export class Photographer{

    id:number;
    name:string;
    email:string;
    password:string;
    phone:string;
    role:string;
    address:Address; 
        constructor()
        {
            this.id = 0;
            this.name = "";
            this.email = "";
            this.password = "";
            this.phone = "";
            this.role="";
            this.address = new Address();
        }
}