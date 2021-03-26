import React from 'react';
import landingImage from '../assets/landing.jpg'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Button from'@material-ui/core/Button'
import { Typography } from '@material-ui/core';


const useStyle = makeStyles((theme) => ({
  landingImage: {
    width:"100%"
    
   
 
  
  },
  heaing:{
     marginLeft:"50px",
    display : "flexbox"
  }
 
}));

export default function Landing(){
    const classes = useStyle()
    return (
      <>
        <div >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography className={classes.heading} >welcome to the page</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box component='span' m={1}>
                <img
                  className={classes.landingImage}
                  src={landingImage}
                  alt='landing image'
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      </>
    );
}