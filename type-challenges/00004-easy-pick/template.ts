//ts联合类型
type MyPick<T, K extends keyof T> = {
  [p in K]: T[p];
};

// //js实现
// function myPick(todo, keys) {
//   const obj = {};

//   keys.forEach((key) => {
//     if (key in todo) {
//       obj[key] = todo[key];
//     }
//   });
//   return obj;
// }

// 1.返回一个对象
// 2.遍历foreach mapped
// 3.todo[key] 取值 indexed
// 4.看看key在不在todo里面
//     1.keyof lookup
