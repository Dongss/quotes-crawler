import * as https from 'https';

export function get(url: string) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            const { statusCode } = res;
            if (statusCode !== 200) {
                return reject(`statusCode:=${statusCode}`);
            }
            let data: any = [];
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                return resolve(data);
            });
        })
        .on('error', (e) => {
            return reject(e.message);
        });
    });
}