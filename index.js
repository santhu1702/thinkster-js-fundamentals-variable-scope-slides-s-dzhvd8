const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Variable Scope</h1>`;

// Global Scope

var name = 'santhosh';
console.log(name);

function hi() {
  console.log(`hi ${name}`);
}
hi();
