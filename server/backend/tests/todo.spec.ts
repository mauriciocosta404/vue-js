import {describe,expect,it} from 'vitest'
import { TodoRepositories } from '../repositories/implentations/TodoRepositories';

describe('it shold add todo',() => {
    
    const todoRepositories=new TodoRepositories();
    it('should count 1 when todo is added',()=>{
        const todo = {name:"",description:"",status:""}


        todoRepositories.create(todo);
        expect(todoRepositories.count).toBe(1);
    });
});