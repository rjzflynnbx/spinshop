'use strict';

//aws lambda update-function-code --function-name spinbetDataExtension --zip-file fileb://lambdaFunc.zip

const https = require('https')
const querystring = require('querystring');
const axios = require('axios')

const janeLedgerRef = "66d85908-3b1d-45b4-9829-624a25fd94a5";
const secretKey = "cf5462ee-d72d-4583-a185-76ce20063323";
const dataExtensionName = "smartScores"

exports.handler = async function (event, context, callback) {

    console.log('Loading BX Data Extension service...');

    var keyIn = event.queryStringParameters.value;
    var CLV = 50; //event.queryStringParameters.rgScore;

    if (keyIn === secretKey) {

        var auth = "Basic cHFzR0FNRUo5anNSbEpNUVBUcm5wazBjR3hENGFiNzA6RXU5bGVpTjUzQWh1MXN4c3ZMSzcyQ0RpUjhJRVRWVlM="
        var url = 'https://api.boxever.com:443/v2/guests/' + jimFlynnRef + '/ext' + dataExtensionName;

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        };
        var postData = {
            "key": "scores",
            "rgRiskScore": rgScore
        }
        await axios.post(url, postData, axiosConfig)
            .then((res) => {
                console.log("THEN: ", res);
            })
            .catch((err) => {
                console.log("CATCH: ", err);
            })


        let response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify(postData)
        };
        console.log("response: " + JSON.stringify(response))
        return response;

    } else {
        console.log("wrong secretKey");
    }



};

