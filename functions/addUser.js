const { requestObj, responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connection');

exports.handler = async (event, context) => {
    let data = requestObj(event.body);

    try {
        let user = await clientQuery.query(
            q.Create(
                q.Collection('users'),
                {
                    data: {
                        id: data.id,
                        name: data.name
                        // power: data.power,
                        // description: data.description
                    }
                }
            )
        );

        return responseObj(200, user)
    } catch (error) {
        console.log(error)
        return responseObj(500, error);
    }

};
