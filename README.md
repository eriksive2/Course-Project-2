# Integrated MERN Stack Application

This project consists of two integrated MERN stack applications running concurrently. It allows for simultaneous operation of two React frontends and their corresponding Node.js/Express backends.

## Prerequisites

Before running this project, you should have the following installed:
- Node.js (https://nodejs.org/en/download/)
- npm (comes with Node.js)
- MongoDB (https://www.mongodb.com/try/download/community)

## Installation

Clone the project repository and install dependencies for both frontend and backend applications:

```bash
git clone https://yourprojectrepository.git
cd Integarted_CAT3DCP

# Install root dependencies
npm install

# Install dependencies for client applications
cd client && npm install
cd ../client2 && npm install

# Install dependencies for server applications
cd ../server && npm install
cd ../server2 && npm install

# To run Both the Applications

cd Integarted_CAT3DCP
npm start


This command runs both frontends and backends. The client application will open in your default browser at http://localhost:3000. The client2 application runs in the background without opening a new browser window, accessible via http://localhost:4000. The corresponding backend servers will listen on ports 5000 and 4002, respectively.

Ensure MongoDB is running before starting the applications, as the backend requires an active connection to the database.


Further Details
Frontend (client): React application accessible on http://localhost:3000
Backend (server): Express server running on http://localhost:5000
Frontend (client2): React application running in the background on http://localhost:4000
Backend (server2): Express server running on http://localhost:4002
For more details, refer to the individual README files in each application directory if available.

Contributing
Please send a pull request if you would like to contribute to this project.

### ESLint Plugin Issue

**Problem:**
If you encounter an ESLint error related to the 'flowtype' plugin when trying to compile the project:

ERROR [eslint] Failed to load plugin 'flowtype' declared in 'package.json » eslint-config-react-app':
C:\Users\saith\CAT3DCP_Integration\Cat3DCP_integrated\node_modules\eslint-plugin-flowtype\dist\configs\recommended.json:
Unexpected end of JSON input

SOLUTION: 
npm uninstall eslint-plugin-flowtype
npm install eslint-plugin-flowtype --save-dev


Further Details
Frontend (client): React application accessible on http://localhost:3000
Backend (server): Express server running on http://localhost:5000
Frontend (client2): React application running in the background on http://localhost:4000
Backend (server2): Express server running on http://localhost:4002
For more details, refer to the individual README files in each application directory if available.

Contributing
Please send a pull request if you would like to contribute to this project.