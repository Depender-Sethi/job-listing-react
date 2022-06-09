import React, { useState } from 'react';
import Header from '../Header';
import { Box, Grid, FilledInput, Seelct, MenuItem, ThemeProvider, TextField, Button } from "@material-ui/core";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import frLocale from 'date-fns/locale/fr'
import theme from "../../theme/theme";
import axios from 'axios';

export default props => {
    const [formData, setFormData] = useState({
        jobRole: '',
        companyName: '',
        lastDate: null,
        openingDate: null,
        companyDescription: '',
        roles: '',
        jobDescription: '',
        qualification: '',
        location: '',
        jobType: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {};
        // data.lastDate = data.lastDate.toISOString();
        // data.openingDate = data.openingDate.toISOString();
        data.title = formData.jobRole;
        data.description = formData.jobDescription;
        data.requirementArray = ["React", "Spring Boot"];
        data.applyBy = formData.lastDate.toISOString();
        data.createdAt = formData.openingDate.toISOString();
        data.qualificationArray = [formData.qualification];
        data.salaryRange = "2,00,000 to 4,00,000";
        data.applicationNo = 10;
        data.recruiterId = 1;
        data.tagsArray = [formData.roles];
        data.hiring = false;
        console.log(data);

        // fetch("http://localhost:8080/api/job/create", {
        //     method: "POST",
        //     // mode: 'no-cors',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
        const url = "http://localhost:8080/api/job/create";
        const config = {
            headers: {
                'content-Type': 'application/json'
            }
        };
        axios.post(url, data, config).then((response) => {
            console.log(response.data);
        });
    }

    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        // console.log(name, newValue)
        setFormData(d => ({ ...d, [name]: newValue }));
    };


    return (
        <ThemeProvider theme={theme}>
            <Header title="New job posting" />
            <Box p={8}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} justify="center"
                        alignItems="center" justifyContent="center">
                        <Grid item xs={6}>
                            <TextField
                                name="jobRole"
                                value={formData.jobRole}
                                onChange={handleInput}
                                id="outlined-multiline-flexible"
                                variant='outlined'
                                multiline
                                label='Job role'
                                fullWidth
                            />
                        </Grid>
                        <Box m={4}>
                            <Button variant="contained" color="primary" disableElevation>Comment</Button>
                        </Box>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInput}
                                id="outlined-multiline-flexible"
                                variant='outlined'
                                multiline
                                label='Company Name*'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={frLocale}>
                                <DatePicker mask='__/__/____'
                                    label="Last date of applying"
                                    value={formData.lastDate}
                                    onChange={(newValue) => {
                                        setFormData(d => ({ ...d, lastDate: newValue }));
                                    }}
                                    renderInput={(params) => <TextField fullWidth variant='outlined' {...params} />}
                                />
                            </LocalizationProvider>
                            {/* <TextField id="outlined-multiline-flexible" variant='outlined' multiline label='Last date of applying' fullWidth /> */}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="companyDescription"
                                value={formData.companyDescription}
                                onChange={handleInput}
                                id="outlined-multiline-static"
                                rows={4}
                                variant='outlined'
                                multiline
                                label='Company description'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="roles"
                                value={formData.roles}
                                onChange={handleInput}
                                id="outlined-multiline-static"
                                rows={4}
                                variant='outlined'
                                multiline
                                label='Roles and responsibility'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="jobDescription"
                                value={formData.jobDescription}
                                onChange={handleInput}
                                id="outlined-multiline-static"
                                rows={4}
                                variant='outlined'
                                multiline
                                label='Job description'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="qualification"
                                value={formData.qualification}
                                onChange={handleInput}
                                id="outlined-multiline-static"
                                rows={4}
                                variant='outlined'
                                multiline
                                label='Qualification'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={frLocale}>
                                <DatePicker mask='__/__/____'
                                    label="Opening date"
                                    value={formData.openingDate}
                                    onChange={(newValue) => {
                                        setFormData(d => ({ ...d, openingDate: newValue }));
                                    }}
                                    renderInput={(params) => <TextField fullWidth variant='outlined' {...params} />}
                                />
                            </LocalizationProvider>
                            {/* <TextField id="outlined-multiline-flexible" variant='outlined' multiline label='Opening date' fullWidth /> */}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="location"
                                value={formData.location}
                                onChange={handleInput}
                                id="outlined-multiline-flexible"
                                variant='outlined'
                                multiline
                                label='Job location'
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleInput}
                                id="outlined-multiline-flexible"
                                variant='outlined'
                                multiline
                                label='Job type'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={4} style={{ display: "flex", gap: "1rem" }}>
                            <Box >
                                <Button variant="contained" color="primary" disableElevation>Timeline management</Button>
                            </Box>
                            <Box>
                                <Button type="submit" variant="contained" color="primary" disableElevation>Post</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </ThemeProvider>

    )
}