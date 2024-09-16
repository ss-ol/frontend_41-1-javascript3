// 1


function onlyNumber(str){
    return /^\d+$/.test(str)
}

console.log(onlyNumber("12345"))
console.log(onlyNumber("1234ff5"))
// 2
second = ()=>{
    console.log("прошла секунда ")
}
setInterval(second, 1000);
//3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}
count();
//4


// 5
const request = new XMLHttpRequest()
request.open("GET","tsconfig.json")
request.setRequestHeader("Content-type","application/json")
request.send()
request.onload=()=> {
    const info = JSON.parse(request.response)
    console.log(info)
}