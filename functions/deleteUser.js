const { requestObj, responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connection');

exports.handler = async (event, context) => {
    let data = requestObj(event.body);

    console.log(data);

    try {
        let user = await clientQuery.query(
            q.Delete(
                q.Ref(q.Collection('users'), data.name)
            )
        );
        return responseObj(200, user);
    } catch (error) {
        console.log("error");
        console.log(error);
        console.log(data);
        return responseObj(500, error);
    }

};
