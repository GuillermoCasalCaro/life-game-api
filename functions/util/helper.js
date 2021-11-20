const responseObj = (statusCode, data) => {
    return {
        statusCode: statusCode,
        headers: {
            /* Required for CORS support to work */
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        },
        body: JSON.stringify(data)
    };
};

const requestObj = (data) => {
    return JSON.parse(data);
}

module.exports = { responseObj: responseObj, requestObj: requestObj }
