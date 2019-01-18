const mongoose = require("mongoose");
const dbUrl = require("./secrets");
const Blogposts = require("./models/blogposts");

const connect = mongoose.connect(dbUrl);

connect.then(db => {
  console.log("Connected!");

  var newBlogpost = Blogposts({
    id: null,
    title: "",
    date: "",
    author: "",
    content: "",
    imagelink: ""
  });

  newBlogpost
    .save()
    .then(blogpost => {
      console.log(blogpost);

      return Blogposts.remove({ name: "Beta" });
    })
    .then(() => {
      return mongoose.connection.close();
    });
});
