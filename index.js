const mongoose = require("mongoose");
const dbUrl = require("./secrets");
const Blogposts = require("./models/blogposts");

const connect = mongoose.connect(dbUrl);

connect.then(db => {
  console.log("Connected!");

  Blogposts.create({
    id: 999,
    title: "test",
    date: "01.01.01",
    author: "unknown",
    content: "unimportant",
    imagelink: "no"
  })  
    .then(blogpost => {
      console.log(blogpost);

      return Blogposts.remove({ name: "Beta" });
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch(err => {
      console.log(err);
    });
});
