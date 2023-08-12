a=document.querySelector('p');
console.log(a);
console.log("Script Started");
let reload = () =>{
location.reload();
console.log("HIT!");
}

let getMilliseconds=(secondsIn)=>{
	if(typeof(secondsIn)==="number")
	{
	 return 1000*secondsIn;
	}else{console.log(`getMilliSeconds input value: ${secondsIn} is not a number`); return 0;}
};
let ttr=getMilliseconds(60); // 60 seconds to start but updateable...
console.log(ttr);

setInterval(reload,ttr);
console.log(location);
