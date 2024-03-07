function saudacao() {
    var newGreeting = document.getElementById('mensDia');
    let hour = new Date().getHours()
    

    if (hour >= 6 && hour < 12){
        newGreeting.innerText = "Bom dia!";
    } else if (hour >= 12 && hour < 18){        newGreeting.innerText = "Boa Tarde!"
    } else {
                newGreeting.innerText = "Boa Noite!"
    }
}
saudacao()
