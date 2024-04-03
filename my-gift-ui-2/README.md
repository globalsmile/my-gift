##About MyGift
This web application was created in response to the gap in tracking the way gift items are distributed in various settings. The various settings are unlimited and include schools, corporate organisations, non-governmental organisations etc.

This web application simply helps with the coordination of gift items disbursement to deserving persons in various settings.

This web application provides a seamless way to plan and track how gift items are distributed.


##Features
User are able to:
Add and view gifts
Track those who have collected gifts.

##Storage
Data is stored in the cloud service provided by ElephantSQL

##Tech Stack
Languages: JavaScript, Node.js
Frontend: React.js, HTML/CSS
Backend: Express.js, Pris,a
Database: PostgresSQL (ElephantSQL)

##Usage Local
1. Run the frontend
Open the my-gift-ui-2 directory: cd ny-gift-ui-2
Install dependencies: npm install
Run the app: npm start
2. Run the backend
Open the my-gift-server directory.
Note: the app uses ElephantSQL to host the database
Populate the database through the frontend
or
Paste the database URL in the .env file
Install Prisma using npm install prisma --save-dev
Create the Schema.Prisma file using npx prisma init
and Push the configuration using  npx prisma db push
Create your API endpoints and database controllers using the index.ts file ./src folder 
Use any client of your choice to check if the APIs are working fine
Open the server directory and run npm start
