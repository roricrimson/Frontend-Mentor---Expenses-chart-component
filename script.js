const boxWrapper = document.querySelectorAll(".box-wrapper");
const box = document.querySelectorAll(".box");

fetch(`${window.location.origin + window.location.pathname}data.json`)
  .then((res) => res.json())
  .then((res) => {
    let max = 0;
    res.forEach((el) => {
      if (max < el.amount) {
        max = el.amount;
      }
    });
    res.forEach((el, index) => {
      if (el.amount === max) {
        box[index].style.backgroundColor = "hsl(186, 34%, 60%)";
      }
      let height = (el.amount / max) * 100;
      boxWrapper[index].style.height = height + "%";
    });
  });
