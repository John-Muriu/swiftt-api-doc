---
sidebar_position: 2
---

## 🔐 Authentication

**Endpoint**

`POST /authenticate`

Authenticate using your registered email and password to receive a **Bearer Token** for authorized access to all endpoints.

---

### Request Body
```json
{
  "email": "myemail@email.com",
  "password": "mypassword"
}
```
---

##### EXAMPLE REQUEST  
curl  
```curl
--location 'https://api-v2.swifttdial/api/v1/send/single/sms' \
--header 'Authorization: Bearer <token>' \
--header 'Content-Type: application/json' \
--data '{
  "sender": "mysender",
  "msisdn": "25471234567",
  "message": "Hello world"
}'
---
