import React, { useState } from 'react';
// import { uploadFile } from 'react-s3';
// import S3 from 'react-aws-s3';
import AWS from 'aws-sdk';
import { Button } from '@material-ui/core';
import axios from 'axios';

window.Buffer = window.Buffer || require("buffer").Buffer;

export default props => {
    AWS.config.update({ region: process.env.REACT_APP_REGION, credentials: new AWS.Credentials(process.env.REACT_APP_ACCESS_KEY, process.env.REACT_APP_SECRET_ACCESS_KEY) });
    var s3 = new AWS.S3({ apiVersion: "2006-03-01", params: { Bucket: process.env.REACT_APP_S3_BUCKET } });


    const config = {
        bucketName: process.env.REACT_APP_S3_BUCKET,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS_KEY,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    }

    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    async function handleSubmit(event) {
        event.preventDefault()
        event.stopPropagation()
        console.log(file.name);
        let upload_params = { Bucket: process.env.REACT_APP_S3_BUCKET, Key: file.name, Body: file };
        let upload = new AWS.S3.ManagedUpload({ params: upload_params });
        let promise = upload.promise();
        promise.then(
            function (data) { props.setUrl(d => ({ ...d, "fileUrl": data.Location })) ; },
            function (err) { console.log("Failed to upload", file.name, "with error:", err.message); }
        );
        // event.preventDefault()
        // const url = 'http://localhost:8081/upload';
        // const formData = new FormData();
        // formData.append('resume', file);
        // formData.append('fileName', file.name);
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data',
        //     },
        // };
        // axios.post(url, formData, config).then((response) => {
        //     console.log(response.data);
        // });
    }

    //     uploadFile(file, config)
    //         .then(data => console.log(data))
    //         .catch(err => console.error(err))

    //     // props.setUrl(d => ({ ...d, "fileUrl": data.location })) ;


    // const uploadFile = async (file) => {
    //     const ReactS3Client = new S3(config);
    //     // the name of the file uploaded is used to upload it to S3
    //     ReactS3Client
    //         .uploadFile(file, file.name)
    //         .then(data => console.log(data.location))
    //         .catch(err => console.error(err))
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} />
                <button type='submit'>Upload</button>
                {/* <Button
                    variant="contained"
                    component="label"
                >
                    Upload File
                    <input
                        type="file"
                        onChange={handleChange}
                        hidden
                    />
                </Button> */}
            </form>
        </div>
    );
}