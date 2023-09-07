var person = {
    name: "tachi",
    age: 22,
    hobbies: ["sports", "shopping"],
};
var favoriteActivities;
// 数字を入れることはできない
favoriteActivities = ["sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    // 大文字表示
    console.log(hobby.toUpperCase());
}
