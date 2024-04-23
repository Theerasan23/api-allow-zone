## express api กับการอนุญาตเฉพาะโซนประเทศ

เป็นการทดลองปิดกันการเข้าถึง api ของเรา โดยใช้ countries-and-timezones 


## Authors

- [@Theerasan Thimachai](https://github.com/Theerasan23)


## API Reference

#### access api  http://localhost:3000/api/token

```http
  POST /api/token
```

| parameter | type     | Description                |
| :-------- | :------- | :------------------------- |
  id | `string` | **Required** |
  user  | `string` | **Required** . username or something |
  zone          | `string` | **Required**. short zone , TH , US .etc |


### ตัวอย่าง body 


```json
  {
    "id":"1",
    "user":"theerasan",
    "zone":"TH"
  }
```

## Installation

Install project  with npm

```bash
  npm i # or npm init
  npm run dev
```