let subjectEl = document.getElementById('subject')
let messageEl = document.getElementById('message')
let emailEl = document.getElementById('email')

function submitForm() {
    let subject = subjectEl.value
    let message = messageEl.value
    let email = emailEl.value

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let response = xhttp.response;
            if(response.success) {
                showSuccessPopup(3);
            } else {
                showErrorPopup(3);
            }
        }
    }
    xhttp.open("POST", "http://localhost:8081/email", true)
    xhttp.setRequestHeader("content-type", "application/json")
    let data = {};
    data.email = email;
    data.text = message;
    data.subject = subject;
    let json = JSON.stringify(data);
    xhttp.send(json)
}

function showSuccessPopup(timeout) {

}

function showErrorPopup(timeout) {
    
}