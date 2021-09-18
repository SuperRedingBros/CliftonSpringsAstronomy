let number = 0;
let vupgrades = new Map();
let list = ["Scope"];
load();
function load(){
  list.forEach(myFunction);
  function myFunction(value, index, array) {
    if (localStorage.getItem(value) != null ) {
      vupgrades.set(value,Number(localStorage.getItem(value)));
      vupgrades.set(value+"count",Number(vupgrades.get(value+"count")));
    } else {
      vupgrades.set(value,1)
      vupgrades.set(value+"count",0)
    }
  }
}

  //const para = document.createElement("p");
  //const node = document.createTextNode("This is new.");
  //para.appendChild(node);
  //upgrades.appendChild(para)
function upgrades(target,value,price,pricemultiplier){
  if (number>=(price+Number(vupgrades.get(target+"count")*pricemultiplier))) {
    number = number - (price+Number(vupgrades.get(target+"count")*pricemultiplier));
    vupgrades.set(target, Number(vupgrades.get(target) + value));
    vupgrades.set(target+"count", Number(vupgrades.get(target+"count") + 1));
    document.getElementById(target).innerHTML = target + ": " + String(vupgrades.get(target+"count"));
    localStorage.setItem(target,Number(vupgrades.get(target)));
    localStorage.setItem(target+"count",Number(vupgrades.get(target+"count") + 1));
  }
  document.getElementById("hi").innerHTML = String(number);
}

function clicktest(){
  number = number + Number(vupgrades.get("Scope"));
  document.getElementById("hi").innerHTML =  String(number);
  localStorage.setItem("number",number);
}
