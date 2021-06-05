import React from 'react';
import {Box, Grid} from '@material-ui/core';
import icon1 from '../../Assets/Icons/icon5.svg';
import '../../Assets/Css/Section_2.css';
import Cards from './Cards/Cards';

const Section2 = () => {
  return (
    <Box className="section-2">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="section-2-grid"
      >
        <Grid item xs={1} className="section-2-grid-1"></Grid>
        <Grid item sm xs className="section-2-grid-2">
          <Cards
            title="Solar System Installation, Maintenance & Servicing"
            // subtitle="About Sol1 Products & Services"
            icon={icon1}
            bgcolor="#007DC0"
          />
        </Grid>
        <Grid item sm xs className="section-2-grid-3">
          <Cards
            title=" Financing your own solar system"
            // subtitle="Go solar for as little as €9.99 a month"
            icon={icon1}
            bgcolor="#FFDD00"
          />
        </Grid>
        <Grid item sm xs className="section-2-grid-4">
          <Cards
            title="Receive funding for your solar energy"
            // subtitle="Earn funding for your solar installation"
            icon={icon1}
            bgcolor="#FFAE01"
          />
        </Grid>
        <Grid item xs={1} className="section-2-grid-5"></Grid>
      </Grid>
    </Box>
  );
};

export default Section2;
