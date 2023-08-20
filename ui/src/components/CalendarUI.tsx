import moment from "moment";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, List, ListItem, ListItemText, Modal, Typography } from "@mui/material";
import { EventDetails } from "../api/api";
import { IEventDetails } from "../api/models/event-details.interface";

const modalStyle = {
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

export default function CalendarUI() {
  const [eventDetails, setEventsDetails] = useState<IEventDetails[]>([]);
  const [currEventDetails, setCurrEventDetails] = useState<IEventDetails[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    EventDetails.getAllEvents
      .then(res => {
        let data: any[] = [];
        res.forEach((row: any) => data.push({
            event_id: row.event_id,
            first_name: row.first_name.charAt(0).toUpperCase() + row.first_name.slice(1),
            last_name: row.last_name.charAt(0).toUpperCase() + row.last_name.slice(1),
            title: row.reason.charAt(0).toUpperCase() + row.reason.slice(1),
            date_start: moment(row.date_start, "YYYY-MM-DD"),
            date_end: moment(row.date_end, "YYYY-MM-DD").add(1, "d")
        }))
        setEventsDetails(data);
      })
      .catch(err => console.log(err))
  },[])

  function handleShowMore(e: any) {
    console.log(e);
    setCurrEventDetails(e);
    setModalOpen(true);
  }

  function handleShowEvent(e: any) {
    console.log(e);
    setCurrEventDetails([e]);
    setModalOpen(true);

  }
  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <div className="rbc-calendar">
      <Calendar 
        localizer={localizer} 
        style={{ height: 500, width: 800, margin: "75px" }}
        views={["month"]}
        toolbar={true}
        events={eventDetails}
        startAccessor="date_start"
        endAccessor="date_end"
        onShowMore={(e) => handleShowMore(e)}
        onSelectEvent={(e) => handleShowEvent(e)}
      />

      <Modal 
        open={modalOpen}
        onClose={handleCloseModal}
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Time Off
          </Typography>
          <List>
            {currEventDetails?.map((event) =>
              <ListItem>
                <ListItemText primary={
                  event.first_name + " " + event.last_name + " " + event.title + " " + 
                  event.date_start.format("M/D/YYYY").split("T")[0] + " - " +
                  event.date_end.format("M/D/YYYY").split('T')[0]} 
                />
              </ListItem>
            )}
          </List>
        </Box>
      </Modal>
    </div>
  )
}