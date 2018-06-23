# Sample express.js servers
This repository contains two servers written in express.js
communicating over a REST api.
## Location service
It has 1 endpoint at `POST /locations`, that requires a valid JWT token as authentication.
It takes a json on the format `{"name": <location-name>}` and saves it as a new location in
it's database.
## User service
It also has 1 endpoint at `POST /locations`, that can be called without authentication.
It takes a json on the format `{"name": <location-name>}`, it
* Finds a hardcoded 'testuser' in the databse and creates a JWT token for her.
* Calls the location service to create a location.
* Saves the created location id in it's own databse together with the user id for the testuser.
## Running
Start each server by running `yarn start` in the `locations-service` and `user-service` subdirectories.
You can then invoke the user service endpoint with for example the following curl command:
`curl -X POST -d '{"name": "Borgby"} localhost:3001/locations`
