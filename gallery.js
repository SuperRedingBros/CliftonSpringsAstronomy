//load()
function load(){
  const para = document.createElement("p");
  const node = document.createTextNode("This is new.");
  para.appendChild(node);
  const upgrades = document.getElementById("Gallery")
  upgrades.appendChild(para)

}
