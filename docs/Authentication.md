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



EXPAMPLE RESPONSE
` curl --location https://api-v2.swifttdial.com/api/v1/authenticate' \
--data-raw '{
  "email": "myemail@email.com",
  "password": "mypassword"
}'
