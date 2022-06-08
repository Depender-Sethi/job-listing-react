import React from "react";
import NewJob from "../Job/NewJob";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Grid, Typography, Button } from "@material-ui/core";

export default props => (
    <Box py={10} bgcolor="secondary.main" color="white">
        <Grid container justify="center">
            <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4">{props.title}</Typography>
                    <Box display="flex" justifyContent="space-between">
                        {props.postJob && <Box m={1}>
                            <Button component={Link} to={'/new-job'} variant="contained" color="primary" disableElevation>
                                Post a Job
                            </Button>
                        </Box>}
                        {props.dashboard && <Box m={1}>
                            <Button variant="contained" color="primary" disableElevation>Dashboard</Button>
                        </Box>}
                    </Box>
                </Box>
            </Grid>
        </Grid>

    </Box >

);