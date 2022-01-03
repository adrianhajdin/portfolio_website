exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World +1'
    return {
        statusCode: 200,
        body: `Hello ${subject}!`,
    }
}