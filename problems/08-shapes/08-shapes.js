/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch(shape){
    case 'Square':
        for(let row = 0; row<height; row++){
          let line = ''
          for(let col = 0; col<height; col++){
            line+=character
          }
          console.log(line);          
        }
        break;
    case 'Triangle':
      for(let row = 0; row<height; row++){
        let line = ''
        for(let col = 0; col<row+1; col++){
          line+=character
        }
        console.log(line);         
      }
      break; 
    case 'Diamond':
      let midRow = Math.floor(height/2)
      for(let row = 0; row<midRow; row++){
        let space = midRow-row
        let line = ''
        for(let col = 0; col<space ; col++){
          line+=' '
        }
        for(let col = space; col<height-space; col++){
          line+='*'
        }
        for(let col = height-space; col<height; col++){
          line+=' '
        }
        console.log(line);
      }
      let space = 0
      for(let row = midRow; row<height; row++){
        let line = ''
        for(let col = 0; col<space ; col++){
          line+=' '
        }
        for(let col = space; col<height-space; col++){
          line+='*'
        }
        for(let col = height-space; col<height; col++){
          line+=' '
        }
        space+=1
        console.log(line);
      }
      break;
  }
}
// printShape("Triangle", 5, "*")
// printShape("Square", 5, "*")
// printShape("Diamond", 5, "*")