/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(typeof(someStr) === 'string' && typeof(startIndex) === 'number' && Number.isInteger(endIndex))
        if (startIndex <= someStr.length && endIndex <= someStr.length && startIndex >= 0 && startIndex <= endIndex)
            return someStr.substring(startIndex, endIndex)
    throw new Error("input was incorrect")
}

//console.log(substring('hello', 0, '3'));
