export class Keyword {
    public keyWordId: number;
    public totem: string;
    public contented: string;


    constructor(keyWordId: number, totem?: string, contented?: string) {
        this.keyWordId = keyWordId;
        this.totem = totem;
        this.contented = contented;
    }

}


