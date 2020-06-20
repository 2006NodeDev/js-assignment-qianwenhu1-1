/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    //Starts with 1st
    if (n===1)
        return 0;
    if (n===2)
        return 1;
    return fib(n-1)+fib(n-2);
}
//0,1,1,2,3,5,8
//console.log(fib(2));
