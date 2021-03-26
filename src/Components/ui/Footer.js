import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'


import footerLogo from '../../assets/main-logo.png'

const useStyles = makeStyles((theme) => ({
  footer:{
      backgroundColor: theme.palette.common.grey,
      width:"100%",
      height:"400px"
  },
  footerlogo:{
      marginTop:"8rem"
  },
  mainContainer:{
    position:"absolute"
  },

  link:{
      color:"white",
      fontFamily: "Arial",

      
  },
  gridItem:{
      margin:"7rem"
  }
  
  
  
}));

export default function Footer(){
    const classes = useStyles()

    return (
      <footer className={classes.footer}>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column'>
              <Grid item className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item className={classes.link}>
                services
              </Grid>
              <Grid item className={classes.link}>
                Lorem ipsum dolor
              </Grid>
              <Grid item className={classes.link}>
                Lorem ipsum dolor
              </Grid>
              <Grid item className={classes.link}>
                services
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item className={classes.link}>
                services
              </Grid>
              <Grid item className={classes.link}>
                Lorem ipsum dolor
              </Grid>
              <Grid item className={classes.link}>
                Lorem ipsum dolor
              </Grid>
              <Grid item className={classes.link}>
                services
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item className={classes.link}>
                Contact
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <img
          className={classes.footerlogo}
          src={footerLogo}
          alt='footer logo'
        />
      </footer>
    );}