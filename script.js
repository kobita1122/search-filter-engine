const users = ["Alice", "Bob", "Charlie", "David", "Eve"];
const list = document.getElementById("list");

function render(data) {
  list.innerHTML = "";
  data.forEach(u => {
    const li = document.createElement("li");
    li.innerText = u;
    list.appendChild(li);
  });
}

function search() {
  const q = document.getElementById("search").value.toLowerCase();
  render(users.filter(u => u.toLowerCase().includes(q)));
}

render(users);
