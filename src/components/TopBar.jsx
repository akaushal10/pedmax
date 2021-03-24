import React from "react";
import { Button, Grid } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
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
            <Button startIcon={<MailIcon />}>Home</Button>
          </Grid>
          <Grid item>
            <Button startIcon={<MailIcon />}>Sparts</Button>
          </Grid>
          <Grid item>
            <Button startIcon={<MailIcon />}>Live Bats</Button>
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
            <Button>Login</Button>
          </Grid>
          <Grid item>
            <Button>Register</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default TopBar;
