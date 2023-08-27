import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function AddEvent() {
  return(
    <Button 
      variant="contained" 
      endIcon={<AddIcon /> }
      sx={{ mb: "10px" }}
    >
      Add Event
    </Button>
  )
}