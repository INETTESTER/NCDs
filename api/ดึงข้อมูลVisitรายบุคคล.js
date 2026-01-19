import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลVisitรายบุคคล() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v1/visit/9cc9f2dc-e4d7-47e9-88b5-fadfda852d2d';

    const params = {
        headers: {
            'Cookie': ''+token
        },
    };

    const res = http.get(url, params);

    //console.log(res.body); // log response body

    return res; // return the response object
}
