/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

//assume someNum can only be positive integer
function isEven(someNum) {
    num = someNum.toString()
    odd = ['1','3','5','7','9']
    even = ['0','2','4','6','8']
    lastdigit = num
    if (num.length > 1)
        lastdigit = num.substring(num.length-1, num.length)
    if (even.includes(lastdigit))
        return true
    if (odd.includes(lastdigit))
        return false
}

//console.log(isEven(-2));
