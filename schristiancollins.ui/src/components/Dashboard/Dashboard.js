import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import { createBrowserHistory } from 'history';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';

//images
import title from './images/title.png';
import keyboard from './images/keyboard.png';
import fb from './images/logo-fb.png';
import yt from './images/logo-youtube.png';
import wp from './images/logo-wordpress.png';
import tw from './images/logo-twitter.png';
import sc from './images/logo-soundcloud.png';

//stylesheet
import './Dashboard.css';

import Routes from '../../App/Routes';

const drawerWidth = 240;
const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: '#000000',
  },
  menuButton: {
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "black",
    color: "white",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  dividerColor: {
    backgroundColor: 'darkgray',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  socials: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  smallSocials: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Dashboard(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [homeOpen, setHomeOpen] = React.useState(false);
    const [musicOpen, setMusicOpen] = React.useState(false);
    const [virtualOpen, setVirtualOpen] = React.useState(false);

    const handleClick = (e) => {
      if(e.target.parentNode.parentNode.id === 'home') {
        setHomeOpen(!homeOpen);
        setMusicOpen(false);
        setVirtualOpen(false);
      } else if(e.target.parentNode.parentNode.id === 'music') {
        setMusicOpen(!musicOpen);
        setHomeOpen(false);
        setVirtualOpen(false);
      } else if(e.target.parentNode.parentNode.id === 'virtualInstruments') {
        setVirtualOpen(!virtualOpen);
        setMusicOpen(false);
        setHomeOpen(false);
      }
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const closeDrawer = () => {
      setMobileOpen(false);
    }

    const drawer = (
      <Fragment>
        <div>
            <div className={classes.toolbar} />
            <br />
            <br />
            <Divider classes={{root: classes.dividerColor}} />
            <List>
              <ListItem
                button
                key="home"
                onClick={handleClick}
                id="home">
                <ListItemText primary="Home" />
              </ListItem>
              <Collapse in={homeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/"
                  className={classes.nested}>
                  <ListItemText primary="About Me" />
                </ListItem>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/whatsnew"
                  className={classes.nested}>
                  <ListItemText primary="What's New" />
                </ListItem>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/talents"
                  className={classes.nested}>
                  <ListItemText primary="Talents for Hire" />
                </ListItem>
              </List>
            </Collapse>
              <ListItem button key="music" onClick={handleClick} id="music">
                <ListItemText primary="Music" />
              </ListItem>
              <Collapse in={musicOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/compositions"
                  className={classes.nested}>
                  <ListItemText primary="Recordings-Original" />
                </ListItem>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/performances"
                  className={classes.nested}>
                  <ListItemText primary="Recordings-Other" />
                </ListItem>
                <ListItem button
                  onClick={closeDrawer}
                  component="a"
                  href="https://schristiancollins.musicaneo.com/sheetmusic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.nested}>
                  <ListItemText primary="Sheet Music-Original" />
                </ListItem>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/sheetmusic-other"
                  className={classes.nested}>
                  <ListItemText primary="Sheet Music-Other" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button key="virtualInstruments" onClick={handleClick} id="virtualInstruments">
                <ListItemText primary="Virtual Instruments" />
              </ListItem>
              <Collapse in={virtualOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/soundfonts"
                  className={classes.nested}>
                  <ListItemText primary="About Virtual Instruments" />
                </ListItem>
                <ListItem 
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/generaluser"
                  className={classes.nested}>
                  <ListItemText primary="GeneralUser GS" />
                </ListItem>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/guitarandbass"
                  className={classes.nested}>
                  <ListItemText primary="Guitar &amp; Bass" />
                </ListItem>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/orchestral"
                  className={classes.nested}>
                  <ListItemText primary="Orchestral" />
                </ListItem>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/percussion"
                  className={classes.nested}>
                  <ListItemText primary="Percussion" />
                </ListItem>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/synfonia"
                  className={classes.nested}>
                  <ListItemText primary="Synfonia" />
                </ListItem>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/virtue"
                  className={classes.nested}>
                  <ListItemText primary="Virtue" />
                </ListItem>
                <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/misc"
                  className={classes.nested}>
                  <ListItemText primary="Miscellaneous" />
                </ListItem>
                {/* <ListItem
                  button
                  onClick={closeDrawer}
                  component={Link}
                  to="/obsolete"
                  className={classes.nested}>
                  <ListItemText primary="Obsolete" />
                </ListItem> */}
              </List>
            </Collapse>
              <List classes={{ root: classes.smallSocials }} className="socials small-socials">
                <ListItem>
                  <div className="tinySocials d-flex row-wrap">
                    <a component={Link} href="/contact" className="mr-3"><MailIcon /></a>
                    <a href="https://www.youtube.com/user/SChrisCollins" target="_blank" rel="noopener noreferrer">
                    <img src={yt} alt="youtube" className="mr-3" /></a>
                    <a href="https://schristiancollins.wordpress.com/" target="_blank" rel="noopener noreferrer">
                    <img src={wp} alt="WordPress Blog" className="mr-3" /></a>
                    <a href="https://www.facebook.com/schristiancollins" target="_blank" rel="noopener noreferrer">
                    <img src={fb} alt="facebook" className="mr-3" /></a>
                    <a href="https://twitter.com/SChrisCollins" target="_blank" rel="noopener noreferrer">
                    <img src={tw} alt="twitter" className="mr-3" /></a>
                    <a href="https://soundcloud.com/s-christian-collins" target="_blank" rel="noopener noreferrer">
                    <img src={sc} alt="soundcloud" className="mr-3" /></a>
                  </div>
                </ListItem>
              </List>
            </List>
            <div className="socials large-socials">
              <Divider classes={{root: classes.dividerColor}} />
              <List classes={{ root: classes.socials }}>
                <ListItemLink href="/contact">
                  <MailIcon className="mr-2" /><ListItemText primary="Contact"></ListItemText></ListItemLink>
                <ListItemLink href="https://www.youtube.com/user/SChrisCollins" target="_blank" rel="noopener noreferrer">
                  <img src={yt} alt="youtube" className="mr-2" /><ListItemText primary="YouTube"></ListItemText>
                </ListItemLink>
                <ListItemLink href="https://schristiancollins.wordpress.com/" target="_blank" rel="noopener noreferrer">
                  <img src={wp} alt="WordPress Blog" className="mr-2" /><ListItemText primary="WordPress (blog)"></ListItemText>
                </ListItemLink>
                <ListItemLink href="https://www.facebook.com/schristiancollins" target="_blank" rel="noopener noreferrer">
                  <img src={fb} alt="facebook" className="mr-2" /><ListItemText primary="Facebook"></ListItemText>
                </ListItemLink>
                <ListItemLink href="https://twitter.com/SChrisCollins" target="_blank" rel="noopener noreferrer">
                  <img src={tw} alt="twitter" className="mr-2" /><ListItemText primary="Twitter"></ListItemText>
                </ListItemLink>
                <ListItemLink href="https://soundcloud.com/s-christian-collins" target="_blank" rel="noopener noreferrer">
                  <img src={sc} alt="soundcloud" className="mr-2" /><ListItemText primary="SoundCloud"></ListItemText>
                </ListItemLink>
              </List>
            </div>
        </div>
        </Fragment>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

        return (
        <Router history={history}>
        <div className={classes.root}>
          <AppBar position="fixed" className={classes.appBar}>
              <Toolbar disableGutters={true}>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
              >
                  <MenuIcon />
              </IconButton>
              <img src={title} alt="S.Christian Collins" className="title"/>
              <img src={keyboard} alt="keyboard" className="keyboard"/>
              </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="menu" id="mobileDrawer">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <Routes />
          </main>
          </div>
        </Router>
        )
}

export default Dashboard;
