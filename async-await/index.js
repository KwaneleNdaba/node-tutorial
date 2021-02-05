function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name){
    await delayFn(2000);
    console.log("name", name)
}

delayedGreet("Kwanele")


async function division(num1, num2){
    try {
        if(num2 ==0 ){
            throw new Error("Cannot perform division by 0")
        }
        return num1 / num2
    } catch (error) {
        console.error("Error", error)
        return null;
    }
}

async function main() {
    console.log(await division(2,0));
    console.log(await division(5,2));

}

main();