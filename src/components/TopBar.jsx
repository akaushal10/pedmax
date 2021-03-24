import React from "react";
import { Button, Grid } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          item
          xs={6}
          className="text-left"
        >
          <Grid item>
            <Link to="" className="text-decoration-none">
              <Button startIcon={<MailIcon />} className="text-white">
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="sports/" className="text-decoration-none">
              <Button startIcon={<MailIcon />} className="text-white">
                Sports
              </Button>
            </Link>
          </Grid>
          <Grid item>
          <Link to="live-bets/" className="text-decoration-none">
            <Button startIcon={<MailIcon />} className="text-white">
              Live Bats
            </Button>
          </Link>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          item
          xs={6}
          className="text-left"
        >
          <Grid item>
            <Link
              to="login/"
              component={Button}
              style={{ backgroundColor: "#1d6373" }}
              className="mx-2 small btn-login text-white"
            >
              Login
            </Link>
            {/* <Button></Button> */}
          </Grid>
          <Grid item>
            <Link
              to="login/"
              component={Button}
              className="bg-orange text-white mx-2"
            >
              Register
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default TopBar;
