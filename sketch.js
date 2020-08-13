function cookieIt(){
    var input = document.querySelector("input");
    document.cookie = "input=" + input.value.toString() + ";";
    document.cookie.anchor("name");
    // alert("Submitted")
    input.value = "";
}

function showCookie(){
    // alert(document.cookie.toString());
    var cok = document.querySelector("#cookie");
    // cok.textContent = document.cookie;
    cok.classList.add("active");
    setTimeout(hideCookie(), 5);
}

function hideCookie(){
    var cok = document.querySelector("#cookie");
    cok.classList.remove("active");
}