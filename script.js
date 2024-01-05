var elementNameArray = [];
var elementTypeArray = [];
var requiredArray = [];

document.addEventListener("DOMContentLoaded", function () {
  var addButton = document.querySelector(".btn");
  addButton.addEventListener("click", storeValues);

  function storeValues() {
    var Name = document.getElementById("fname").value;
    var Type = document.getElementById("elements").value;
    var Checkbox = document.getElementById("yesNoCheckbox").checked;

    elementNameArray.push(Name);
    elementTypeArray.push(Type);
    requiredArray.push(Checkbox);
    var existingContainer = document.querySelector(".container");

    var newContainer = existingContainer.cloneNode(true);

    document.body.appendChild(newContainer);

    document.getElementById("fname").value = "";
    document.getElementById("elements").value = "select";
    document.getElementById("yesNoCheckbox").checked = false;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var generateButton = document.querySelector(".generate-btn");
  generateButton.addEventListener("click", generateForm);

  function generateForm() {
    var formContent = "";

    var formHead = document.createElement("div");
    formHead.innerHTML = "FORM";
    formHead.style.marginTop = "30px";
    formHead.style.marginLeft = "500px";
    formHead.style.marginBottom = "30px";
    document.body.appendChild(formHead);

    for (var i = 0; i < elementNameArray.length; i++) {
      var star = requiredArray[i] ? '<span style="color: red;">*</span>' : "";
      formContent += `<div style=" padding: 10px;margin-left:100px;margin-right:400px;background-color:#e6ffff">${elementNameArray[i]} ${star}: <input type="${elementTypeArray[i]}" placeholder="${elementTypeArray[i]}" style="color: lightgrey;"></div>`;
    }

    var FormDiv = document.createElement("div");
    FormDiv.innerHTML = formContent;
    FormDiv.style.marginTop = "10px";
    FormDiv.style.marginBottom = "10px";
    document.body.appendChild(FormDiv);

    elementNameArray = [];
    elementTypeArray = [];
    requiredArray = [];
  }
});
