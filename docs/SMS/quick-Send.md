---
sidebar_position: 2
---

# 📩 Send Single SMS

## Endpoint
`POST /send/single/sms`

Send a message to a single recipient instantly. Ideal for notifications, alerts, and transactional messages.

---

## Authorization
**Bearer Token**

---

## Request Body
```json
{
  "sender": "mysenderId",
  "msisdn": "25471234567",
  "message": "Hello world"
}
```

---

# Example Request

`POST`
```bash
curl --location 'https://api-v2.swifttdial/api/v1/send/single/sms' \
--header 'Authorization: Bearer <token>' \
--header 'Content-Type: application/json' \
--data '{
  "sender": "mysender",
  "msisdn": "25471234567",
  "message": "Hello world"
}'



```

---

## Example Response
```json
{
  "message": "Single SMS Sent Successfully"
}
```

---

# 📢 Send Bulk SMS

## Endpoint
`POST /send/bulk/sms`

Send a single message to multiple recipients in one request. Useful for marketing campaigns, service updates, and mass notifications.

---

## Authorization
**Bearer Token**

---

## Request Body
```json
{
  "sender": "mysender",
  "msisdn": ["25471234567","25471234546"],
  "message": "Hello world."
}
```

---

## Example Request
`POST`
```bash
curl --location 'https://api-v2.swifttdial.com/api/v1/send/bulk/sms'
 --header 'Authorization: Bearer <token>'
 --header 'Content-Type: application/json' \
  --data '{
  "sender": "mysender",
  "msisdn": ["25471234567","25471234546"],
  "message": "Hello world."
}'
```

---

## Example Response
```json
{
  "message": "SMS sent successfully"
}
```
