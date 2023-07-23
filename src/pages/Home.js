import React from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
// import { SocialIcons } from '../components/content/SocialIcons';
import { CenterButton } from '../components/Button/CenterButton'; // Import the CenterButton component


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        <Content />
        <ThemeToggle />
        <CenterButton />
        {/* <Hidden smDown>
          <SocialIcons />
        </Hidden> */}
        <Hidden mdUp>
        </Hidden>
      </div>
    </>
  );
};
