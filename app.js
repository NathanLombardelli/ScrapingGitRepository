const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

axios.get("https://github.com/NathanLombardelli?tab=repositories")
    .then(function (response) {
      const dom = new JSDOM(response.data);
      let num = 0;
      [...dom.window.document.querySelectorAll('.wb-break-all a')].forEach(el => {console.log(`- ${el.textContent}`);num++});
      console.log('num repo : ' + num);
    });

