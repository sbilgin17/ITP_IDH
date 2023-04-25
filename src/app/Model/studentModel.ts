export class StudentModel{
    surname: string;
    imageUrl: string;

    id: number;

    vname: string;


    constructor(surname: string, imageUrl: string, id: number, vname: string){
        this.surname=surname;
        this.imageUrl=imageUrl;
        this.id = id;
        this.vname = vname;
//hallo
    }
}
export const STUDENTS: StudentModel[]=[
    new StudentModel("Akpinar","assets/mcqueen.png", 1, "Tarik"),
    new StudentModel("Altmann","assets/mcqueen.png", 2, "Tim"),
    new StudentModel("Begagic","assets/mcqueen.png", 3, "Hatidza"),
    new StudentModel("Benkovic","assets/mcqueen.png", 4, "Josip"),
    new StudentModel("Bilgin","assets/mcqueen.png", 5, "Salih"),
    new StudentModel("Cakir","assets/mcqueen.png", 6, "Zerda"),
    new StudentModel("Falk","assets/mcqueen.png", 7, "Michael"),
    new StudentModel("Ghiritti","assets/mcqueen.png", 8, "Roberto"),
    new StudentModel("Groiß","assets/mcqueen.png", 9, "Noel"),
    new StudentModel("Hedrich","assets/mcqueen.png", 10, "Florian"),
    new StudentModel("Ibrahim","assets/mcqueen.png", 11, "Nagi"),
    new StudentModel("Khalifa","assets/mcqueen.png", 12, "Taisir"),
    new StudentModel("Lueger","assets/mcqueen.png", 13, "Phillipp"),
    new StudentModel("Mayerhofer","assets/mcqueen.png", 14, "Alex"),
    new StudentModel("Milicic","assets/mcqueen.png", 15, "Lukas"),
    new StudentModel("Milojkovic","assets/mcqueen.png", 16, "Stefan"),
    new StudentModel("Pauer","assets/mcqueen.png", 17, "Aleks"),
    new StudentModel("Ramljack","assets/mcqueen.png", 18, "Luka"),
    new StudentModel("Sakar","assets/mcqueen.png", 19, "Umut"),
    new StudentModel("Samarati","assets/mcqueen.png", 20, "Michael"),
    new StudentModel("Trojan","assets/mcqueen.png", 21, "Victor"),
    new StudentModel("Vollmann","assets/mcqueen.png", 22, "Phillip"),
    new StudentModel("Yusupova","assets/mcqueen.png", 23, "Linda"),



]
