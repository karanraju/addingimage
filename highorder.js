let  a=[1,2,3,4,5,7,8 ]
let b=a[0];
let c=[];
let i
  for (let  i=0;i<a.length;i++)

 {
     if(a[i]!==b)
     {
      c.push(b)
      i--
    
     }
     b++
 }


 console.log(c);







// let a=[3,2,7,4,100,9,48,1]

// const abc=a.sort((a,b)=>a-b)
// console.log(abc);
// console.log("smallest  number is"+ ' ' + abc[0])
// console.log("largest   number is"+ ' ' + abc[a.length-1])


// let a=[1,1,2,4,5,6]

// function uniq(a) {
//     return a.sort().filter(function(item, pos, ary) {
//         return !pos || item != ary[pos - 1];
//     });
   
// }





// let uniqueArray = Array.from( new Set(originalArray))

// console.log(uniqueArray);

                     