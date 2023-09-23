import {Routes, Route, useNavigate, redirect, Navigate} from 'react-router-dom';
import { Box } from '@mui/material';
import CalendarUI from './components/CalendarUI';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import { styled } from "@mui/material/styles";
import AddEvent from './components/AddEvent/AddEvent';
import { useEffect, useState } from 'react';
import ISearchFilter from './api/models/searchfilter.interface';
import Login from './components/LoginForms/Login';
import { VerifyAuth } from './api/api';
import { useAppDispatch, useAppSelector } from './store';
import { setIsAuth } from './slices/loginSlice';

const Wrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: 8,
  marginTop: 16
});

function App() {
  const navigate = useNavigate();
  const [searchFilter, setSearchFilter] = useState<ISearchFilter|object>({});
  const { isAuth } = useAppSelector(state => state.login);
  const dispatch = useAppDispatch();

  useEffect(() => {
    VerifyAuth()
      .then(res => {
        if (res.authenticated) {
          dispatch(setIsAuth(true));
        } else {
          dispatch(setIsAuth(false));
          navigate("login");
        }
      })
      .catch(err => console.log(err))
  }, [])

  if (!isAuth) {
    return <></>
  }

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
              searchFilter={searchFilter}
            />
          </Box>
        </Box>
      </Wrapper>

      {/* <AddEventModal /> */}
    </div>
  );
}

export default App;
