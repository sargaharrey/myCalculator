

//-----------------------------Global variables------------------------------//
var butnVal = document.getElementsByTagName('button').value;

var screen = document.getElementById('screen');

// var num = document.getElementById("num").addEventListener("click", function () {
//   for (butnVal = 0; butnVal <= 9; butnVal++) {
//     if (x == butnVal) {
//       var x = document.getElementById('screen').innerHTML += x;
//     }
//   }
  
// });

  
//--------------------------To display Numbers----------------------------//
 function myFun(x){
  for (butnVal = 0;butnVal <= 9 ;butnVal++){
      if (x == butnVal){
        var x = document.getElementById('screen').innerHTML +=  x ;

          
      }
     
    }
    return x;
};

myFun();



//----------------------------To delete screen-----------------------------//
function myDel(){
    document.getElementById('screen').innerHTML = " ";
}


//---------------------------To display options-------------------------------//
function option(x) {

  switch (x){
    case 1:
      screen.innerHTML += '+'
      break;
      case 2:
      screen.innerHTML += '-';
      break;
      case 3:
      screen.innerHTML += '*';
      break;
      case 4:
      screen.innerHTML += '/'
      break;
      // case 5:
      // screen.innerHTML += 'sin('+ screen.innerHTML + ')'
      // break;
      // case 6:
      // screen.innerHTML += 'cos(' + screen.innerHTML + ')'
      // break;
      // case 7:
      // screen.innerHTML += 'Tan(' + screen.innerHTML + ')'

} 
}
// array = [1,2,3,4,5,6,7,8,9,0];
// for (var z = 0; z <= 9; z++) {
//   var i = document.getElementsByClassName('num')[z].getAttributeNode('attr').value
// }

//  array = [1,2,3,4,5,6,7,8,9,0]
// var wo = array.map(function(i){
//   arrayo = [i, i]


//   switch (i) {
//     case '0':
//       screen.innerHTML += arrayo.reduce((a, b) => a + b)
//       break;
//     case '1':
//       screen.innerHTML += arrayo.reduce((a, b) => a + b)
//       break;
//     case '2':
//       screen.innerHTML += arrayo.reduce((a, b) => a + b)
//       break;
//     case '3':
//       screen.innerHTML += arrayo.reduce((a, b) => a + b)
//       break;
//     case '4':
//       screen.innerHTML += arrayo.reduce((a, b) => a + b)
//       break;
//   }
// });
// function myRes(i){
// for (array[i] = 0;array[i] <= 9;array[i]++ ){
// arrayo = [i,i]
// switch (i) {
//   case 'array[0]':
//     screen.innerHTML += arrayo.reduce((a, b) => a + b)
//     break;
//   case 'array[1]':
//     screen.innerHTML += arrayo.reduce((a, b) => a + b)
//     break;
//   case '2':
//     screen.innerHTML += arrayo.reduce((a, b) => a + b)
//     break;
//   case '3':
//     screen.innerHTML += arrayo.reduce((a, b) => a + b)
//     break;
//   case '4':
//     screen.innerHTML += arrayo.reduce((a, b) => a + b)
//     break;
// }
// }
// }




//-------------------------------to display value on screen----------------//
function myRes(){
  screen.innerHTML =+ eval(screen.innerHTML)
}