import http from 'k6/http';
import { token } from './token.js';

export function สร้างนัดหมายการอบรม() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v1/trainings';

    const payload = JSON.stringify({
        "patient_id": "6cc01b78-0882-42ae-a76b-75f9e0f58980",
        "appointment_type": "recurring",
        "recurring": {
            "start_time": "15:00",
            "end_time": "17:00",
            "dates": [
                "2025-08-28T00:00:00Z",
                "2025-09-01T00:00:00Z",
                "2025-09-07T00:00:00Z",
                "2025-09-14T00:00:00Z",
                "2025-09-21T00:00:00Z",
                "2025-09-28T00:00:00Z",
                "2025-10-04T00:00:00Z",
                "2025-10-11T00:00:00Z",
                "2025-10-18T00:00:00Z",
                "2025-10-25T00:00:00Z",
                "2025-11-02T00:00:00Z",
                "2025-11-09T00:00:00Z"
            ]
        },
        "custom": []
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': ''+token
        }
    };

    const res = http.post(url, payload, params);
    //console.log(res.body);
    return res;
}
