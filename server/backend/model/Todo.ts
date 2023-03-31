import {uuid} from 'uuidv4'

export class Todo{
    private id:string;
    private name:string;
    private description:string; 
    private status:string;

    constructor(){
        if(!this.id){
            this.id=uuid();
        }
    }
}