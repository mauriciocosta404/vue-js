import {uuid} from 'uuidv4'

export class Todo{
    readonly id:string;
    readonly name:string;
    readonly description:string; 
    readonly status:string;

    constructor(name:string,description:string,status:string){
        this.id=uuid();
        this.name=name;
        this.description=description;
        this.status=status;
    }
}