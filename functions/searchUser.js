const { responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connection');

exports.handler = async (event, context) => {
    const {
        queryStringParameters: { name },
    } = event;

    try {
        let user = await clientQuery.query(
            q.Call(q.Function("GetUserByName"), [name])
        );
        return responseObj(200, user)
    } catch (error) {
        console.log(error)
        return responseObj(500, error);
    }
};