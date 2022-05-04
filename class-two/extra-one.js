function makeReport(str){
    const obj = {
      'word': str,
      'wordReverse': str.split('').reverse().join(''),
      'manyVowels': (function (){
          const re = /[aeiou]+?/gi;
          if(!re.test(str)) return 0;
          return str.match(re).length;
        })(str),
    }
    return obj;
}

console.log(makeReport('Natalia'));