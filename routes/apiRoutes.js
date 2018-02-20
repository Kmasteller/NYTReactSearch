const axios = require("axios");
const articlesController = require("../controllers/articleController");
const path = require("path");

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
            res.send(response.data);
        })
        .catch(function(err){
            console.log(err)
        })        
    });

    app.get("/api/saved", articlesController.find);

    app.post("/api/saved", articlesController.insert);

    app.delete("/api/saved/:id", articlesController.delete);

    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });

    app.use(app);
}
