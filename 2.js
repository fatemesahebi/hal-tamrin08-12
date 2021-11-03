
//--------------------practise 2----------------------------------
function sort(arr,prm){
    if( typeof prm!='string'|| toString.call(arr)!='[object Array]') return ('please insert correct inputs')
    let result=arr.reduce(function (preVal,curVal){
        if (!preVal[curVal[prm]]) preVal[curVal[prm]]=[curVal]
        else  preVal[curVal[prm]].push(curVal)
        return preVal
    },{})
    return result
}

//---check function---------
let arr=[{age:20,name:'ali'},{age:20,name:'mohammad'},{age:22,name:'alireza'},{age:22,name:'maryam'}]
console.log(sort(arr,'age'))


//-------------------way 2-----------------------
function sort2(arr,prm){
    if( typeof prm!='string'|| toString.call(arr)!='[object Array]') return ('please insert correct inputs')
    let result={}
    for (let key of arr){
        if(result[key[prm]]) result[key[prm]].push(key)
        else result[key[prm]]=[key]
    }
    return result
}

//---check function---------
console.log(sort2(arr,'age'))


