import { Box } from '@mui/material';
import CalendarUI from './components/CalendarUI';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import { styled } from "@mui/material/styles";
import AddEvent from './components/AddEvent/AddEvent';
import { useState } from 'react';
import ISearchFilter from './api/models/searchfilter.interface';

const Wrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: 8,
  marginTop: 16
});

function App() {
  const [searchFilter, setSearchFilter] = useState<ISearchFilter>({
    departmentName: "",
    firstName: "",
    lastName: ""
  });

  return (
    <div className="parent-container">
      <Header />

      <Wrapper>
        <Box sx={{ border: "1px solid #ccc", padding: "55px"  }}>
          <Box sx={{ display:"flex", justifyContent: "flex-start" }}>
            <AddEvent />
          </Box>
          <CalendarUI 
            searchFilter={searchFilter}
          />
        </Box>
        {/* <Box sx={{ border: "1px solid #ccc", display:"flex", alignItems:"center" }} > */}
        <Box sx={{ border: "1px solid #ccc" }} >
          <Box sx={{ top: "30%", position: "relative" }}>
            <SearchFilter 
              setSearchFilter={setSearchFilter}
            />
          </Box>
        </Box>
      </Wrapper>

      {/* <AddEventModal /> */}
    </div>
  );
}

export default App;
