import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Departments } from "../api/api"
import IDepartment from "../api/models/department.interface"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import upperFirstChar from "../utils/StringHelpers";
import _ from "lodash";
import ISearchFilter from "../api/models/searchfilter.interface";

interface IProps {
  setSearchFilter: Dispatch<SetStateAction<ISearchFilter>>
}

export default function SearchFilter({setSearchFilter}: IProps) {
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

    const data: any = new FormData(e.currentTarget);
    const deptName = data.get("departmentName");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");

    const filter: ISearchFilter = {
      departmentName: deptName,
      firstName: firstName,
      lastName: lastName
    }

    setSearchFilter(filter);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl 
          fullWidth 
          sx={{ display: "grid", gap: 1 }}
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

          <TextField label="First Name" variant="outlined" name="firstName"/>
          <TextField label="Last Name" variant="outlined" name="lastName"/>
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