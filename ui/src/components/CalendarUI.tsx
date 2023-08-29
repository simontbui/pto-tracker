import moment from "moment";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, List, ListItem, ListItemText, Modal, Typography } from "@mui/material";
import { EventDetails } from "../api/api";
import { IEventDetails } from "../api/models/event-details.interface";
import ISearchFilter from "../api/models/searchfilter.interface";

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

interface IProps {
  searchFilter: ISearchFilter | {}
}

export default function CalendarUI({searchFilter}: IProps) {
  const [eventDetails, setEventsDetails] = useState<IEventDetails[]>([]);
  const [currEventDetails, setCurrEventDetails] = useState<IEventDetails[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    EventDetails.get(searchFilter)
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
  },[searchFilter])

  function handleShowMore(e: any) {
    console.log(e);
    setCurrEventDetails(e);
    setModalOpen(true);
  }

  function handleShowEvent(e: any) {
    console.log(e);
    setCurrEventDetails([e]);
    setModalOpen(true);
    console.log("====EVENTDETAILS===")
    console.log(eventDetails)
  }
  function handleCloseModal() {
    setModalOpen(false);
    console.log("====SEARCH FILTER===")
    console.log(searchFilter);
  }

  function formatDate(dateTime: moment.Moment) {
    return dateTime.format("M/D/YYYY").split("T")[0];
  }

  return (
    <div className="rbc-calendar">
      <Calendar 
        localizer={localizer} 
        style={{ height: 510, width: 1200 }}
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
              <ListItem key={event.event_id}>
                <ListItemText primary={
                  event.first_name + " " + event.last_name + " " + event.title + " " + 
                  formatDate(event.date_start) + " - " +
                  formatDate(event.date_end)} 
                />
              </ListItem>
            )}
          </List>
        </Box>
      </Modal>
    </div>
  )
}