/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    reverseStr = ''
    for (let x =someStr.length-1; x>=0; x--){
        reverseStr+=someStr.charAt(x)
    }
    if(reverseStr ==  someStr)
        return true
    else
        return false
}

//console.log(isPalindrome(''));
