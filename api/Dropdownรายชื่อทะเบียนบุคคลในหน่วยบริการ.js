import http from 'k6/http';
import { token } from './token.js';

export function Dropdownรายชื่อทะเบียนบุคคลในหน่วยบริการ() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v1/options/patient-list?search=%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%99%E0%B9%89%E0%B8%B2%20%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%9A';

    const params = {
        headers: {
            'Cookie': ''+token
        },
    };

    const res = http.get(url, params);

    //console.log(res.body); // log response body

    return res; // return the response object
}
