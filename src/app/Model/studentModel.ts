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
    new StudentModel("Akpinar","", 1, "Tarik"),
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
    new StudentModel("Khalifa","", 12, "Hatidza"),
    new StudentModel("Lueger","", 13, "Hatidza"),
    new StudentModel("Mayerhofer","", 14, "Hatidza"),
    new StudentModel("Milicic","", 15, "Hatidza"),
    new StudentModel("Milojkovic","", 16, "Hatidza"),
    new StudentModel("Pauer","", 17, "Hatidza"),
    new StudentModel("Ramljack","", 18, "Hatidza"),
    new StudentModel("Sakar","", 19, "Hatidza"),
    new StudentModel("Samarati","", 20, "Hatidza"),
    new StudentModel("Trojan","", 21, "Hatidza"),
    new StudentModel("Vollmann","", 22, "Hatidza"),
    new StudentModel("Yusupova","", 23, "Hatidza"),



]
