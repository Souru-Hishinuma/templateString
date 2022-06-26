// テンプレート文字列

const lastName = "山田";
const firstName = "太郎";
const hobby = "テニス";

// 従来の結合
const output = "私の名前は" + lastName + firstName + "です。" + "趣味は" + hobby + "です。";
console.log(output);

// テンプレート文字列を用いた結合
const output2 = `私の名前は${lastName}${firstName}です。趣味は${hobby}です。`;
console.log(output2);

