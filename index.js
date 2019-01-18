const mongoose = require("mongoose");

const Blogposts = require("./models/blogposts");

const dbUrl =
  "mongodb://oceanmaster:lernwerkstatt.123@ds040637.mlab.com:40637/lernwerkstatt";
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
