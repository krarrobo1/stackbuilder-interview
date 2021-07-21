# Instructions

1. Install dependencies w/ the following command

```
npm install
```
2. Start the app

```
npm run start
```

3. Make an http POST request to:
http://localhost:3000/plateCheck

4. Insert plate and date in request body.
{
    "plate":"AAA-1239",
    "date":"2021-07-21 20:00:00"
}

5. Responses

If user can "road" it will response:

{
    "canRoad": true,
    "message": "You can road!, Drive safe"
}

If user cannot "road" it will response:

{
    "canRoad": false,
    "message": "You cannot road! Please take another transport"
}