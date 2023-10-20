let express = require('express');
let router = express.Router();
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


router.get('/', function(req, res, next) {
    if(req.query.username !== null && req.query.username !== ""  && req.query.username !== undefined){
    let result = [];

        axios.get("https://github.com/"+ req.query.username+"?tab=repositories")
        .then(function (response) {
            const dom = new JSDOM(response.data);
            let classes = dom.window.document.getElementsByClassName("wb-break-all");
            // prendre les a dedans
            for(let i= 0 ; i<classes.length; i++){
                result.push(classes.item(i).getElementsByTagName('a')[0].innerHTML);
            }

            console.log(result);
            let tab = [];
            for (let j = 0 ; j<result.length; j++){
                console.log(result[j]);
                tab += result[j] + ";";
            }

            res.send(tab);

        });

    }else{
        res.send(" rappuier sur le button ");
    }

});

module.exports = router;