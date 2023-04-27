const cstform = document.querySelector(".cstform");
const cstinpt = document.querySelector(".cstinpt");
const surname = document.querySelector(".surname");
const Pasword = document.querySelector(".Pasword");
const rep = document.querySelector(".rep");

cstform.addEventListener("submit", function (e) {



  let arr = [];
  if (JSON.parse(localStorage.getItem("dataBase")) !== null) {
    arr = JSON.parse(localStorage.getItem("dataBase"));
  }



  let obj = {
    name: "",
    surname: "",
    Pasword: "",
    rep: "",
  };
  obj.name = cstinpt.value;
  obj.surname = surname.value;
  obj.Pasword = Pasword.value;
  obj.rep = rep.value;

  console.log(cstinpt.value);
  console.log(surname.value);
  console.log(Pasword.value);
  console.log(rep.value);
  e.preventDefault();
  arr.push(obj);
  localStorage.setItem("dataBase", JSON.stringify(arr));
  console.log(obj);
  console.log("arr",arr);
});
///////////////////////////////////////
cstform.addEventListener("keydown", function () {
  rep.value = Pasword.value;
});
cstform.addEventListener("click", function () {
    console.log(JSON.parse(localStorage.getItem("dataBase")));
  });


