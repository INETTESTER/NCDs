import http from 'k6/http';
import { token } from './token.js';

export function Dashboardแสดงภาพรวมสุขภาพแต่ละแบบประเมิน() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v2/assessments/f288b731-08a5-43c7-8db5-0fc26bb3622a/dashboard';

    const params = {
        headers: {
            'Cookie': ''+token
        },
    };

    const res = http.get(url, params);

    //console.log(res.body); // log response body

    return res; // return the response object
}
