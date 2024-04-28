let btn = document.getElementById("btn");
let input = document.getElementById("input");
let boxs = document.querySelectorAll(".box");
let drag = null;

btn.onclick = function () {
  if (input.value !== "") {
    boxs[0].innerHTML += `
      <p class="item" draggable="true">${input.value}</p>
    `;
    input.value = "";
  }
  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });

    boxs.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "#666";
        this.style.color = "#fff";
      });

      box.addEventListener("dragleave", function () {
        this.style.backgroundColor = "#fff";
        this.style.color = "#000";
      });

      box.addEventListener("drop", function () {
        this.append(drag);
        this.style.backgroundColor = "#fff";
        this.style.color = "#000";
      });
    });
  });
}
