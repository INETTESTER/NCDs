import http from 'k6/http';
import { token } from './token.js';

const fileData = http.file(open('../file/ncds_person_template (9).xlsx'), 'ncds_person_template (9).xlsx');

export function เพิ่มทะเบียนบุคคลด้วยExcel() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v1/patients/excel';

    const payload = {
        file: fileData,
    };

    const params = {
        headers: {
            'Cookie': ''+token
        },
    };

    const res = http.post(url, payload, params);

    //console.log(res.body); // log response body

    return res; // return the response object
}
