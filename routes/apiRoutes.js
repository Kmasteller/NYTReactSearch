const axios = require("axios");
const articleController = require("../controllers/articleController");
const path = require("path");

module.exports = function(app) {
    
    app.get("/api/articles", function(req, res){
        const authKey = "6860d629a39a4fdc97aa801be0d51d26";

        console.log(req.query, "thisis our query")
        // Search Parameters
        var params = req.query;
        // URL Base
        var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

        axios.get(queryURLBase, {params}).then(function(response) {
            res.send(response.data);
        })
        .catch(function(err){
            console.log(err)
        })        
    });

    app.get("/api/saved", articleController.find);

    app.post("/api/saved", articleController.insert);

    app.delete("/api/saved/:id", articleController.delete);

    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });

    // app.use(app);
}
