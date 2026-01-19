import http from 'k6/http';
import { token } from './token.js';

export function สร้างVisit() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v1/visit';

    const payload = JSON.stringify({
        patient_id: 'be900336-0445-4733-b503-8f275608e3f3'
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
