function createDivs() {
    const container = document.getElementById("");
    for (var i = 1; i <= 75; i++) {
      const div = document.createElement("div");
      div.className = "myDiv";
      div.textContent = i;
      container.appendChild(div);
    }
  }

