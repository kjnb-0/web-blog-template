const { Post } = require("../models");

const postData = [
  {
    title: "Cool tech news here!",
    post_content: "There's been some great tech updates in the news...",
    user_id: 2,
  },
  {
    title: "Local tech company does something!",
    post_content:
      "Our favorite local tech company has some exciting updates...",
    user_id: 1,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
