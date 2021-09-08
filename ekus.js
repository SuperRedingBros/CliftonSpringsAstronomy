let number = 0;
load()
function load(){
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  para.appendChild(node);
  const upgrades = document.getElementById("upgradesection")
  upgrades.appendChild(para)

}
function clicktest(){
  number = number + 1;
  document.getElementById("hi").innerHTML =  String(number);
}
