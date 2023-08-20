import { useEffect, useState } from "react"
import { Departments } from "../api/api"
import IDepartment from "../api/models/department.interface"
import { Button } from "@mui/material"

export default function SearchFilter() {
  const [departments, setDepartments] = useState<IDepartment[] | null[]>([])

  useEffect(() => {
    Departments.getAllDepartments
      .then(res => setDepartments(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <p>hi</p>
      <Button 
        variant="contained"
        onClick={() => console.log(departments)}
      >
        Button
      </Button>
    </>
  )
}