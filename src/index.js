var data = [
  { title: "item 1", description: "100" },
  { title: "item 2", description: "200" },
  { title: "item 3", description: "300" },
];

var list = document.getElementsByClassName("mapping");
console.log(list);

for (var i = 0; i < data.length; i++) {
  var item = data[i];
  var title = list.getElementsByClassName("menu-title")[i];
  var description = list.getElementsByClassName("menu-description")[i];
  title.innerHTML = item.title;
  description.innerHTML = item.description;
}
