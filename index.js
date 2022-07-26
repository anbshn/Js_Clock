let myname = prompt("Isminiz nedir?");

function control() {
if (myname) {
    document.querySelector("#myName").innerHTML = myname;
} else { 
    alert("İsminizi girmediniz!")
    myname = prompt("Isminiz nedir?");
    control();
}};

control();

document.querySelector("#myClock").classList.add("clock");


const days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

function time() {
    let dte = new Date();
    let h = dte.getHours();
    h = (h<10) ? "0"+h : h;
    let m = dte.getMinutes();
    m = (m<10) ? "0"+m : m;
    let s = dte.getSeconds();
    s = (s<10) ? "0"+s : s;
    let d = days[dte.getDay()-1]

    let ice = document.querySelector("#myClock");
    ice.innerHTML = `${h}:${m}:${s} ${d}`;
    setTimeout(time,1000)
}
time();


