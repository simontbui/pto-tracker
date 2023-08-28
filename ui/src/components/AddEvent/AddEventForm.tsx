import { Button, FormControl, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function AddEventForm() {
  return(
    <>
      <form>
        <FormControl sx={{ display: "grid", gap: 1 }}>
          {/* Need validation logic to make sure end date >= startdate */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Start Date" />
            <DatePicker label="End Date" />
          </LocalizationProvider>

          <TextField label="Reason" variant="outlined" name="reason"/>

          <Button 
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  )
}