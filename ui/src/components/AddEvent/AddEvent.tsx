import { Box, Button, Modal, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import AddEventForm from "./AddEventForm";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddEvent() {
  const [eventModalIsOpen, setEventModalIsOpen] = useState(false);

  const handleOpen = () => setEventModalIsOpen(!eventModalIsOpen);

  const handleClose = () => setEventModalIsOpen(!eventModalIsOpen);

  return(
    <>
      <Button 
      variant="contained" 
      endIcon={<AddIcon /> }
      sx={{ mb: "10px" }}
      onClick={handleOpen}
      >
        Add Event
      </Button>

      <Modal
        open={eventModalIsOpen}
        onClose={handleClose}
      >
        <Box sx={style}>
          <AddEventForm />
        </Box>
      </Modal>
    </>
  )
}