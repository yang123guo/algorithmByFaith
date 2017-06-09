var arr = [];
var i = 0;
var obj = {key:'1',key:'2',key:'3'};
for(var key in obj){
    arr.push(obj[key]);
    console.log(i++)
};
console.log(arr)

// 0 
// ['3']

var arr = [];
var i = 0;
var obj = {key1:'1',key2:'2',key3:'3'};
for(var key in obj){
    arr.push(obj[key]);
    console.log(i++)
};
console.log(arr)

// 0 1 2 
// ['1','2','3']

// 以上可见key重复的话会覆盖，且认为是一个