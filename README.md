## Quizzy! The Quiz app!


![Screen Shot 2022-05-04 at 9 47 23 PM (2)](https://user-images.githubusercontent.com/95498292/167264969-a985410f-5a75-4d6b-aff1-2234eb6d4779.png)
<img width="1440" alt="Screen Shot 2022-05-07 at 1 22 13 PM" src="https://user-images.githubusercontent.com/95498292/167265056-e8519838-3bc0-4bf0-b680-58<img width="1440" alt="Screen Shot 2022-05-07 at 1 22 21 PM" src="https://user-images.githubusercontent.com/95498292/167265058-7bb8cf7d-4df7-4c2a-8132-824edb9a9cb7.png">
7cde9e05fa.png">
<img width="1440" alt="Screen Shot 2022-05-07 at 1 22 36 PM" src="https://user-images.githubusercontent.com/95498292/167265059-7186b758-cc3d-436b-8690-2c3b520052a0.png">
<img width="1440" alt="Screen Shot 2022-05-07 at 1 22 02 PM" src="https://user-images.githubusercontent.com/95498292/167265062-4e95c595-759f-4da9-87ae-9a788<img width="1440" alt="Screen Shot 2022-05-07 at 1 22 09 PM" src="https://user-images.githubusercontent.com/95498292/167265063-fbb554b0-f807-4769-b88f-45e9be9409ed.png">
ac6dd27.png">
<img width="1440" alt="Screen Shot 2022-05-07 at 1 21 54 PM" src="https://user-images.githubusercontent.com/95498292/167265069-9a97a765-26d3-4910-b82d-36db17cbdfe0.png">


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
