const axios = require('axios');
const request = require('request');

const getAxiosData = async ()=> {
    // return new Promise(async (resolve, reject) => {
    //     const data = await axios.get('https://imdb-api.com/en/API/Title/k_2twlf89c/tt0411008');
    //     if (error) {
    //         reject(error);
    //     } else {
    //         resolve(data.data);
    //     }
    // })

    console.log((await axios.get('https://imdb-api.com/en/API/Title/k_2twlf89c/tt0411008')).data);
}
//
// async function run() {
//     console.log(await getAxiosData());
// }
//
// run();
console.log(getAxiosData());