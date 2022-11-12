type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const; //不允许用户在进行修改

// keyof array -> 索引
type r = TupleToObject<typeof tuple>;

// js
// function tupleToObject(array) {
//   const obj = {};
//   array.forEach((val) => {
//     obj[val] = val;
//   });

//   return obj;
// }

// 1.返回一个对象
// 2.遍历array T[number]
