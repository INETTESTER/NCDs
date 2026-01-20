//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';

import { ดึงข้อมูลการส่งตัวภายในระบบNCDs } from '../api/ดึงข้อมูลการส่งตัวภายในระบบNCDs.js';
import { ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ } from '../api/ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ.js';
import { ดึงข้อมูลVisitทั้งหน่วยบริการ } from '../api/ดึงข้อมูลVisitทั้งหน่วยบริการ.js';
import { ดึงข้อมูลการนัดหมายอบรมในหน่วยบริการ } from '../api/ดึงข้อมูลการนัดหมายอบรมในหน่วยบริการ.js';
import { ดึงข้อมูลผลประเมินสุขภาพ } from '../api/ดึงข้อมูลผลประเมินสุขภาพ.js';
import { เพิ่มทะเบียนบุคคลด้วยExcel } from '../api/เพิ่มทะเบียนบุคคลด้วยExcel.js';
import { Dropdownรายชื่อทะเบียนบุคคลในหน่วยบริการ } from '../api/Dropdownรายชื่อทะเบียนบุคคลในหน่วยบริการ.js';
import { สร้างVisit } from '../api/สร้างVisit.js';
import { ดึงข้อมูลVisitรายบุคคล } from '../api/ดึงข้อมูลVisitรายบุคคล.js';
import { สร้างแบบประเมินสุขภาพ } from '../api/สร้างแบบประเมินสุขภาพ.js';
import { Dashboardแสดงภาพรวมสุขภาพแต่ละแบบประเมิน } from '../api/Dashboardแสดงภาพรวมสุขภาพแต่ละแบบประเมิน.js';
import { สร้างนัดหมายการอบรม } from '../api/สร้างนัดหมายการอบรม.js';
import { สร้างเอกสารการส่งตัว } from '../api/สร้างเอกสารการส่งตัว.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //====================== API Get ข้อมูล ==========================//
  //response = ดึงข้อมูลการส่งตัวภายในระบบNCDs()
  // response = ดึงข้อมูลทะเบียนบุคคลทั้งหน่วยบริการ()
  // response = ดึงข้อมูลVisitทั้งหน่วยบริการ()
  // response = ดึงข้อมูลการนัดหมายอบรมในหน่วยบริการ()
  // response = ดึงข้อมูลผลประเมินสุขภาพ()

  //====================== API ไหลตาม Flow ปกติ ==========================//
  //response = เพิ่มทะเบียนบุคคลด้วยExcel()
  //response = Dropdownรายชื่อทะเบียนบุคคลในหน่วยบริการ()
  response = สร้างVisit()
  //response = ดึงข้อมูลVisitรายบุคคล()
  //response = สร้างแบบประเมินสุขภาพ()
  //response = Dashboardแสดงภาพรวมสุขภาพแต่ละแบบประเมิน()
  //response = สร้างนัดหมายการอบรม()
  //response = สร้างเอกสารการส่งตัว()


  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };