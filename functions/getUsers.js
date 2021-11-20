const { responseObj } = require('./util/helper');
const { q, clientQuery } = require('./util/connection');

exports.handler = async (event, context) => {
  try {
    let users = await clientQuery.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('users'))),
        q.Lambda(x => q.Get(x))
      )
    )
    return responseObj(200, users)
  } catch (error) {
    console.log(error)
    return responseObj(500, error);
  }
};