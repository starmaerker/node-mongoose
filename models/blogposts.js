const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogpostSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true,
      unique: true
    },
    date: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    imagelink: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

var Blogposts = mongoose.model("Blogpost", blogpostSchema);

module.exports = Blogposts;
