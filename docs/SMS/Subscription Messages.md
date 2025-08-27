<!-- ---
sidebar_position: 5
---

# Subscription Messages

`POST https://sms.murutechinc.com:2780/api/outbox/premium`

| Parameter        | Description                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------- |
| to               | An arraray of phone numbers                                                                  |
| message          | Message to be sent a single massage is 160 characters                                     |
| from:            | The short code that will be used to send the message                                         |
| profile_code     | linked to sms product configuration                                                          |
| message_id       | A unique reference number that will be sent back to you on the provided delivery endpoint    |
| dlr_callback_url | The Url that we will send you a delivery report once the message is terminated to the device |

## MT/MO Messages

Send a single message to one or multiple recipients
###Requests

| Parameter           | Description      |
| ------------------- | ---------------- |
| AUTHORIZATIONS:     | X-api-key        |
| REQUEST BODY SCHEMA | application/json |

`POST` 

```
    https://sms.murutechinc.com:2780/api/outbox/premium
    header 'X-API-Key: your-x-api' \
    header 'Content-Type: application/json' \
```

```json
Request Body:
{
   "profile_code": "22021501",
   "messages": [
       {
           "mobile_number": "254791876624",
           "message": " HI this is a Test",
           "message_type":1,
           "req_type": 1,
           "external_id": "tStriug0Usdecwc4xu12sczeepo99ge45xh0556xordguiyh"
       }
   ],
   "dlr_callback_url": "https://posthere.io/77e1-4095-9dba"
}'
```

```shell
sample code

curl --location --request POST 'https://sms.murutechinc.com:2780/api/outbox/premium' \
--header 'x-api-key: your x-api-key' \
--header 'Content-Type: application/json' \
--data-raw '{
   "profile_code": "123456",
   "messages": [
       {
           "mobile_number": "2547xxxxxxxx",
           "message": " HI this is a Test",
           "message_type":1,
           "req_type": 1,
           "external_id": "tStriug0Usdecwc4xu12sczeepo99ge45xh0556xordguiyh"
       }
   ],
   "dlr_callback_url": "https://posthere.io/77e1-4095-9dba"
}'
```
 -->
