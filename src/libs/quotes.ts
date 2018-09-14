import * as cheerio from 'cheerio';
import * as request from './request';

const QUOTES_ADDR = 'https://www.goodreads.com/';

export interface Author {
    name: string;
    href: string;
}

export interface Tag {
    name: string;
    href: string;
}

export interface Quote {
    text: string;
    author: Author[];
    tag: Tag[];
}

export class Quotes {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
    private parse(html: string): Quote[] {
        let quotes: Quote[] = [];
        let $ = cheerio.load(html);
        $('.quoteText').each(function(i, m ) {
            let t = $(this).text().split('\n');
            let text = t[1].trim();
            // author
            let authors: Author[] = [];
            $(this).find('a').each(function(ii, mm) {
                authors.push({
                    name: $(this).text(),
                    href: QUOTES_ADDR + $(this).attr('href')
                });
            });
            // tags
            let tags: Tag[] = [];
            let r = $(this).next('.quoteFooter').eq(0).find('.left').eq(0).find('a').each(function(ii, mm) {
                tags.push({
                    name: $(this).text(),
                    href:  QUOTES_ADDR + $(this).attr('href')
                });
            });
            quotes.push({
                text: text,
                author: authors,
                tag: tags
            });
        });
        return quotes;
    }
    async load(): Promise<Quote[]> {
        let content: any = await request.get(this.url);
        let qs = this.parse(content);
        return qs;
    }
}