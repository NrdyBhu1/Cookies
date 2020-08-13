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
    cok.classList.add("active");
    cok.textContent = document.cookie;
    setTimeout(hideCookie, 2500);
}

function hideCookie(){
    document.querySelector("#cookie").classList.remove("active");
}