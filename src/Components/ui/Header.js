import React , {useState ,useEffect}from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import logo from '../../assets/main-logo.png'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom:"5rem"
  },
  logo: {
    height: '70px',
  },
  tabContainer: {
    marginLeft: 'auto',
    
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 7,
    marginRight: '80px',
  },
  logoContainer: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export default function Header(App) {
    const routes= ['/', '/about', '/revloution', '/contact']
    const classes = useStyles()
    const [value,setValue] = useState(0)

    const handleChange = (e, value) =>{
        setValue(value)
    }
    useEffect( () =>{
        const indexRoute = routes.includes(window.location.pathname) && routes.indexOf(window.location.pathname || 0)
        setValue(indexRoute)
    }, [routes,value])
    return (
      <>
        <ElevationScroll>
          <AppBar position='fixed' color='primary'>
            <Toolbar disableGutters>
              <Button component={Link} to="/" disableRipple className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt='logo' />
              </Button>
              <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor='primary'
              >
                <Tab
                  className={classes.tab}
                  label='Home'
                  component={Link}
                  to='/'
                />
                <Tab
                  className={classes.tab}
                  label='About'
                  component={Link}
                  to='/about'
                />
                <Tab
                  className={classes.tab}
                  label='Revolution'
                  component={Link}
                  to='/revolution'
                />
                <Tab
                  className={classes.tab}
                  label='Contact'
                  component={Link}
                  to='/contact'
                />
              </Tabs>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </>
    );

}