import moment from "moment";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Events } from "../api/events";
import { Box, Modal, Typography } from "@mui/material";

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

export default function CalendarUI() {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  

  const localizer = momentLocalizer(moment);

  useEffect(() => {
    Events.getAllEvents("events")
      .then(res => {
        let data:any = []
        res.forEach((row: any) => data.push({
            title: row.reason,
            start: moment(row.date_start, "YYYY-MM-DD"),
            end: moment(row.date_end, "YYYY-MM-DD").add(1, "d")
        }))
        setEvents(data);
      })
      .catch(err => console.log(err))
  },[])

  function handleOpenModal(e: any) {
    console.log(e);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  // firstname | lastname | startdate | enddate | reason
  return (
    <div className="rbc-calendar">
      <Calendar 
        localizer={localizer} 
        style={{ height: 500, width: 800, margin: "75px" }}
        views={["month"]}
        toolbar={true}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onShowMore={(e) => handleOpenModal(e)}
        onSelectEvent={(e) => handleOpenModal(e)}
      />

      <Modal 
        open={modalOpen}
        onClose={handleCloseModal}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Temporary placeholder text for PTO modal title.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Temporary placeholder text.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}