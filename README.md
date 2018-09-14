# quotes-crawler

Nodejs 名人名言爬虫，爬的是 https://www.goodreads.com/quotes

## Dev

```
npm install
npm run build
```

## Usage

GetQuotes(start, end)

* start: number. start page
* end: number. end page, 1 <= start <= end

## Example

```
const GetQuotes = require('./build');
const fs = require('fs');

// get quotes of page 1 and page 2
GetQuotes(1, 2).then(v => {
    console.log(`total: ${v.length}`);
    fs.writeFileSync('./data.json', JSON.stringify(v));
})
```

data.json:

```
[{
    "text": "“Don't cry because it's over, smile because it happened.”",
    "author": [{
        "name": "Dr. Seuss",
        "href": "https://www.goodreads.com//author/show/61105.Dr_Seuss"
    }],
    "tag": [{
        "name": "attributed-no-source",
        "href": "https://www.goodreads.com//quotes/tag/attributed-no-source"
    }, {
        "name": "cry",
        "href": "https://www.goodreads.com//quotes/tag/cry"
    }, {
        "name": "crying",
        "href": "https://www.goodreads.com//quotes/tag/crying"
    }, {
        "name": "experience",
        "href": "https://www.goodreads.com//quotes/tag/experience"
    }, {
        "name": "happiness",
        "href": "https://www.goodreads.com//quotes/tag/happiness"
    }, {
        "name": "joy",
        "href": "https://www.goodreads.com//quotes/tag/joy"
    }, {
        "name": "life",
        "href": "https://www.goodreads.com//quotes/tag/life"
    }, {
        "name": "misattributed-dr-seuss",
        "href": "https://www.goodreads.com//quotes/tag/misattributed-dr-seuss"
    }, {
        "name": "optimism",
        "href": "https://www.goodreads.com//quotes/tag/optimism"
    }, {
        "name": "sadness",
        "href": "https://www.goodreads.com//quotes/tag/sadness"
    }, {
        "name": "smile",
        "href": "https://www.goodreads.com//quotes/tag/smile"
    }, {
        "name": "smiling",
        "href": "https://www.goodreads.com//quotes/tag/smiling"
    }]
}, {
    "text": "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "author": [{
        "name": "Marilyn Monroe",
        "href": "https://www.goodreads.com//author/show/82952.Marilyn_Monroe"
    }],
    "tag": [{
        "name": "attributed-no-source",
        "href": "https://www.goodreads.com//quotes/tag/attributed-no-source"
    }, {
        "name": "best",
        "href": "https://www.goodreads.com//quotes/tag/best"
    }, {
        "name": "life",
        "href": "https://www.goodreads.com//quotes/tag/life"
    }, {
        "name": "love",
        "href": "https://www.goodreads.com//quotes/tag/love"
    }, {
        "name": "mistakes",
        "href": "https://www.goodreads.com//quotes/tag/mistakes"
    }, {
        "name": "out-of-control",
        "href": "https://www.goodreads.com//quotes/tag/out-of-control"
    }, {
        "name": "truth",
        "href": "https://www.goodreads.com//quotes/tag/truth"
    }, {
        "name": "worst",
        "href": "https://www.goodreads.com//quotes/tag/worst"
    }]
}, ...]
```