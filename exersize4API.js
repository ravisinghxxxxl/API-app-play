console.log("start");
let definition = document.getElementById("definition");
definition.addEventListener("click", defpop);

function defpop() {
  let input = document.getElementById("input");
  let indata = input.value;
  localStorage.setItem("named1", JSON.stringify(indata));
  inputData = JSON.parse(localStorage.getItem("named1"));

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "words.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      let arr = JSON.parse(this.responseText);

      let list = document.getElementById("list");
      let str = "";
      var valObj = {};

      arr.forEach(function (element, index) {
        if (valObj[index] = element[inputData] == undefined) {
          list.innerHTML = str;
        } else {
        str += ` <li>
        ${valObj[index] = element[inputData]} </li>
        `;
        list.innerHTML = str;
        }
      });
    } else {
      console.log("Data not found");
    }
  };
  xhr.send();
}
