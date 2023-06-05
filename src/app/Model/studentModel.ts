export class StudentModel{
    surname: string;
    imageUrlPB: string;

    id: number;

    vname: string;

    merk: string;




    geburtsdatum: string;

    sternzeichen: string;

    staatsang: string;

    familienzustand: string;

    liebfarbe: string;

    liebfach: string;

    liebfilm: string;

    hobby: string;

    plaene: string;

    infos: string;

    herkunft: string;


    constructor(surname: string, imageUrlPB: string, id: number, vname: string, merk:string, geburtsdatum: string, liebfach: string, hobby:string, plaene:string, herkunft: string, liebfarbe:string, sternzeichen: string, liebfilm: string, staatsang: string,familienzustand:string, infos: string){
        this.surname=surname;
        this.imageUrlPB=imageUrlPB;
        this.id = id;
        this.vname = vname;
        this.merk = merk;

        this.geburtsdatum=geburtsdatum;
        this.liebfach=liebfach;
        this.hobby=hobby;
        this.plaene=plaene;
        this.herkunft=herkunft;
        this.liebfarbe=liebfarbe;
        this.sternzeichen=sternzeichen;
        this.liebfilm=liebfilm;
        this.staatsang=staatsang;
        this.familienzustand=familienzustand;
        this.infos=infos;




//hallo
    }
}
export const STUDENTS: StudentModel[]=[
    new StudentModel("Akpinar","assets/Tarik_Akpinar_OHG.png", 1, "Tarik Can", "\"Ich hab' kein Mitleid, denn ich kenne keinen Schmerz.\" (Capital Bra)", "04.10.2004","Netzwerktechnik","Fußball", "Selbstständig", "Türkiye", "Schwarz/Blau", "Waage", "Harry Potter", "Türkiye","keine Angabe","ich bin ich und du bist du"),
    new StudentModel("Altmann","assets/Tim_Altmann_OHG.png", 2, "Tim", "\"Ich hab' kein Mitleid, denn ich kenne keinen Schmerz.\" (Capital Bra)", "10.06.2004","GGP, BPSK","Saufen und Fußball", "Nur Gott weiß", "Österreich", "Blau", "Zwilling", "Minecraft", "Österreich","Tier","Ich hab angst vor Google Forms"),
    new StudentModel("Begagic","assets/Hatidza_Begagic_OHG.png", 3, "Hatidza", "\"Ich bin ein Star, hol mich hier raus.\" (Bushido)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Benkovic","assets/Josip_Benkovic_OHG.png", 4, "Josip", "\"Wenn du was willst, dann hol es dir.\" (Samra)", "09.06.2004", "BSPK", "Fußball spielen", "nix", "Bosnien und Herzegovina", "baby blue", "Gemini", "Black Cover", "Österreich", "ledig","Ich mag Züge"),
    new StudentModel("Bilgin","assets/Salih_Bilgin_OHG.png", 5, "Salih", "\"Ich bin ein Alpha, kein Beta.\" (Bonez MC)", "17.11.2004", "AM", "Fußball", "IT-Security ", "Türkiye", "Türkis", "Skorpion", "Cars", "Österreich", "ledig","Macher.."),
    new StudentModel("Cakir","assets/Zerda_Cakir_OHG.png", 6, "Zerda", "\"Ich lebe für die Nacht, ich bin ein Nachtmensch.\" (Loredana)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Falk","assets/Michael_Falk_OHG.png", 7, "Michael", "\"Keiner kann mir sagen, was ich zu tun habe.\" (Mero)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Ghiritti","assets/Roberto_Ghiriti_OHG.png", 8, "Roberto", "\"Ich rede nicht viel, ich handle lieber.\" (Capital Bra)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Groiß","assets/Noel_Groiss_OHG.png", 9, "Noel", "\"Jeder ist ein Opfer, außer ich und meine Jungs.\" (Farid Bang)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Hedrich","assets/Florian_Hedrich_OHG.png", 10, "Florian", "\"Nur die Stärksten überleben in dieser Welt.\" (Azet)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Ibrahim","assets/Nagi_Ibrahim_OHG.png", 11, "Nagi", "\"Schwäche zeigen ist keine Option, ich muss stark sein.\" (Gzuz)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Khalifa","assets/Taisir_Khalifa_OHG.png", 12, "Taisir", "\"Meine Wut ist ein Teil von mir, sie treibt mich an.\" (Samra)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Lueger","assets/Philipp_Lueger_OHG.png", 13, "Phillipp", "\"Meine Augen sehen viel mehr als das, was vor ihnen liegt.\" (Loredana)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Mayerhofer","assets/Alexander_Mayerhofer_OHG2.png", 14, "Alex", "\"Wir leben schnell und riskant, aber das ist unsere Welt.\" (Farid Bang)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Milicic","assets/Lukas_Milicic_OHG.png", 15, "Lukas", "\"Wir sind nicht auf dieser Welt, um zu verlieren.\" (Mero)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Milojkovic","assets/Stefan_Milojkovic_OHG.png", 16, "Stefan", "\"Zeig' keine Schwäche, sonst wirst du zum Opfer.\" (Capital Bra)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Pauer","assets/Alexander_Pauer_OHG.png", 17, "Aleks", "\"Ich bin nicht hier, um Freunde zu finden, sondern um Erfolg zu haben.\" (Samra)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Ramljack","assets/Luca_Ramljak_OHG.png", 18, "Luka", "\"Ich hab' den Glauben an die Menschheit verloren.\" (Loredana)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Sakar","assets/Umut_Sakar_OHG.png", 19, "Umut", "\"Manchmal muss man hart sein, um zu überleben.\" (Capital Bra)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Samarati","assets/Michael_Samarati_OHG.png", 20, "Michael", "\"Sie sagen, ich sei arrogant, aber ich bin einfach selbstbewusst.\" (Bonez MC)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Trojan","assets/Viktor_Trojan_OHG.png", 21, "Victor", "\"Ich mach' mein Geld auf illegale Art und Weise.\" (Azet)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Vollmann","assets/Philipp_Vollmann_OHG.png", 22, "Phillip", "\"Ich mach' alles für meine Familie, denn sie sind das Wichtigste für mich.\" (Azet)", "", "", "", "", "", "", "", "", "", "",""),
    new StudentModel("Yusupova","assets/Linda_Yusupova_OHG.png", 23, "Linda", "\"Ich trage Gucci und Prada, weil ich es mir leisten kann.\" (Ufo361)", "", "", "", "", "", "", "", "", "", "",""),



]
