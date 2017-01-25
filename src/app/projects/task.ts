export class Task {
        
    constructor(
        public title: string, 
        public description: string = "", 
        public status: string = "new", 
        public priority: string = "normal", 
        public type: string = "task"
        ) {}
    
}
