import {Routes, Route, useNavigate} from 'react-router-dom';
import { Box } from '@mui/material';
import CalendarUI from './components/CalendarUI';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import { styled } from "@mui/material/styles";
import AddEvent from './components/AddEvent/AddEvent';
import { useEffect, useState } from 'react';
import ISearchFilter from './api/models/searchfilter.interface';
import Login from './components/LoginForms/Login';
import { LoginAuth, LogoutAuth } from './api/api';

const Wrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: 8,
  marginTop: 16
});

function App() {
  const [searchFilter, setSearchFilter] = useState<ISearchFilter|object>({});
  const [auth, setAuth] = useState<boolean|null>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    LoginAuth()
      .then(res => res.authenticated ? setAuth(true) : setAuth(false))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [])
  
  function handleLoginSubmit(e: any) {
    e.preventDefault();

    const email = e.target.email.value
    const password = e.target.password.value

    console.log(email, password);

    LoginAuth(email, password)
      .then(res => setAuth(true))
      .catch(err => console.log(err));
  }

  function handleLogoutClick() {
    LogoutAuth()
      .then(res => console.log(res.Response))
      .catch(err => console.log(err))
      .finally(() => setAuth(false))
  }

  //stall page render until jwt authentication process is done 
  //(prevents login screen from flickering)
  if (loading === true) return <></>;

  if (!auth) return <Login handleLoginSubmit={handleLoginSubmit}/>;
  
  return (
    <div className="parent-container">
      <Header handleLogoutClick={handleLogoutClick}/>

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
