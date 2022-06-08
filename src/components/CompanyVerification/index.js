import React, { useState } from 'react';
import Header from '../Header';
import FileUpload from '../FileUpload';
import theme from "../../theme/theme";
import { ThemeProvider, Box, Grid, Button, TextField, makeStyles } from '@material-ui/core';
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2'
// import FileUpload from 'react-material-file-upload';
import 'react-phone-input-2/lib/material.css'

export default props => {
    const [phone, setPhone] = useState()
    const [otp, setOtp] = useState()
    const [otp2, setOtp2] = useState()
    const [files, setFiles] = useState([])

    return (

        <ThemeProvider theme={theme}>
            <Header title="Company verification" />
            <Box p={8}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <PhoneInput
                            placeholder="Enter phone number"
                            country="in"
                            value={phone}
                            onChange={setPhone} />
                        <Box mt={2}>
                            <Button variant="outlined">Get OTP</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Enter PAN card no." variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Box style={{ display: "flex", gap: "1rem" }}>
                            <p>Enter OTP</p>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                separator={<span>-</span>}
                            />
                        </Box>
                        {/* <TextField id="outlined-basic" label="Enter OTP" variant="outlined" fullWidth /> */}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Enter AADHAR card no." variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField autoComplete="email" id="outlined-basic" label="Company Email Address" variant="outlined" fullWidth />
                        <Box mt={2}>
                            <Button variant="outlined">Get OTP</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-basic" label="GST no." variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Box style={{ display: "flex", gap: "1rem" }}>
                            <p>Enter OTP</p>
                            <OtpInput
                                value={otp2}
                                onChange={setOtp2}
                                numInputs={6}
                                separator={<span>-</span>}
                            />
                        </Box>
                        {/* <TextField id="outlined-basic" label="Enter OTP" variant="outlined" fullWidth /> */}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="outlined-multiline-static" rows={4} multiline label="Company Address" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        {/* <FileUpload value={files} onChange={setFiles} /> */}
                        {/* <input type="file" onChange={(e) => setFiles(e.target.files)} /> */}
                        <p>Company Registration Document</p>
                        <FileUpload />
                    </Grid>
                </Grid>
                <Box textAlign='center'>
                    <Button variant="contained" color="primary" style={{ marginTop: "4rem" }}>Verify</Button>
                </Box>
            </Box>
        </ThemeProvider>
    )
}