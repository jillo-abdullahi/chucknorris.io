# Chuck-norris.io
A React web app for all your Chuck Norris jokes needs.

![home screen](https://i.ibb.co/dbhJWCV/home.png)

To jump right into viewing the project, go to the following urls:

**Client:** https://norris-chuck-sovtech.web.app/
**Server (Playground)**: https://norris-chuck.herokuapp.com/

## Prerequisites

For development, you will only need Node.js and a node global package manager, Yarn, installed in your environement.

### Node
#### Node installation on Windows
  Just go to the [official Node.js website](https://nodejs.org/) and download the installer for the LTS version.

#### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

#### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
### Yarn
After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn



## Installation
Run the following commands from your terminal to grab yourself a copy of this project.

    $ git clone https://github.com/jillo-abdullahi/chucknorris.io.git
    $ cd chucknorris.io
  
  #### Set up server
  Install packages required by the Apollo server from the root directory.

      $ yarn install 
   #### Set up client.
   Install packages required to run the client from the client directory.
   
    $ cd client
    $ yarn install

## Running the project
Start the server and run the client from the root directory of the project.

	    $ yarn run dev
#### Test Locally.
Go to your browser and navigate to `http://localhost:3000/` to test the client.
Open the GraphQL playground from `http://localhost:4000/` to test the GraphQL endpoint.

## Built with

 1. [React](https://reactjs.org/)
 2.  [Apollo GraphQL](https://www.apollographql.com/)
 3.  [Redux](https://redux.js.org/)