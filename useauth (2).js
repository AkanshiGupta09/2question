const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGOURI = "mongodb://https://cloud.mongodb.com/v2/652a574ca7f6be2778b6bb5a#/clusters/detail/Cluster0";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};