// // アロー関数
// function fnc01(str) {
//   return str;
// }

// const fnc02 = function (str) {
//   return str;
// };

// console.log(fnc02("bb"));

// const fnc03 = (str) => str;

// console.log(fnc03("vv"));

// const func04 = (a, b) => a + b;

// console.log(func04(23, 876));

// 分割代入

// const myProf = {
//   name: "名前",
//   age: 28
// };

// const message1 = `私の名前は${myProf.name}です。年齢は${myProf.age}歳です。`;
// console.log(message1);

// const { name, age } = myProf;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProf = ["名前", 28];
// const message3 = `私の名前は${myProf[0]}です。年齢は${myProf[1]}歳です。`;
// // console.log(message3);

// const [name, age] = myProf;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const attr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...attr3] = attr2;
// console.log(num1);
// console.log(num2);
// console.log(attr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
