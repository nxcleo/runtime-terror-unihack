# runtime-terror-unihack

## Method 1: Commands of starting Project by using default create-react server:

Use this method if you don't need any back-end logic.

* **npm install** (install all packages for server-side)

* **npm run full-build**   (Install packages for client-side and build the React project)

* **npm run client** (start the server, and it will automatically re-build after any code updates)

* (It should automatically) goto "localhost:3000" in browser


## Method 2: Commands of starting Project by using our NodeJS server:

Use this method if you need back-end logic we wrote in NodeJS. (In this way you will need to build React project manually every time you have updated files in React)

* **npm install** (install all packages for server-side)

* **npm run full-build**   (Install packages for client-side and build the React project)

- **npm run build** (Only build the React project. ***i.e. After full-build, could just use this command after every update in "client" folder, unless there is a new package installed for client-side***)

* **npm start** (start the nodeJS server)

* goto "localhost:3000" in browser

