exports.handler = async (event, context) => {
    console.log('YEY!');

    const data = {name: 'yeye'};
    
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}