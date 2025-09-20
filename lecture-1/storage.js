const addToStorage = () => {
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;

  // akta object e rakhi uporer data gulo k
  const data = { id, name };

  // local storage e set korte hoile
  // 1.key and value pathaite hobe value ta obossoi json.stringify kore nite hobe

  localStorage.setItem(id, JSON.stringify(data));
};

// 1.get korte hoile key diye get korte hobe ekhane 467 key

const storedItem = localStorage.getItem("467");
console.log(JSON.parse(storedItem));

//clear
const handleClear = () => {
  localStorage.clear();
};
