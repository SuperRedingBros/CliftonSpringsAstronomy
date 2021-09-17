let number = 0;
let vupgrades = new Map();
load();
function load(){
  try {
    vupgrades = localStorage.getitem("upgrades");
    number = localStorage.getitem("number");
  } catch (e) {
    vupgrades.set("Scope",1);
    vupgrades.set("Scopecount",0);
  }
}
  //const para = document.createElement("p");
  //const node = document.createTextNode("This is new.");
  //para.appendChild(node);
  //upgrades.appendChild(para)



function upgrades(target,value,price,pricemultiplier){
  if (number>=(price+(vupgrades.get(target+"count")*pricemultiplier))) {
    number = number - (price+(vupgrades.get(target+"count")*pricemultiplier));
    vupgrades.set(target, (vupgrades.get(target) + value));
    vupgrades.set(target+"count", (vupgrades.get(target+"count") + 1));
    document.getElementById(target).innerHTML = target + ": " + String(vupgrades.get(target+"count"));
    localStorage.setitem("upgrades",vupgrades)
  }
  document.getElementById("hi").innerHTML = String(number);
}

function clicktest(){
  number = number + vupgrades.get("Scope");
  document.getElementById("hi").innerHTML =  String(number);
  localStorage.setitem("number",number)
}
