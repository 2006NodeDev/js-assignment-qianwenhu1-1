/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let newStr ='';
  for(let index = someStr.length-1; index>=0; index--){
      newStr+=someStr.charAt(index);
  }
  return newStr;
}

//console.log(reverseStr("sda"));
