import http from 'k6/http';
import { token } from './token.js';

export function สร้างเอกสารการส่งตัว() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v1/refer';

    const payload = JSON.stringify({
        "vn": "VN001072",
        "refer_type": "ncd",
        "refer_date": "2025-05-15T00:00:00.000Z",
        "refer_expire_date": "2025-06-15T00:00:00.000Z",
        "hcode_origin": "99998",
        "hcode_destination": "99998",
        "opd_or_ipd": "OPD",
        "emergency": "5",
        "medical_coverage": {
            "maininscl": "NOCOVERAGE",
            "ref_name": "",
            "hcode_main": "",
            "hcode_sub": "",
            "no": "",
            "hcode_payment": ""
        },
        "patient": {
            "profile": {
                "patient_id": "ad2c9578-2cdc-49e3-80b0-98b133ca86f0",
                "hn": "256805000050",
                "cid": "SNKJbFoKYlE4rnKmPbD/vYv9IHcI/JiEpYCA1EE=",
                "title_name": "นางสาว",
                "first_name": "ชัญญา",
                "middle_name": "",
                "last_name": "ทดสอบ",
                "gender": "female",
                "birthdate": "1990-04-18T00:00:00Z",
                "mobile_no": ""
            }
        },
        "initial_diagnosis_free_text": "fat",
        "reason_refer": "ทดสอบแก้ไขคำตอบอบรม7",
        "disease_type": ["bmi"],
        "doctor_cid": "ccccc"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': ''+token
        }
    };

    const res = http.post(url, payload, params);

    //console.log(res.body); // log response body

    return res; // return the response object
}
