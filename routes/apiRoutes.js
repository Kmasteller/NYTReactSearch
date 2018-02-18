const axios = require("axios");

module.exports = function(app) {
    
    app.get("/api/articles", function(req, res){
        const authKey = "6860d629a39a4fdc97aa801be0d51d26";

        // Search Parameters
        var queryTerm = "";
        var numResults = 0;
        var startYear = 0;
        var endYear = 0;

        // URL Base
        var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

        axios.get(queryURLBase).then(function(response) {
            console.log(response);
            res.send(response.data);
        })
        .catch(function(err){
            console.log(err)
        })        
    });
}
