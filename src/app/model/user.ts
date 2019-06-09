export class Keyword {
    public userId: number;
    public mail: string;
    public password: string;
    public firstname: string;
    public surname: string;
    public auid: string;
    public initials: string;
    public country: string;
    public institutionName: string;

    constructor(userId: number,     mail?: string,       password?: string,
                firstname?: string,  surname?: string,    auid?: string,
                initials?: string,   country?: string,    institutionName?: string ) {
        this.userId             = userId;
        this.mail               = mail;
        this.password           = password;
        this.firstname          = firstname;
        this.surname            = surname;
        this.auid               = auid;
        this.initials           = initials;
        this.country            = country;
        this.institutionName    =  institutionName;
    }

}


