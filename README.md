# Tabs Documentation

Interactive app that lets you pay friends. To successfuly perform your request please start [here](#Getting-started).

## Getting  started


From within the root directory. 

Install dependencies running the following:
```   
npm install
```

Update .envUPDATE to .env and input your SYNAPSE client_id and client_secret
```
CLIENT_ID='<input here>'
CLIENT_SECRET='<input here>'
```


Start the server locally. Server will be listening on port 3000 
```
npm start
```

## Usage

> API Routes and information


## Summary 
API | API Endpoints  | Request Type | Input | Output | Description  |
----| -------------- | ------------- | ----- | ------ | ------------- | 
Details on all users| /allUsers | GET | none  | Details on all users  | Get details on all the users |
Details on user| /getUsers/:user_id | GET | User ID | Details on user  | Get details on one users |
Get validation MFA| /getvalidationPIN/:user_id| POST | User ID & Phone number  | Status of MFA  | Request MFA |
Input validation pin| /getoAuthKey | POST | Validation pin  | oAuth Key | Get oAuth Key |
View balance| /viewBalance | GET | User ID  | Balances  | Balance on all the users nodes|
View users transactions| /viewTransactions/:user_id | GET | User Id | All the transactions of the user  | View all the transactions of a specific user |
Make transactions| /makeTrans | GET | To Node Id & From Node id  | Status  | Status request of transactions |
