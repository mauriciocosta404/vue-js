import { CreateTodoDTO } from '../DTO/CreateTodoDTO';
import { Todo } from '../model/Todo';

export interface ITodoRepositories{
    create({name,description,status}:CreateTodoDTO):Promise<void>;
    delete(id:string):Promise<void>;
    update():Promise<void>;
    get():Promise<Todo[]>;
    count:number;
}

export { Todo };
