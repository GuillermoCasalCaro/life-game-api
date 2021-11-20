const { responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connection');

exports.handler = async (event, context) => {
    try {
        let users = await clientQuery.query(
            q.NewId()
        )
        return responseObj(200, users)
    } catch (error) {
        console.log(error)
        return responseObj(500, error);
    }
};