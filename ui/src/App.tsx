import { Box, Container, Grid } from '@mui/material';
import CalendarUI from './components/CalendarUI';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import { styled } from "@mui/material/styles";
import AddEvent from './components/AddEvent';

const Wrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: 8,
  marginTop: 16
});

function App() {
  return (
    <div className="parent-container">
      <Header />

      <Wrapper>
        <Box sx={{ border: "1px solid #ccc", padding: "55px"  }}>
          <Box sx={{ display:"flex", justifyContent: "flex-start" }}>
            <AddEvent />
          </Box>
          <CalendarUI />
        </Box>
        {/* <Box sx={{ border: "1px solid #ccc", display:"flex", alignItems:"center" }} > */}
        <Box sx={{ border: "1px solid #ccc" }} >
          <Box sx={{ top: "30%", position: "relative" }}>
            <SearchFilter />
          </Box>
        </Box>
      </Wrapper>
    </div>
  );
}

export default App;
