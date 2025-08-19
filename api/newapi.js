import http from 'k6/http';
import { check, sleep } from 'k6';

export function newapi() {
  const url = 'https://ncds-prevention.buddy-care.org/service/api/-/health-check';

  const headers = {
    'Cookie': 'auth_service=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIwNzEwMEY5RDY5OTdEIiwiZXhwIjoxNzU2NDQxNTY3LCJpYXQiOjE3NTUyMzE5NjcsImlzcyI6Im5jZHMtcHJldmVudGlvbiIsInN1YiI6IjBlMjUxMTUwLTFhNzktNDU4My04ZjA5LTRhNzczODAyNDZjNSJ9.NIlHewV7K4H6nxL2_J1kuJ3yVoMO0xOpALq3Z2HSTpo',
  };

  let res = http.get(url, { headers: headers });

  return res;

}
