const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 200,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    replies: {
      type: Array,
      default: [
        // {
        //   userId: String,
        //   comment: String,
        // },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
