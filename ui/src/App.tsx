import { Box, Grid } from '@mui/material';
import CalendarUI from './components/CalendarUI';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import { styled } from "@mui/material/styles";

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
      {/* <Grid spacing={3}>
        <Grid item xs={5} sx={{ border: "1px solid #ccc" }}>
          <Box>
            <CalendarUI />
          </Box>
        </Grid>
        <Grid item xs={1} sx={{ border: "1px solid #ccc" }}>
          <SearchFilter />
        </Grid>
      </Grid> */}

      <Wrapper>
          <Box sx={{ border: "1px solid #ccc" }}>
            <CalendarUI />
          </Box>
        <Box sx={{ border: "1px solid #ccc" }} display="flex" alignItems="center" justifyContent="center" >
          <SearchFilter />
        </Box>
      </Wrapper>

      {/* <Grid sx={{ border: "1px solid #ccc" }} container>
        <Grid xs={6} sx={{ border: "1px solid #ccc" }} item>
          div one
        </Grid>
        <Grid xs={6} sx={{ border: "1px solid #ccc" }} item>
          div two
        </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
