// var obj = {
//         name:'abc',
//         sayName:function() {
            // console.log(this.name);指向 “abc”
            // console.log(this);指向 obj
//         }
//     }
//     obj.sayName();
//     
// function test() {
//     console.log(this);
// }
// test()
// 指向window对象的方法

// var test2 = function() {
//     // console.log(arguments);指向window对象的方法
//     console.log(arguments)[]
// }
// test2();

// arguments  存储函数执行时的参数的列表；

var test2 = function() {
    return arguments[0] + arguments[1];
}

var r = test2(7,8)
console.log(7,8);