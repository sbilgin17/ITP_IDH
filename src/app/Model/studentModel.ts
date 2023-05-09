export class StudentModel{
    surname: string;
    imageUrl: string;

    id: number;

    vname: string;

    merk: string;


    constructor(surname: string, imageUrl: string, id: number, vname: string, merk:string){
        this.surname=surname;
        this.imageUrl=imageUrl;
        this.id = id;
        this.vname = vname;
        this.merk = merk;
//hallo
    }
}
export const STUDENTS: StudentModel[]=[
    new StudentModel("Akpinar","assets/mcqueen.png", 1, "Tarik Can", "\"Ich bin kein Rapper, ich bin ein Straßentyp.\" (Gzuz)"),
    new StudentModel("Altmann","assets/mcqueen.png", 2, "Tim", "\"Ich hab' kein Mitleid, denn ich kenne keinen Schmerz.\" (Capital Bra)"),
    new StudentModel("Begagic","assets/mcqueen.png", 3, "Hatidza", "\"Ich bin ein Star, hol mich hier raus.\" (Bushido)"),
    new StudentModel("Benkovic","assets/mcqueen.png", 4, "Josip", "\"Wenn du was willst, dann hol es dir.\" (Samra)"),
    new StudentModel("Bilgin","assets/mcqueen.png", 5, "Salih", "\"Ich bin ein Alpha, kein Beta.\" (Bonez MC)"),
    new StudentModel("Cakir","assets/mcqueen.png", 6, "Zerda", "\"Ich lebe für die Nacht, ich bin ein Nachtmensch.\" (Loredana)"),
    new StudentModel("Falk","assets/mcqueen.png", 7, "Michael", "\"Keiner kann mir sagen, was ich zu tun habe.\" (Mero)"),
    new StudentModel("Ghiritti","assets/mcqueen.png", 8, "Roberto", "\"Ich rede nicht viel, ich handle lieber.\" (Capital Bra)"),
    new StudentModel("Groiß","assets/mcqueen.png", 9, "Noel", "\"Jeder ist ein Opfer, außer ich und meine Jungs.\" (Farid Bang)"),
    new StudentModel("Hedrich","assets/mcqueen.png", 10, "Florian", "\"Nur die Stärksten überleben in dieser Welt.\" (Azet)"),
    new StudentModel("Ibrahim","assets/mcqueen.png", 11, "Nagi", "\"Schwäche zeigen ist keine Option, ich muss stark sein.\" (Gzuz)"),
    new StudentModel("Khalifa","assets/mcqueen.png", 12, "Taisir", "\"Meine Wut ist ein Teil von mir, sie treibt mich an.\" (Samra)"),
    new StudentModel("Lueger","assets/mcqueen.png", 13, "Phillipp", "\"Meine Augen sehen viel mehr als das, was vor ihnen liegt.\" (Loredana)"),
    new StudentModel("Mayerhofer","assets/mcqueen.png", 14, "Alex", "\"Wir leben schnell und riskant, aber das ist unsere Welt.\" (Farid Bang)"),
    new StudentModel("Milicic","assets/mcqueen.png", 15, "Lukas", "\"Wir sind nicht auf dieser Welt, um zu verlieren.\" (Mero)"),
    new StudentModel("Milojkovic","assets/mcqueen.png", 16, "Stefan", "\"Zeig' keine Schwäche, sonst wirst du zum Opfer.\" (Capital Bra)"),
    new StudentModel("Pauer","assets/mcqueen.png", 17, "Aleks", "\"Ich bin nicht hier, um Freunde zu finden, sondern um Erfolg zu haben.\" (Samra)"),
    new StudentModel("Ramljack","assets/mcqueen.png", 18, "Luka", "\"Ich hab' den Glauben an die Menschheit verloren.\" (Loredana)"),
    new StudentModel("Sakar","assets/mcqueen.png", 19, "Umut", "\"Manchmal muss man hart sein, um zu überleben.\" (Capital Bra)"),
    new StudentModel("Samarati","assets/mcqueen.png", 20, "Michael", "\"Sie sagen, ich sei arrogant, aber ich bin einfach selbstbewusst.\" (Bonez MC)"),
    new StudentModel("Trojan","assets/mcqueen.png", 21, "Victor", "\"Ich mach' mein Geld auf illegale Art und Weise.\" (Azet)"),
    new StudentModel("Vollmann","assets/mcqueen.png", 22, "Phillip", "\"Ich mach' alles für meine Familie, denn sie sind das Wichtigste für mich.\" (Azet)"),
    new StudentModel("Yusupova","assets/mcqueen.png", 23, "Linda", "\"Ich trage Gucci und Prada, weil ich es mir leisten kann.\" (Ufo361)"),
    new StudentModel("Yusupova","assets/mcqueen.png", 23, "Linda", "\"Ich trage Gucci und Prada, weil ich es mir leisten kann.\" (Ufo361)"),



]
