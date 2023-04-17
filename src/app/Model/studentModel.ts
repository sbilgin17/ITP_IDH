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

    }
}
export const STUDENTS: StudentModel[]=[
    new StudentModel("Akpinar","assets/mcqueen.png", 1, "Tarik"),
    new StudentModel("Altmann","", 2, "Tim"),
    new StudentModel("Begagic","", 3, "Hatidza"),
    new StudentModel("Benkovic","", 4, "Josip"),
    new StudentModel("Bilgin","", 5, "Salih"),
    new StudentModel("Cakir","", 6, "Zerda"),
    new StudentModel("Falk","", 7, "Michael"),
    new StudentModel("Ghiritti","", 8, "Roberto"),
    new StudentModel("Groiß","", 9, "Noel"),
    new StudentModel("Hedrich","", 10, "Florian"),
    new StudentModel("Ibrahim","", 11, "Nagi"),
    new StudentModel("Khalifa","", 12, "Taisir"),
    new StudentModel("Lueger","", 13, "Phillipp"),
    new StudentModel("Mayerhofer","", 14, "Alex"),
    new StudentModel("Milicic","", 15, "Lukas"),
    new StudentModel("Milojkovic","", 16, "Stefan"),
    new StudentModel("Pauer","", 17, "Aleks"),
    new StudentModel("Ramljack","", 18, "Luka"),
    new StudentModel("Sakar","", 19, "Umut"),
    new StudentModel("Samarati","", 20, "Michael"),
    new StudentModel("Trojan","", 21, "Victor"),
    new StudentModel("Vollmann","", 22, "Phillip"),
    new StudentModel("Yusupova","", 23, "Linda"),



]
