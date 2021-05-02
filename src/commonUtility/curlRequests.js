const https = require('https');

/*https method for https request */
exports.postCurl = (headersForCurlRequest,data) => {
    try {
        return new Promise ((resolve,rejects)=>{
             const options = headersForCurlRequest;
             const req = https.request(options, res => {
                res.on('data', d => {
                    console.log(d);
                    resolve(JSON.parse(d));
                })
              })
              req.on('error', error => {
                resolve(JSON.parse(error));
              })
              req.write(data)
              req.end()
        })
    } catch (error) {
        return error;
    }
}


/* get auth for the post request*/
exports.getAuthHeadersForPostCurl = (type,data) =>{
    try {
        switch (type) {
            case 'basic Auth':
                let base64String = Buffer.from(`${data.userName}:${data.password}`).toString('base64')
                let auth = `Basic ${base64String}`
                return {"status":"0","auth":auth};
            default:
                return {"status":"1","error":"Invalid auth Type"};
        }
    } catch (error) {
        return {"status":"1","error":"something went Wrong"+error};
    }
}