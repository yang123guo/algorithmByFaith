
/*
 之前是对象组成的数组，对象里可能有相同字段，
 结果是要提出相同的字段，剩余项组成数组赋值给一个新的key

 from : 
 var appListResData = [
    {app_category : 'A' , app_name : '我是1'},
    {app_category : 'B' , app_name : '我是2'},
    {app_category : 'A' , app_name : '我是3'},
    {app_category : 'C' , app_name : '我是4'},
    {app_category : 'A' , app_name : '我是5'},
    {app_category : 'B' , app_name : '我是6'},
    {app_category : 'A' , app_name : '我是7'},
    {app_category : 'C' , app_name : '我是8'}
];


 to :  
 [
    {
        app_category : 'A',
        app_num : 4,
        app_name : ['我是1','我是3','我是5','我是7']
    },
    {
        app_category : 'B',
        app_num : 2,
        app_name : ['我是2','我是6']
    },
    {
        app_category : 'C',
        app_num : 2,
        app_name : ['我是4','我是8']
    }
 ]

 并统计重复出现的次数

*/
var appListResData = [
    {app_category : 'A' , app_name : '我是1'},
    {app_category : 'B' , app_name : '我是2'},
    {app_category : 'A' , app_name : '我是3'},
    {app_category : 'C' , app_name : '我是4'},
    {app_category : 'A' , app_name : '我是5'},
    {app_category : 'B' , app_name : '我是6'},
    {app_category : 'A' , app_name : '我是7'},
    {app_category : 'C' , app_name : '我是8'}
];

var appListNewData = [];


appListResData.forEach(function(data){
    for(var i = 0; i < appListNewData.length; i++ ){
        if(appListNewData[i].app_category === data.app_category){
            appListNewData[i].app_name.push(data.app_name);
            appListNewData[i].app_num++;
            return;
        }
    }
    appListNewData.push({
        app_category : data.app_category,
        app_num : 1,
        app_name : [data.app_name]
    });
});

console.log(appListNewData)

// 引用的原理就是：对于对象相同的key是重写覆盖的，数组是不断push的


var dataFilter = function(data){
    var obj = {}, arr = [];
    // console.time('test');
    for(var i = 0, len = data.length; i < len ; i++){
    var currentData = data[i],
        currentKey = currentData.cfi,
        hased = currentKey in obj;   
        obj[currentKey] = {
            title : currentData.label,
            num : hased ? ++obj[currentKey]['num'] : 1,
            noteList :  (hased ? obj[currentKey]['noteList'] : []).concat(currentData.notes)
        }   
    }
    for(var key in obj){
        arr.push(obj[key]);
    }
    // console.timeEnd('test');
    return arr;
}