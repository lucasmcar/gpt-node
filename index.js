const {Configuration, OpenAIApi} = require('openai');

require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,   
});

const open = new OpenAIApi(configuration);

async function runCompletion (){

    const completion = await open.createCompletion({
        model: "text-davinci-003",
        prompt: "Como você está?",
    });
    console.log(completion.data.choices[0].text);
}

runCompletion();