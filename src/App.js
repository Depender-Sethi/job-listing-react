import React from "react";
import { Box, ThemeProvider, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import theme from "./theme/theme";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/Job/JobCard";
import NewJob from "./components/Job/NewJob";

export default () => {
  return <ThemeProvider theme={theme}>
    <Header title="New job search" postJob="true" dashboard="true"/>
    <Grid container justify="center">
      <Grid item xs={10}>
        <SearchBar />

        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Grid>
    </Grid>
  </ThemeProvider>
};
