let stateList = document.getElementById('state-list');

stateList.onchange = function (){
    let selected = this.value
    document.getElementById("info-name").textContent = stateData[selected].name;
    document.getElementById("info-abbreviation").textContent = stateData[selected].abbr;
    var selected = this.value;
document.getElementById('info-pic').src = 'img/' + selected +'.jpg';
document.getElementById('info-name').textContent = stateData[selected].name;
}

