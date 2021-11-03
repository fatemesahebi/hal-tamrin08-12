
//-----------------practise 3-------------------------
function correctArr(arr){
    if(toString.call(arr)!='[object Array]') return ('please insert an array')
    arr.map((item)=>{
        if (item===0) {
            arr.splice(arr.indexOf(item),1)
            arr.push(0)
        }
    })
    return arr
}


//---check function---------
let arr2=[1,2,0,0,0,0,3,0,4,0,5,0,6,0,7]
console.log(correctArr(arr2))

