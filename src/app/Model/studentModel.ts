export class StudentModel{
    surname: string;
    imageUrl: string;


    constructor(surname: string, imageUrl: string){
        this.surname=surname;
        this.imageUrl=imageUrl;

    }
}
export const STUDENTS: StudentModel[]=[
    new StudentModel("Student 1","assets/mcqueen.png"),
    new StudentModel("Student 2","assets/mcqueen.png"),
    new StudentModel("Student 2","assets/mcqueen.png")
]
