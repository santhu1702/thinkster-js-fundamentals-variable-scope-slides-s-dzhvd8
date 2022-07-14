const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Variable Scope</h1>`;

// Global Scope

var name = 'santhosh';
console.log(name);

function hi() {
  console.log(`hi ${name}`);
}
hi();
/// Function Scope

function info() {
  var cource = 'javascript fundamntels';
  console.log(cource);
}
info();
// console.log(cource); -- It will give error Courece scope is in fuction it is not accesble
