const person: {
    // Object内の変数の型を指定できる
    name: string;
    age: number;
    hobbies: string[],
    role: [number,string];
} = {
    name: "tachi",
    age: 22,
    hobbies: ["sports", "shopping"],
    role: [2, "author"],
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

let favoriteActivities: string[];

// 数字を入れることはできない
favoriteActivities = ["sports"]

console.log(person)

for(const hobby of person.hobbies) {
    console.log(hobby);
    // 大文字表示
    console.log(hobby.toUpperCase());
}