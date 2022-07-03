const button1 = document.getElementById("button1");

function showAlert(){
    window.alert("ボタンをクリックしました");
}

button1.onclick = showAlert;