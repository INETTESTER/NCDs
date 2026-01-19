import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลการส่งตัวภายในระบบNCDs() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v2/refer/ncd';

    const params = {
        headers: {
            'Cookie': ''+token
        },
    };

    const res = http.get(url, params);

    //console.log(res.body); // log response body

    return res; // return the response object
}
