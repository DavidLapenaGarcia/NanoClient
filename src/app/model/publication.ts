import { Author } from './author';
import { Keyword } from './keyword';


export class Publication {
    public pubId: number;
    public doi: string;
    public title: string;
    public abstract: string;
    public author: string;
    public pubType: string;
    public linkWeb: string;
    public linkDownload: string;
    public jsonRetieval: string;
    public jsonCrossref: string;
    public jsonArticle: string;
    public jsonScopus: string;

    public authors: Author[];
    public keywords: Keyword[];


    constructor(
                pubId: number, doi?: string, title?: string,
                abstract?: string, author?: string, pubType?: string,
                linkWeb?: string, linkDownload?: string, jsonRetieval?: string,
                jsonCrossref?: string, jsonArticle?: string, jsonScopus?: string,
                authors?: Author[], keywords?: Keyword[],
                ) {

        this.pubId = pubId;
        this.doi = doi;
        this.title = title;
        this.abstract = abstract;
        this.author = author;
        this.pubType = pubType;
        this.linkWeb = linkWeb;
        this.linkDownload = linkDownload;
        this.jsonRetieval = jsonRetieval;
        this.jsonCrossref = jsonCrossref;
        this.jsonArticle = jsonArticle;
        this.jsonScopus = jsonScopus;

        this.authors = authors;
        this.keywords = keywords;
  }

    setAuthors(authors): void {
        this.authors = authors;
    }
    getAuthors(): Author[] {
        return this.authors;
    }

    setkeywords(keywords): void {
        this.keywords = keywords;
    }
    getkeywords(): Keyword[] {
        return this.keywords;
    }
}

