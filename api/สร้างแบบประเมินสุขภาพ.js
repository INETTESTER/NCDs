import http from 'k6/http';
import { token } from './token.js';

export function สร้างแบบประเมินสุขภาพ() {
    const url = 'https://ncds-prevention.buddy-care.org/service/api/v1/assessments';

    const payload = JSON.stringify({
        "vn": "VN000553",
        "patient_id": "be900336-0445-4733-b503-8f275608e3f3",
        "answer": [
            { "assessment_topic": "cvd", "key_name": "weight", "value": 25, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "height", "value": 155, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "waist", "value": 23, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "temperature", "value": 36, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "heart_rate", "value": 90, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "breath_rate", "value": 22, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "sbp", "value": 99, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "dbp", "value": 88, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "hba1c", "value": null, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "is_diabetes", "value": 1, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "family_diabetes", "value": 1, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "is_fasting", "value": null, "point": 0 },
            { "assessment_topic": "cvd", "key_name": "blood_sugar", "value": null, "point": 0 },

            { "assessment_topic": "carbohydrate", "key_name": "carbohydrate_1", "value": 1, "point": 0 },
            { "assessment_topic": "carbohydrate", "key_name": "carbohydrate_2", "value": 40, "point": 0 },

            { "assessment_topic": "mental", "key_name": "mental_1", "value": 0, "point": 0 },
            { "assessment_topic": "mental", "key_name": "mental_2", "value": 0, "point": 0 },

            { "assessment_topic": "cigarette", "key_name": "cigarette_1", "value": 0, "point": 0 },
            { "assessment_topic": "cigarette", "key_name": "cigarette_2", "value": null, "point": 0 },
            { "assessment_topic": "cigarette", "key_name": "cigarette_3", "value": null, "point": 0 },
            { "assessment_topic": "cigarette", "key_name": "cigarette_4", "value": null, "point": 0 },

            { "assessment_topic": "alcohol", "key_name": "alcohol_1", "value": 0, "point": 1 },
            { "assessment_topic": "alcohol", "key_name": "alcohol_2", "value": null, "point": 0 },
            { "assessment_topic": "alcohol", "key_name": "alcohol_3", "value": null, "point": 0 },
            { "assessment_topic": "alcohol", "key_name": "alcohol_4", "value": null, "point": 0 },
            { "assessment_topic": "alcohol", "key_name": "alcohol_5", "value": null, "point": 0 },
            { "assessment_topic": "alcohol", "key_name": "alcohol_6", "value": null, "point": 0 },
            { "assessment_topic": "alcohol", "key_name": "alcohol_7", "value": null, "point": 0 },

            { "assessment_topic": "kidney_knowledge_awareness", "key_name": "kidney_knowledge_awareness_1", "value": null, "point": 0 },
            { "assessment_topic": "kidney_knowledge_awareness", "key_name": "kidney_knowledge_awareness_2", "value": null, "point": 0 },
            { "assessment_topic": "kidney_knowledge_awareness", "key_name": "kidney_knowledge_awareness_3", "value": null, "point": 0 },
            { "assessment_topic": "kidney_knowledge_awareness", "key_name": "kidney_knowledge_awareness_4", "value": null, "point": 0 },
            { "assessment_topic": "kidney_knowledge_awareness", "key_name": "kidney_knowledge_awareness_5", "value": null, "point": 0 },
            { "assessment_topic": "kidney_knowledge_awareness", "key_name": "kidney_knowledge_awareness_6", "value": null, "point": 0 },

            { "assessment_topic": "kidney_knowledge_heath_access", "key_name": "kidney_knowledge_heath_access_1", "value": null, "point": 0 },
            { "assessment_topic": "kidney_knowledge_heath_access", "key_name": "kidney_knowledge_heath_access_2", "value": null, "point": 0 },

            { "assessment_topic": "kidney_knowledge_self_care", "key_name": "kidney_knowledge_self_care_1", "value": null, "point": 0 },
            { "assessment_topic": "kidney_knowledge_self_care", "key_name": "kidney_knowledge_self_care_2", "value": null, "point": 0 },

            { "assessment_topic": "kidney_knowledge_communication", "key_name": "kidney_knowledge_communication_1", "value": null, "point": 0 },

            { "assessment_topic": "kidney_knowledge_media", "key_name": "kidney_knowledge_media_1", "value": null, "point": 0 },
            { "assessment_topic": "kidney_knowledge_media", "key_name": "kidney_knowledge_media_2", "value": null, "point": 0 },
            { "assessment_topic": "kidney_knowledge_media", "key_name": "kidney_knowledge_media_3", "value": null, "point": 0 },

            { "assessment_topic": "kidney_knowledge_decision", "key_name": "kidney_knowledge_decision_1", "value": null, "point": 0 },

            { "assessment_topic": "kidney_behavior_diet", "key_name": "kidney_behavior_diet_1", "value": null, "point": 0 },
            { "assessment_topic": "kidney_behavior_diet", "key_name": "kidney_behavio_diet_2", "value": null, "point": 0 },
            { "assessment_topic": "kidney_behavior_diet", "key_name": "kidney_behavior_diet_3", "value": null, "point": 0 },
            { "assessment_topic": "kidney_behavior_diet", "key_name": "kidney_behavior_diet_4", "value": null, "point": 0 },
            { "assessment_topic": "kidney_behavior_diet", "key_name": "kidney_behavior_diet_5", "value": null, "point": 0 },

            { "assessment_topic": "kidney_behavior_exercise", "key_name": "kidney_behavior_exercise_1", "value": null, "point": 0 },

            { "assessment_topic": "kidney_behavior_smoke_alcohol", "key_name": "kidney_behavior_smoke_alcohol_1", "value": null, "point": 0 },
            { "assessment_topic": "kidney_behavior_smoke_alcohol", "key_name": "kidney_behavior_smoke_alcohol_2", "value": null, "point": 0 },

            { "assessment_topic": "kidney_behavior_medication", "key_name": "kidney_behavior_medication_1", "value": null, "point": 0 },
            { "assessment_topic": "kidney_behavior_medication", "key_name": "kidney_behavior_medication_2", "value": null, "point": 0 },
            { "assessment_topic": "kidney_behavior_medication", "key_name": "kidney_behavior_medication_3", "value": null, "point": 0 }
        ]
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
