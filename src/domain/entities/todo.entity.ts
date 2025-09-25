

export class TodoEntity {

    constructor(
        public id: number,
        public text: string,
        public completedAt?: Date | null, 
    ){}

    get isCompleted(){
        return !!this.completedAt; // Una ! para negar y otra ! para negar de nuevo == (if true).
    }

    
}