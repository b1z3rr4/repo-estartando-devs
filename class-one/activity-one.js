   //Atividade 1 - Verificar se é maior de idade

   //leitura dos dados
   const namePeople = "Natalia", 
        years = 21;
    
    //fazendo verificação
    const isGreater  = years >= 18;

    //escrevendo dados na tela
    console.log("O/A " + namePeople + ", tem " + years +" anos.");

    //fazendo estrutura condicional da maioridade
    if(isGreater){
        //se a idade for maior ou igual a 18
        console.log("E é maior de idade.");
    } else {
        //se a idade for menor que 18
        console.log("E não é maior de idade.");
    }
