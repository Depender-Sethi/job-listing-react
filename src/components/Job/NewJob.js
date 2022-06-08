import React from 'react';
import Header from '../Header';
import { Box, Grid, FilledInput, Seelct, MenuItem, ThemeProvider, TextField, Button } from "@material-ui/core";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import frLocale from 'date-fns/locale/fr'
import theme from "../../theme/theme";


export default props => {
    const [date, setDate] = React.useState(null);
    const [date2, setDate2] = React.useState(null);

    return (
        <ThemeProvider theme={theme}>
            <Header title="New job posting" />
            <Box p={8}>
                <Grid container spacing={2} justify="center"
                    alignItems="center" justifyContent="center">
                    <Grid item xs={6}>
                        <TextField id="outlined-multiline-flexible" variant='outlined' multiline label='Job role' fullWidth />
                    </Grid>
                    <Box m={4}>
                        <Button variant="contained" color="primary" disableElevation>Comment</Button>
                    </Box>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField id="outlined-multiline-flexible" variant='outlined' multiline label='Company Name*' fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={frLocale}>
                            <DatePicker mask='__/__/____'
                                label="Last date of applying"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => <TextField fullWidth variant='outlined' {...params} />}
                            />
                        </LocalizationProvider>
                        {/* <TextField id="outlined-multiline-flexible" variant='outlined' multiline label='Last date of applying' fullWidth /> */}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-multiline-static" rows={4} variant='outlined' multiline label='Company description' fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-multiline-static" rows={4} variant='outlined' multiline label='Roles and responsibility' fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-multiline-static" rows={4} variant='outlined' multiline label='Job description' fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-multiline-static" rows={4} variant='outlined' multiline label='Qualification' fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={frLocale}>
                            <DatePicker mask='__/__/____'
                                label="Opening date"
                                value={date2}
                                onChange={(newValue) => {
                                    setDate2(newValue);
                                }}
                                renderInput={(params) => <TextField fullWidth variant='outlined' {...params} />}
                            />
                        </LocalizationProvider>
                        {/* <TextField id="outlined-multiline-flexible" variant='outlined' multiline label='Opening date' fullWidth /> */}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-multiline-flexible" variant='outlined' multiline label='Job location' fullWidth />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField id="outlined-multiline-flexible" variant='outlined' multiline label='Job type' fullWidth />
                    </Grid>
                    <Grid item xs={4} style={{ display: "flex", gap: "1rem" }}>
                        <Box >
                            <Button variant="contained" color="primary" disableElevation>Timeline management</Button>
                        </Box>
                        <Box>
                            <Button variant="contained" color="primary" disableElevation>Post</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </ThemeProvider>

    )
}