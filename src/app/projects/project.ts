import { Task } from './task'

export class Project {
        
    constructor(
        public code: string, 
        public title: string, 
        public description: string = "", 
        public tasks: Task[] = []
        ) {}
    
}
