import React, { useState } from 'react';
import Header from '../Header';
import FileUpload from '../FileUpload';
import theme from "../../theme/theme";
import { ThemeProvider, Box, Grid, Button, TextField, makeStyles } from '@material-ui/core';
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2'
import axios from 'axios';
// import FileUpload from 'react-material-file-upload';
import 'react-phone-input-2/lib/material.css'

export default props => {
    // const [phone, setPhone] = useState()
    // const [otp, setOtp] = useState()
    // const [otp2, setOtp2] = useState()
    // const [files, setFiles] = useState([])
    const [formData, setFormData] = useState({
        phone: null,
        otpPhone: '',
        email: '',
        otpEmail: '',
        fileUrl: '',
        pan: '',
        aadhar: '',
        address: '',
        gst: ''
    })

    const handleSubmit = e => {
        e.preventDefault()

        let data = {}

        data.panCard = formData.pan
        data.registrationCertficate = formData.fileUrl

        const url = 'http://localhost:8080/api/company/create'
        const config = {
            headers: {
                'content-type': 'application/json',
            }
        }
        axios.post(url, data, config).then((response) => {
            console.log(response.data);
        })
        console.log(formData);
    }

    const handleInput = e => {
        const name = e.target.name;
        const newValue = e.target.value;
        // console.log(name, newValue)
        setFormData(d => ({ ...d, [name]: newValue }));
    };

    const handlePhoneChange = (value, country, event) => {
        setFormData({
            ...formData,
            'phone': value,
        });
    };


    // const setUrl = url => {
    //     setFormData(d => ({ ...d, fileUrl: url }));
    // }

    return (

        <ThemeProvider theme={theme}>
            <Header title="Company verification" />
            <Box p={8}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <PhoneInput
                                placeholder="Enter phone number"
                                country="in"
                                value={formData.phone}
                                onChange={handlePhoneChange}
                            />
                            <Box mt={2}>
                                <Button variant="outlined">Get OTP</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-basic"
                                label="Enter PAN card no."
                                variant="outlined"
                                fullWidth
                                name="pan"
                                value={formData.pan}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Box style={{ display: "flex", gap: "1rem" }}>
                                <p>Enter OTP</p>
                                <OtpInput
                                    name="otpPhone"
                                    value={formData.otpPhone}
                                    onChange={setFormData}
                                    numInputs={4}
                                    separator={<span>-</span>}
                                />
                            </Box>
                            {/* <TextField id="outlined-basic" label="Enter OTP" variant="outlined" fullWidth /> */}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-basic"
                                label="Enter AADHAR card no."
                                variant="outlined"
                                fullWidth
                                name="aadhar"
                                value={formData.aadhar}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoComplete="email"
                                id="outlined-basic"
                                label="Company Email Address"
                                variant="outlined"
                                fullWidth
                                name="email"
                                value={formData.email}
                                onChange={handleInput}
                            />
                            <Box mt={2}>
                                <Button variant="outlined">Get OTP</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-basic"
                                label="GST no."
                                variant="outlined"
                                fullWidth
                                name="gst"
                                value={formData.gst}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Box style={{ display: "flex", gap: "1rem" }}>
                                <p>Enter OTP</p>
                                <OtpInput
                                    name="otpEmail"
                                    value={formData.otpEmail}
                                    onChange={handleInput}
                                    numInputs={6}
                                    separator={<span>-</span>}
                                />
                            </Box>
                            {/* <TextField id="outlined-basic" label="Enter OTP" variant="outlined" fullWidth /> */}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-multiline-static"
                                rows={4}
                                multiline
                                label="Company Address"
                                variant="outlined"
                                fullWidth
                                name="address"
                                value={formData.address}
                                onChange={handleInput}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            {/* <FileUpload value={files} onChange={setFiles} /> */}
                            {/* <input type="file" onChange={(e) => setFiles(e.target.files)} /> */}
                            <p>Company Registration Document</p>
                            <FileUpload
                                name="fileUrl"
                                value={formData.fileUrl}
                                setUrl = {setFormData}
                                onChange={handleInput}
                            />
                        </Grid>
                    </Grid>
                    <Box textAlign='center'>
                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: "4rem" }}>Submit</Button>
                    </Box>
                </form>
            </Box>
        </ThemeProvider>
    )
}