import React, { useState, Fragment } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './Dashboard.css';
import title from './images/title.png';
import keyboard from './images/keyboard.png';
import fb from './images/logo-fb.png';
import yt from './images/logo-youtube.png';
import wp from './images/logo-wordpress.png';
import tw from './images/logo-twitter.png';
import sc from './images/logo-soundcloud.png';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import { Typography } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';

const drawerWidth = 240;

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
    marginRight: theme.spacing(2),
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
    padding: theme.spacing(3),
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
    [theme.breakpoints.up('sm')]: {
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

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <br />
            <br />
            <Divider classes={{root: classes.dividerColor}} />
            <List>
              <ListItem button key="home" onClick={handleClick} id="home">
                <ListItemText primary="Home/Bio" />
              </ListItem>
              <Collapse in={homeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="About Me" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="What's New" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Talents for Hire" />
                </ListItem>
              </List>
            </Collapse>
              <ListItem button key="music" onClick={handleClick} id="music">
                <ListItemText primary="Music" />
              </ListItem>
              <Collapse in={musicOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Recordings-Original" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Recordings-Other" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Sheet Music-Original" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Sheet Music-Other" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button key="virtualInstruments" onClick={handleClick} id="virtualInstruments">
                <ListItemText primary="Virtual Instruments" />
              </ListItem>
              <Collapse in={virtualOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="About Virtual Instruments" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="GeneralUser GS" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Guitar &amp; Bass" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Orchestral" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Percussion" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Virtue" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Miscellaneous" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Obsolete" />
                </ListItem>
              </List>
            </Collapse>
              <ListItem button key="contact">
                <ListItemText primary="Contact" />
              </ListItem>
              <List classes={{ root: classes.smallSocials }} className="socials">
                <ListItem>
                  <div className="tinySocials d-flex row-wrap">
                    <a href="https://www.youtube.com/user/SChrisCollins" target="_blank" rel="noreferrer">
                    <img src={yt} alt="youtube" className="mr-4" /></a>
                    <a href="https://schristiancollins.wordpress.com/" target="_blank" rel="noreferrer">
                    <img src={wp} alt="WordPress Blog" className="mr-4" /></a>
                    <a href="https://www.facebook.com/schristiancollins" target="_blank" rel="noreferrer">
                    <img src={fb} alt="facebook" className="mr-4" /></a>
                    <a href="https://twitter.com/SChrisCollins" target="_blank" rel="noreferrer">
                    <img src={tw} alt="twitter" className="mr-4" /></a>
                    <a href="https://soundcloud.com/s-christian-collins" target="_blank" rel="noreferrer">
                    <img src={sc} alt="soundcloud" className="mr-3" /></a>
                  </div>
                </ListItem>
              </List>
            </List>
            <div className="socials">
              <Divider classes={{root: classes.dividerColor}} />
              <List classes={{ root: classes.socials }}>
                <ListItemLink href="https://www.youtube.com/user/SChrisCollins" target="_blank" rel="noreferrer">
                  <img src={yt} alt="youtube" className="mr-2" /><ListItemText primary="YouTube"></ListItemText>
                </ListItemLink>
                <ListItemLink href="https://schristiancollins.wordpress.com/" target="_blank" rel="noreferrer">
                  <img src={wp} alt="WordPress Blog" className="mr-2" /><ListItemText primary="WordPress (blog)"></ListItemText>
                </ListItemLink>
                <ListItemLink href="https://www.facebook.com/schristiancollins" target="_blank" rel="noreferrer">
                  <img src={fb} alt="facebook" className="mr-2" /><ListItemText primary="Facebook"></ListItemText>
                </ListItemLink>
                <ListItemLink href="https://twitter.com/SChrisCollins" target="_blank" rel="noreferrer">
                  <img src={tw} alt="twitter" className="mr-2" /><ListItemText primary="Twitter"></ListItemText>
                </ListItemLink>
                <ListItemLink href="https://soundcloud.com/s-christian-collins" target="_blank" rel="noreferrer">
                  <img src={sc} alt="soundcloud" className="mr-2" /><ListItemText primary="SoundCloud"></ListItemText>
                </ListItemLink>
              </List>
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

        return (
        <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
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
                <nav className={classes.drawer} aria-label="mailbox folders">
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
            <div className={classes.toolbar} />
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
              facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
              donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
              imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
              arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
              donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
              facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
              tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
              consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
              vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
              hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
              tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
              nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
              accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
          </main>
        </div>
        )
}

export default Dashboard;
