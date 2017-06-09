
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


var list = [
        {
            cfi: "epubcfi(/6/8[chapter3])",
            href: "chapter3.html",
            id: "chapter3",
            label: "第 2 章 边城二",
            spinePos: 3,
            notes: {
                text: "河中水皆豆绿色，天气又那么明朗，鼓声蓬蓬响着，翠翠抿着嘴一句话不说",
                url: "epubcfi(/6/8[chapter3])"
            }
        },
        {
            cfi: "epubcfi(/6/8[chapter3])",
            href: "chapter3.html",
            id: "chapter3",
            label: "第 2 章 边城二",
            spinePos: 3,
            notes: {
                text: "人既醉倒后，无从入城，祖父为了责任又不便与渡船离开，留在河边的翠翠便不能不着急了",
                url: "epubcfi(/6/8[chapter3])"
            }
        },
        {
            cfi: "epubcfi(/6/18[chapter8])",
            href: "chapter8.html",
            id: "chapter8",
            label: "第 7 章 边城七",
            spinePos: 8,
            notes: {
                text: "照例如俗话说的，“狗离不得屋”，这些狗一离了自己的家，即或傍着主人，也变得非常老实了。",
                url: "epubcfi(/6/18[chapter8])"
            }
        },
        {
            cfi: "epubcfi(/6/18[chapter14])",
            href: "chapter14.html",
            id: "chapter14",
            label: "第 13 章 边城一三",
            spinePos: 14,
            notes: {
                text: "“我要坐船下桃源县过洞庭湖，让爷爷满城打锣去叫我，点了灯笼火把去找我。”",
                url: "epubcfi(/6/18[chapter14])"
            }
        }
    ];

// 这是要求的结果
var list = [
    {
        title: "第 2 章 边城二",
        num: 2,
        noteList: [
            {
                url: 'epubcfi(/6/8[chapter3])',
                text: '河中水皆豆绿色，天气又那么明朗，鼓声蓬蓬响着，翠翠抿着嘴一句话不说'
            },
            {
                url: 'epubcfi(/6/8[chapter3])',
                text: "人既醉倒后，无从入城，祖父为了责任又不便与渡船离开，留在河边的翠翠便不能不着急了"
            }
        ]
    },
    {    
        title: "第 7 章 边城七",
        num: 1,
        noteList: [
            {
                url: "epubcfi(/6/18[chapter8])",
                text: "照例如俗话说的，“狗离不得屋”，这些狗一离了自己的家，即或傍着主人，也变得非常老实了。"                
            }
        ]
    },
    {
        title: "第 13 章 边城一三",
        num: 1,
        noteList: [
            {
                url: "epubcfi(/6/18[chapter14])",
                text: "“我要坐船下桃源县过洞庭湖，让爷爷满城打锣去叫我，点了灯笼火把去找我。”"
            }
        ]
    }
];


// 解法1
var dataFilter = function(data){
    var obj = {}, arr = [];
    console.time('test');
    for(var i = 0, len = data.length; i < len ; i++){ // 循环数组的长度

    var currentData = data[i], // 其中对象中的每一项
        currentKey = currentData.cfi, // 每个对象下面的cfi  以这个作为筛选重复的key
        hased = currentKey in obj;   // in用来判断key是否在{}中 true在  false不在
        obj[currentKey] = {
            title : currentData.label,
            num : hased ? ++obj[currentKey]['num'] : 1, // 在加1  不在取1
            noteList :  (hased ? obj[currentKey]['noteList'] : []).concat(currentData.notes) // 在取他下面的数组想，不在取空，然后拼接
        }   
    }

    // 对组成的对象改造成数组
    for(var key in obj){
        arr.push(obj[key]);
    }
    console.timeEnd('test');
    return arr;
}

// 解法2
var  newList = [];
list.forEach(function(data){
  for(var i=0;i<newList.length;i++){
    if(newList[i].title === data.label){
      newList[i].nodeList.push(data.notes);
      newList[i].num++;
      return;
    }
  }
    newList.push({
      title:data.label,
      num:1,
      nodeList:[data.notes]
    });
});
console.log(newList);


