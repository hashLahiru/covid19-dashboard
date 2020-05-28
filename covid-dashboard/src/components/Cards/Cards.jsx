import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading ...";
  }
  return (
    <div className={styles.constainer}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <Typography color="textSecondry" gutterBottom>
            Infected
          </Typography>
          <Typography varient="h5">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography varient="body2">Number of Active cases</Typography>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <Typography color="textSecondry" gutterBottom>
            Recovered
          </Typography>
          <Typography varient="h5">
            <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography varient="body2">Number of Recovered cases</Typography>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <Typography color="textSecondry" gutterBottom>
            Deaths
          </Typography>
          <Typography varient="h5">
            <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography varient="body2">Number of Deaths</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
