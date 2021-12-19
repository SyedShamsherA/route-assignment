import React from 'react';
import {
  Grid,
  Box,
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
  Card,
  CardContent,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import Branches from './branch';
import StudentLogin from './Student';
import AboutUs from './About';
import AdminLogin from './admin';
import ContactUs from './Contact';

const styles = makeStyles({
  footerBox: {
    width: '100%',
    backgroundColor: '#1976d2',
    position: 'fixed',
    bottom: 0,
    marginLeft: -8,
    height: 80,
  },
  padding: {
    paddingLeft: '50%',
  },
});



export default function Introduction() {
  const classes = styles();
  return (
    <div>
      <Grid>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Guvi
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>{' '}
        <br />
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              XYZ Organization
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              India
            </Typography>
            <Typography variant="body2">
              Learning is the
              <br />
              {'"KEY to SUCCESS"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Contact Us</Button>
          </CardActions>
        </Card>{' '}
        <br /> <br />
        <Grid container spacing={2}>
          <Grid item>
            <NavLink to ="/AdminLogin">
            <Button variant="contained">AdminLogin</Button><AdminLogin /></NavLink>
          </Grid>
          <Grid item>
          <NavLink to ="/StudentLogin">
            <Button variant="contained">StudentLogin</Button><StudentLogin /></NavLink>
          </Grid>
        </Grid>
        <br />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>React JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
              React can be used as a base in the development of single-page or
              mobile applications.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Node JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browser.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Angular</Typography>
          </AccordionSummary>
        </Accordion>
      </Grid>
      <Box className={classes.footerBox}>
        <List className={classes.padding}>
         <NavLink to="/ContactUs"> <Button color="secondary">ContactUs</Button></NavLink>
         <NavLink to="/AboutUs"> <Button color="secondary"> AboutUs </Button></NavLink>
         <NavLink to="/Branches">  <Button color="secondary"> Branches </Button></NavLink>
        </List>
      </Box> 
      <ContactUs /> 
      <AboutUs />  
      <Branches />
    </div>
  );
  }


