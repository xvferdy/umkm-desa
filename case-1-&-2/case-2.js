const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

/* CASE 2.5 */
const countComment = (arr, output = []) => {
  for (const obj of arr) {
    output.push(obj.commentContent);
    if (obj.hasOwnProperty("replies")) {
      output = countComment(obj.replies, output);
    }
  }

  return output;
};

console.log(`Total komentar ada ${countComment(comments).length}`);
