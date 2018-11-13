import axios from "axios";

export default {
  // Gets all wines
  getCurrentWines: function () {
    return axios.get("/api/get/currentWines");
  },
  seedDB: function() {
    console.log("Seed function hit in API");
    return axios.get("/api/get/seed");
  },
  getAllWines: function() {
    return axios.get("/api/get/allWines");
  },
  submitRating: function (ratingObj) {
    return axios.post("/api/post/rating", ratingObj);
  },

  addNewWine: function (newWine) {
    if (newWine.id) {
      // Existing wine, update it
      return axios.put("/api/put/wine/" + newWine.id, newWine);
    }
    else {
      // New wine, insert it
      return axios.post("/api/post/addNewWine", newWine);
    }
  },
  getColors: function () {
    return axios.get("/api/get/colors");

  }
}
