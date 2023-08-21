import { useEffect, useState } from "react"
import { Departments } from "../api/api"
import IDepartment from "../api/models/department.interface"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import upperFirstChar from "../utils/StringHelpers";
import _ from "lodash";

export default function SearchFilter() {
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

  function handleSubmit(e: any) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    console.log({
      "departmentName": data.get("departmentName"),
      "employeeName": data.get("employeeName")
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl 
          fullWidth 
          sx={{ display: "grid", gap: 2, mr: 2 }}
          onSubmit={(e) => console.log(e)}
        >
          <InputLabel>Department Name</InputLabel>
          <Select
            label="Department Name"
            defaultValue=""
            name="departmentName"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {departments.map(((d: IDepartment) => (
              <MenuItem key={d.department_id} value={d.department_name}>
                {d.department_name}
              </MenuItem>
            )))}
          </Select>

          <TextField label="Employee Name" variant="outlined" name="employeeName"/>
          <Button 
            variant="contained"
            type="submit"
          >
            Search
          </Button>
        </FormControl>
      </form>
    </>
  )
}