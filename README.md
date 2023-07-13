### To run:
Install Docker Desktop (Windows/Mac). CD to the root directory and run `docker compose up`. 

Access PgAdmin4 web browser DB UI: `localhost:8080`

1. Login using: admin@admin.com / root
2. Right click Servers (left hand side)
3. Register
4. Server
5. In the General tab, set `Name` = `localhost` 
6. In the Connection tab, set the following (everything else can be left alone):
   a. `Hostname/Address` = `pgdatabase` 
   b. `Port` = `5432`
   c. `Username` = `root`
   d. `Password` = `root`
