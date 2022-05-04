function stringReverse(str){
    let aux_str = '';
    for (var i = str.length - 1; i >= 0; i--){
      aux_str += str[i];
    }
    return aux_str;
  }

console.log(stringReverse('Natalia'));