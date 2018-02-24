import axios from "axios";

const API = {
  // Search the webpage
    search: function(topic, startYear, endYear) {
        const authKey = "6860d629a39a4fdc97aa801be0d51d26";
        const queryURL = "/api/articles"
        return axios.get(queryURL, {
            params: {api_key: authKey, q: topic, start_year: startYear, end_year: endYear
            }
        });
    },
 
    find: function() {
        return axios.get("/api/saved");
    },

    insert: function(articleObj) {
        return axios.post("/api/saved", articleObj);
    },

    delete: function(id) {
        return axios.delete(`/api/saved/${id}`);
    }
};

export default API;