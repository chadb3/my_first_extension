/*const time=3000;
let consolelog=()=>{
 console.log("Hello World");
}
// and this doesn't work as setTimeout is asynchronous... :(
let work = () => {
setTimeout(consolelog,time)
}

let start = () =>{
setInterval(work,1000);
}
start();*/

let rTime=5000;
let logThis=()=>{console.log("Hello World!");};
let increaseTime=()=>{rTime=rTime+5000;}
let timeThis=()=>{setInterval(logThis,rTime);}
let clearTime=()=>{clearTimeout(timeThis);}
let gogogo=()=>{timeThis();increaseTime();clearTime();};
gogogo();
