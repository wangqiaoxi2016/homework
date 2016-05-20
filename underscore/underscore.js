var arr = [
            obj={
                    name:'test1',
                    age:20,
                    mobile:11000000,
                    email:'test1@126.com',
                    gender:'男',
                },
                {
                    name:'test2',
                    age:29,
                    mobile:11000000,
                    email:'test2@126.com',
                    gender:'男',
                },
                {
                    name:'test3',
                    age:35,
                    mobile:11000000,
                    email:'test3@126.com',
                    gender:'女',
                },
                {
                    name:'test4',
                    age:50,
                    mobile:11000000,
                    email:'test4@126.com',
                    gender:'男',
                },
                {
                    name:'test5',
                    age:45,
                    mobile:11000000,
                    email:'test5@126.com',
                    gender:'女',
                },
            ];  


var arr2 = [1,2,3,4,5]  
// var r = _.each(arr,function(obj) {
//     console.log(obj)
// })

// var r = _.each(obj,function(item,index) {
    // console.log(index)属性名
// })

// var r = _.each(obj,function(item) {
//     console.log(item)值
// })

// var r = _.each(obj,function(val,index) {
//     console.log(arguments[0])值
// })

// var r = _.each(arr,function(val,index) {
//     console.log(index)索引
// })

// var sum = _.reduce([1, 2, 3], function(memo, num){ 
//     return memo + num; 
// }, 0);
// console.log(sum)

// var even = _.find(arr,function(item,index) {
  
//     return item.name=='test3';
// })
// console.log(even);


for (var i=0;i<arr[i].length;i++) {
    if(arr[i].name=='test3') {
        return arr[i];
    }
}
console.log(arr[i]);
