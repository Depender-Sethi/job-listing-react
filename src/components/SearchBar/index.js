import React from "react";
import { Box, Select, MenuItem, Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    wrapper: {
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    },
    searchFields: {
        backgroundColor: "#fff",
        display: "flex",
        borderRadius: "5px",
        "& > *": {
            flex: 1,
            height: "45px",
            margin: "8px",
        },
    },
    textField: {
        flex: 2
    }
})

export default props => {
    const classes = useStyles();
    return (
        <Box mt={-5} mb={2} className={classes.wrapper}>
            <Box p={2} className={classes.searchFields}>
                <TextField className={classes.textField} id="outlined-basic" label="Search job title" variant="outlined" />

                <Button variant="contained" color="primary" disableElevation>
                    Search
                </Button>
            </Box>
            <Box p={2} className={classes.searchFields}>
                <Select disableUnderline variant="filled" defaultValue="Full Time">
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                </Select>
                <Select disableUnderline variant="filled" defaultValue="Remote">
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="In-Office">In-Office</MenuItem>
                </Select>
                <Select disableUnderline variant="filled" defaultValue="Beginner">
                    <MenuItem value="Beginner">Beginner</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Expert">Expert</MenuItem>
                </Select>

            </Box>
        </Box>
    )
}