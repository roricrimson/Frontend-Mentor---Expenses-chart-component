const boxWrapper = document.querySelectorAll(".box-wrapper");
const box = document.querySelectorAll(".box");
const money = document.querySelectorAll(".money");

fetch(
  // "http://127.0.0.1:5500/data.json"
  `${
    window.location.origin + window.location.pathname.replace(/index.html/g, "")
  }data.json`
)
  .then((res) => res.json())
  .then((res) => {
    let max = 0;
    res.forEach((el) => {
      if (max < el.amount) {
        max = el.amount;
      }
    });
    res.forEach((el, index) => {
      var maxBox;
      if (el.amount === max) {
        maxBox = box[index];
        box[index].style.backgroundColor = "hsl(186, 34%, 60%)";
      }
      let height = (el.amount / max) * 100;
      boxWrapper[index].style.height = height + "%";
      box[index].onmouseover = () => {
        money[index].innerHTML = "$" + el.amount;
        money[index].style.display = "block";
        maxBox.style.backgroundColor = "hsl(187, 47%, 78%)";
      };
      boxWrapper[index].style.height = height + "%";
      box[index].onmouseleave = () => {
        money[index].style.display = "none";
        maxBox.style.backgroundColor = "hsl(186, 34%, 60%)";
      };
    });
  });
