import http from 'k6/http';
import { token } from './token.js';

export function สร้างVisit() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v1/visit';

    const payload = JSON.stringify({
        patient_id: '6cc01b78-0882-42ae-a76b-75f9e0f58980'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': ''+token
        },
    };

    const res = http.post(url, payload, params);

    //console.log(res.body); // log response body

    return res; // return the response object
}
