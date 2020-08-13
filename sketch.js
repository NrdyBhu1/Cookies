function cookieIt(){
    var input = document.querySelector("input");
    document.cookie = "input:" + input.value.toString();
    alert("Submitted")
    input.value = "";
}

function showCookie(){
    alert(document.cookie.toString());
}