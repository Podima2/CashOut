import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Import the texture image (adjust the path to your image)
import textureImage from './ButtonBackground.jpeg';

const useStyles = makeStyles(() => ({
    buttonContainer: {
        position: 'relative', // Set the position to relative
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Center vertically
        top: '-25vh', // Move the button 10% closer to the top
  },
  button: {
    fontSize: '2rem', // Define the absolute font size
    padding: '20px 40px', // Define the absolute padding
    backgroundImage: `url(${textureImage})`, // Apply the texture as the background
    backgroundSize: 'cover', // Adjust the background size as needed
    borderRadius: '20px',
    transition: 'opacity 0.2s', // Add transition for smooth hover effect
    opacity: 0.2, // Set the default opacity to 0.2
    '&:hover': {
      opacity: 0.5, // Change opacity on hover to 0.5
      backgroundColor: 'rgba(255, 255, 255, 0.2) !important', // Prevent color change on hover
    },
    '&:active': {
      opacity: 0.8, // Change opacity on click/active
    },
    // Add any additional custom styles for the button here
  },
}));

export const CenterButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <Button variant="contained" color="primary" className={classes.button}>
        Cash Out {/* Change the button text to "Cash Out" */}
      </Button>
    </div>
  );
};
