//Sem utilizar o for
function manyVowels(str){
    const re = /[aeiou]+?/gi;
    if(!re.test(str)) return 0;
    return str.match(re).length;
}

console.log(manyVowels('NataliAAALIAIAIIA'));

//Correção utilizando o for
function correction(str){
    const re = /[aeiou]/i;
    let count = 0;
    for(let i of str){
        if(re.test(i)){
            count++;
        }
    }
    return count;
}

console.log(correction('NataliAAALIAIAIIA'));