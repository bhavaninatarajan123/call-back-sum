let x=parseInt(prompt("enter the first number"));
let y=parseInt(prompt("enter the second number"));

let operation=(x,y,sum)=>{
    sum(x,y)
}

let sum=(a,b)=>{
    let c=a+b;
    document.write(`the sum of the two number are ${c}`)
}
operation(x,y,sum);
