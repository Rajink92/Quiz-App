## Quizzy! The Quiz app!

<img width="1440" alt="Screen Shot 2022-05-07 at 1 25 05 PM" src="https://user-images.githubusercontent.com/95498292/167265130-edc9a6f6-c45c-476e-b13b-c3b92b2477e6.png">

<img width="1440" alt="Screen Shot 2022-05-07 at 1 22 21 PM" src="https://user-images.githubusercontent.com/95498292/167265209-e696871e-daf4-4d54-8386-6b2156ac5397.png">

<img width="1440" alt="Screen Shot 2022-05-07 at 1 22 36 PM" src="https://user-images.githubusercontent.com/95498292/167265059-7186b758-cc3d-436b-8690-2c3b520052a0.png">

<img width="1440" alt="Screen Shot 2022-05-07 at 1 22 09 PM" src="https://user-images.githubusercontent.com/95498292/167265235-b29f80a5-ba87-4f30-a691-bf67330b9879.png">

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
