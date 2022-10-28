/* CAKARAN */

const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

/* case 1.4 (pertanyaan) */
// unik value
// const coba = fruits.map((el) => el.fruitName.toLowerCase());
// let coba2 = [...new Set(coba)];
// console.log(coba2);

/*  unique id */
// const newArr = fruits.map((el, idx) => ({ ...el, fruitId: idx + 1 }));
// console.log(newArr);

/*  masalah tidak unik id */
// const newArr2 = fruits.filter((el, idx) => el.fruitId !== 5);
// console.log(newArr2);

const fruitType = (arr) => {
  /* salah */
  // const data = {
  //   IMPORT: [],
  //   LOCAL: [],
  // };

  // fruits.map((fruit) =>
  //   fruit.fruitType === "IMPORT"
  //     ? data.import.push(fruit)
  //     : data.local.push(fruit)
  // );

  /* benar */
  const data = {};

  /* karena .push tidak bisa digunakan disini krn me return 1 */
  for (let fruit of arr) {
    data[fruit.fruitType] =
      data[fruit.fruitType]?.concat([{ ...fruit }]) ||
      [].concat([{ ...fruit }]);
  }

  /* case 1.1 & 1.2 */
  // bisa juga concat tanpa harus array dengan array
  // for (let fruit of arr) {
  //   data[fruit.fruitType] =
  //     data[fruit.fruitType]?.concat({ ...fruit }) || [].concat({ ...fruit });
  // }

  /* for of */
  // for (let fruitType of Object.keys(data)) {
  //   let type = data[fruitType].map((fruit, idx) => fruit.fruitName).join(", ");
  //   console.log(`Untuk wadah ${fruitType} terdapat: ${type}`);
  // }

  /* for in */
  // for (let fruitType in data) {
  //   let type = data[fruitType].map((fruit, idx) => fruit.fruitName).join(", ");
  //   console.log(`Untuk wadah ${fruitType} terdapat: ${type}`);
  // }

  /* forEach */
  // Object.keys(data).forEach((fruitType) => {
  //   const output = [];
  //   data[fruitType].forEach((fruit) => {
  //     output.push(fruit.fruitName);
  //   });
  //   console.log(`Untuk wadah ${fruitType} terdapat: ${output.join(", ")}`);
  // });

  // Object.entries()
  // Object.entries(data).map(([type, [...fruits]]) => {
  //   const list = fruits.map((fruit) => fruit.fruitName);
  //   console.log(`Untuk wadah ${type} terdapat: ${list.join(", ")}`);
  // });

  /* case 1.3 */
  // for (let fruitType in data) {
  // let stock = data[fruitType].reduce((acc, curr) => acc + curr.stock, 0);
  // console.log(`Wadah ${fruitType} terdapat ${stock} stok buah di dalamnya`);
  // console.log(stock);
  // }

  // console.log(data);
};
fruitType(fruits);

/*  catatan rest parameter */
// function log(...num) {
//   console.log(num); // [1, 2, 3]
// }
// log(1, 2, 3);

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

/* case 2 */
/* recursive */
// const countComment = (arr, output = []) => {
//   arr.forEach((obj) => {
//     output.push(obj.commentContent);
//     if (obj.hasOwnProperty("replies")) {
//       countComment(obj.replies, output);
//     }
//   });
//   return output;
//   // console.log(output);
// };

// countComment(comments);
// console.log(countComment(comments));

/* salah */
const countComment2 = (arr) => {
  const output = [];
  /*  outer func */
  arr.forEach((obj) => {
    output.push(obj.commentContent);
    if (obj.hasOwnProperty("replies")) {
      /* inner func 1 */
      obj.replies.forEach((obj) => {
        output.push(obj.commentContent);
        if (obj.hasOwnProperty("replies")) {
          /* inner func 2 */
          obj.replies.forEach((obj) => {
            output.push(obj.commentContent);
          });
        }
      });
    }
  });

  return output;
};

console.log(countComment2(comments));
