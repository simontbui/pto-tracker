import { CssBaseline, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Paper from "@mui/material/Paper";
import Background from "./Background";
import { LoginAuth } from "../../api/api";

interface IProps {
  navigateToSignUp: Function
}

export default function Login() {
  function handleSubmit(e: any) {
    e.preventDefault();

    const email = e.target.email.value
    const password = e.target.password.value

    console.log(email, password);

    LoginAuth(email, password)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return(
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Background />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "text.disabled" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2" >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>  
  )
}