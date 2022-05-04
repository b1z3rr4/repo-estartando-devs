function isString(str){
    const re = /[^a-z]+/gi;
    if (re.test(str) || !str){
       return console.log('Oh carai ');
    } else {
      return str;
    }
}

console.log(isString('Natalia'))