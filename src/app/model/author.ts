export class Author {

    public authorId: number;

    public auid: string;
    public firstname: string;
    public surname: string;
    public initials: string;

    public country: string;
    public institutionName: string;

    public url: string;
    public jsonRetrieval: string;


    constructor(authorId: number,           auid?: string,      firstname?: string, 
                surname?: string,           initials?: string,  country?: string,
                institutionName?: string,   url?: string,       jsonRetrieval?: string) {

        this.authorId = authorId;

        this.auid = auid;
        this.firstname = firstname;
        this.surname = surname;
        this.initials = initials;

        this.country = country;
        this.institutionName = institutionName;

        this.url = url;
        this.jsonRetrieval = jsonRetrieval;
        
    }

}

