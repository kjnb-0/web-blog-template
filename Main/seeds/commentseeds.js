const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    comment_text: "Great news!",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Cool!",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Wow!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;