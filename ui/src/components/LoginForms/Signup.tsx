import { CssBaseline, Box, Typography, TextField, Button, Grid, Link, InputLabel, MenuItem, Select, FormControl, SelectChangeEvent } from "@mui/material";
import Paper from "@mui/material/Paper";
import Background from "./Background";
import { useEffect, useState } from "react";
import IDepartment from "../../api/models/department.interface";
import { Departments } from "../../api/api";
import upperFirstChar from "../../utils/StringHelpers";
import _ from "lodash";
import React from "react";

export default function Signup() {
  const [departments, setDepartments] = useState<IDepartment[]>([]);

  useEffect(() => {
    Departments.getAllDepartments
      .then(res => {
        let deptData: IDepartment[] = []
        res.forEach((row: IDepartment) => deptData.push({
          department_id: row.department_id,
          department_name: upperFirstChar(row.department_name)
        }));

        _.sortBy(deptData, ["department_name"]);
        setDepartments(deptData);
      })
      .catch(err => console.log(err))
  }, [])


  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  function handleSubmit(e: any) {
    e.preventDefault();

    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const departmentName = e.target.departmentName.value
    const email = e.target.email.value
    const password = e.target.password.value

    console.log(firstName, lastName, departmentName, email, password);
  }
  
  return(
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Background />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="firstName"
                label="First Name"
                type="firstName"
                id="firstName"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Last Name"
                type="lastName"
                id="lastName"
              />

              <Box sx={{mt: 1}} id="departmentName" >
                <FormControl fullWidth>
                    <InputLabel id="department-select">Department Name *</InputLabel> 
                    <Select
                        id="department-select"
                        label="Department Name"
                        name="departmentName"
                        defaultValue=""
                        required
                        onChange={handleChange}
                    >
                    {departments.map(((d: IDepartment) => (
                        <MenuItem key={d.department_id} value={d.department_name}>
                        {d.department_name}
                        </MenuItem>
                    )))}
                    </Select>
                </FormControl>
              </Box>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}   
              >
                Create Account
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/" variant="body2">
                    {"Return to login"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>  
  )
}