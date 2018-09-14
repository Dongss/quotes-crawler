import {Quotes, Quote} from './quotes';

const QUOTES_ADDR = 'https://www.goodreads.com/quotes';

async function get(pageIndex: number) {
    let quotes = new Quotes(`${QUOTES_ADDR}/?page=${pageIndex}`);
    let qs = await quotes.load();
    return qs;
}

/**
 *
 *
 * @export
 * @param {number} [start=1] start page
 * @param {number} [end=1] end page, 1 <= start <= end
 * @returns {Promise<Quote[]>}
 */
export async function getQuotes(start: number = 1, end: number = 1): Promise<Quote[]> {
    let result: Quote[] = [];
    for (let i = start; i <= end; i++) {
        let qs = await get(i);
        result = result.concat(qs);
    }
    return result;
}

export default getQuotes;