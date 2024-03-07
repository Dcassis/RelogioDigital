function definirSaudacao() {
    let saudacaoElemento = document.getElementById("newMesage");
    let hoje = new Date();
    let diaSemana = hoje.getDay(); 

    let newMesage;

    switch (diaSemana) {
        case 0:
            newMesage = "Que o seu domingo seja repleto de paz e tranquilidade!";
            break;
        case 1:
            newMesage = "Bom Comece sua semana com positividade e determinação!!";
            break;
        case 2:
            newMesage = "Encontre a paz interior em cada terça-feira!";
            break;
        case 3:
            newMesage = "Deixe a quarta-feira ser o dia da sua superação!";
            break;
        case 4:
            newMesage = "Cultive gratidão e alegria em cada quinta-feira!";
            break;
        case 5:
            newMesage = "Mantenha o foco e a serenidade nesta sexta-feira!";
            break;
        case 6:
            newMesage = "proveite o sábado para renovar suas energias e ser feliz!";
            break;
        default:
            newMesage = "Tenha um ótimo dia!";
    }

   
    saudacaoElemento.textContent = newMesage;
}
definirSaudacao();