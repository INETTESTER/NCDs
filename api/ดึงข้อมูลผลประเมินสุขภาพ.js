import http from 'k6/http';
import { token } from './token.js';

export function ดึงข้อมูลผลประเมินสุขภาพ() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v2/visit/be900336-0445-4733-b503-8f275608e3f3/health-result?type=assessment';

    const params = {
        headers: {
            'Cookie': ''+token
        },
    };

    const res = http.get(url, params);

    //console.log(res.body); // log response body

    return res; // return the response object
}
