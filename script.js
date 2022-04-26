const section = document.getElementById("section");
const imageBtn = document.getElementById("image-ref");
const tableBtn = document.getElementById("table-ref");
console.log(imageBtn);
console.log(section);

let tableHTML = `
<table class="table">
<tr class="table_header">
    <td class="col-0">Id</td>
  <td class="col-1">Company</th>
  <td class="col-2">Contact</th>
  <td class="col-3">Country</th>
</tr>
<tr class="table_row">
    <td class="col-0">01</td>
  <td class="col-1">Alfreds Futterkiste</td>
  <td class="col-2">Maria Anders</td>
  <td class="col-3">Germany</td>
</tr>
<tr class="table_row">
    <td class="col-0">02</td>
  <td class="col-1">Centro comercial Moctezuma</td>
  <td class="col-2">Francisco Chang</td>
  <td class="col-3">Mexico</td>
</tr>
<tr class="table_row">
    <td class="col-0">03</td>
  <td class="col-1">Ernst Handel</td>
  <td class="col-2">Roland Mendel</td>
  <td class="col-3">Austria</td>
</tr>
<tr class="table_row">
    <td class="col-0">04</td>
  <td class="col-1">Island Trading</td>
  <td class="col-2">Helen Bennett</td>
  <td class="col-3">UK</td>
</tr>
<tr class="table_row">
    <td class="col-0">05</td>
  <td class="col-1">Laughing Bacchus Winecellars</td>
  <td class="col-2">Yoshi Tannamuri</td>
  <td class="col-3">Canada</td>
</tr>
<tr class="table_row">
    <td class="col-0">06</td>
  <td class="col-1">Magazzini Alimentari Riuniti</td>
  <td class="col-2">Giovanni Rovelli</td>
  <td class="col-3">Italy</td>
</tr>
</table>`;
imageBtn.addEventListener("click", (e) => {
  e.preventDefault();
  section.innerHTML = `<embed src="./images/electrical.svg" class="svg-image"/>`;
});

tableBtn.addEventListener("click", (e) => {
  e.preventDefault();
  section.innerHTML = tableHTML;
});

var navbar = document.getElementById("navbar");
var btns = navbar.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
