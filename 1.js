//--------------------------practise 1----------------------------
function guess(char){
    if(typeof char!= 'string') return ('please insert a string')
   let list=[97,101,105,111,117]
    let n=char.charCodeAt(0)
    let result=list.map(item=> Math.abs(n-item))
    let min=Math.min(...result)

    return String.fromCharCode(list[result.indexOf(min)])
}
//---check function---------
console.log(guess('d'))
console.log(guess('e'))
console.log(guess('f'))





