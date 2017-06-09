var arr = [1,2,3,[1,1,2],[3,2],2];

var result = arr.reduce(function(v, i) {
    if (Array.isArray(i)) {
        i.forEach(function(item) {
            if (v.indexOf(item) < 0) {
                v.push(item);
            }
        });
    } else {   
        if (v.indexOf(i) < 0) {
            v.push(i);
        }
    }
    return v;
}, []);

console.log(result); [1,2,3]
