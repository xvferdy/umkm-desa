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

/* CASE 1.1 */
const fruitName = (arr) => {
  const nameList = arr.map((fruit) => fruit.fruitName);
  console.log(`Andi memiliki buah: ${nameList.join(", ")}`);
};
fruitName(fruits);

/* CASE 1.2 */
const fruitType = (arr) => {
  const data = {};

  for (let fruit of arr) {
    data[fruit.fruitType] =
      data[fruit.fruitType]?.concat([{ ...fruit }]) ||
      [].concat([{ ...fruit }]);
  }

  console.log(`Terdapat ${Object.keys(data).length} wadah`);

  for (let fruitType of Object.keys(data)) {
    let type = data[fruitType].map((fruit, idx) => fruit.fruitName).join(", ");
    console.log(`Untuk wadah ${fruitType} terdapat: ${type}`);
  }
};
fruitType(fruits);

/* CASE 1.3 */
const fruitType2 = (arr) => {
  const data = {};

  for (let fruit of arr) {
    data[fruit.fruitType] =
      data[fruit.fruitType]?.concat([{ ...fruit }]) ||
      [].concat([{ ...fruit }]);
  }

  for (let fruitType of Object.keys(data)) {
    let stock = data[fruitType].reduce((acc, curr) => acc + curr.stock, 0);
    console.log(`Wadah ${fruitType} terdapat ${stock} stok buah di dalamnya`);
  }
};
fruitType2(fruits);

/* CASE 1.4 */
