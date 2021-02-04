const { error } = require("console");

function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve, time))

}
    console.log("Promise leacture starts");
    delayFn(2000).then(()=> console.log("after 2 seconds promise resolved"));
    console.log("Promise leacture end");


    function divideFun(num1 , num2){
        return new Promise((resolve, reject) => {
            if(num2 === 0){
                reject("Cannot perform division by 0")
            }else{
                resolve(num1/num2)
            }
        })
    }

    divideFun(10,0).then(result => console.log("result",result)).catch(error => console.error("Error ", error))