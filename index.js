const axios = require("axios");

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?sort=cmc_rank&limit=100",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "d3bcf3f1-342e-490a-86e2-484d000fc31b",
        },
      }
    );
  } catch (ex) {
    response = null;
    // error console
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success console
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});
