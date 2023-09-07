function add(n1,n2) {

    // JSでの型確認
    if(typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("型が正しくありません")
    }
    return n1 + n2
}

const number1 = "5";
const number2 = 10;

let result = add(number1,number2);

console.log(result);