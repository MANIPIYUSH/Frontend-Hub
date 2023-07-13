
// Scenario-1

// function Addition(a,b,c){
//     return a+b+c;
// }
//  const result = Addition(2,3,4);
//  console.log(result);


// Scenario-2

// function Addition(a){
//    return function Addition(b){
//        return function Addition(c){
//             return a+b+c;
//         }
//     }
// }

// let res = Addition(2);
// let data = res(4);
// let data1 = data(6)
// console.log(data1);


// Scenario-3 (Now using the concept of currying)

// function Addition(a){
//    return function Addition(b){
//        return function Addition(c){
//             return a+b+c;
//         }
//     }
// }

// let res = Addition(2)(4)(7);
// console.log(res);


// Scenario-3.5 (Now using the concept of currying)

userObj = {
    name:"piyush",
    age:27
}


function userInfo(obj){
     return function(userInfo){
        return obj[userInfo]
     }

}

let res = userInfo(userObj);
console.log(res("name"));