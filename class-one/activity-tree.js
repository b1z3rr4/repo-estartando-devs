//Atividade 3 - Calcular média do aluno

    //leitura dos dados
    const namePeople = "Natalia",
        grade1 = 10,
        grade2 = 7,
        grade3 = 3;

    //Somando as notas e calculando a media
    const average = (grade1+grade2+grade3)/3;

    //Verificando se a media foi alcançada ou nao
    const isPassedOn = average >= 8;

    //Estrutura de decisão para saber se aluno esta aprovado ou reprovado
    if(isPassedOn){
        //se o aluno tiver media maior ou igual a 8
        console.log("O/A aluno(a) " + namePeople + " teve média igual a " + average + " e foi Aprovado(a).");
    } else {
        //se sua media for menor que 8
        console.log("O/A aluno(a) " + namePeople + " teve média igual a " + average + " e foi Reprovado(a).");
    }