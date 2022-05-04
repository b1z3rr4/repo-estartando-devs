//Atividade 2 - Calcular se deve declarar imposto

    //leitura dos dados
    const namePeople = "Natalia",
        salary = 2900.00;

    //calculando aumento 
    const readjustment = (salary * (18/100));

    //verificando se deve declarar imposto ou nao
    const payTax = (readjustment + salary) > 3000;

    //estrutura de decisão da declaração do imposto
    if(payTax){
        //se o salario apos o reajuste for maior que 3000
        console.log("O/A funcionário(a) " + namePeople + " receberá um novo salario de R$ " + (readjustment + salary) + " e deve declarar imposto.");
    } else {
        //se o salario apos o reajuste permanecer menor que 2000
        console.log("O/A funcionário(a) " + namePeople + " receberá um novo salario de R$ " + (readjustment + salary) + " e não precisa declarar imposto.");
    }
