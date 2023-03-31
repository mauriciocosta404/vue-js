import {describe,expect,it} from 'vitest'
import { TodoRepositories } from '../repositories/implentations/TodoRepositories';

describe('it shold add todo',() => {
    it('should count 1 when todo is added',()=>{
        const todo = {name:"",description:"",status:""}

        const todoRepositories=new TodoRepositories();

        todoRepositories.create(todo);
        expect(todoRepositories.count).toBe(1);
    })
});