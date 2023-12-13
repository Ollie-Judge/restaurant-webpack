import _ from "lodash";
import "./style.css";

function component() {
  const element = document.createElement("div");

  let pageChoice = "default";

  let contactButton = document.getElementById("contactButton");
  let aboutButton = document.getElementById("aboutButton");

  contactButton.addEventListener("click", function () {
    pageChoice = "contact";
    console.log(pageChoice);
    check();
  });

  aboutButton.addEventListener("click", function () {
    pageChoice = "about";
    console.log(pageChoice);
    check();
  });

  if (pageChoice === "default") {
    let pTag = document.createElement("p");
    pTag.innerText =
      "This Restaurant is excellent, you should come and eat here some time";

    element.appendChild(pTag);
  }

  const check = () => {
    switch (pageChoice) {
      case "contact":
        const form = document.createElement("form");
        const nameInput = document.createElement("input");

        nameInput.placeholder = "First Name";

        form.appendChild(nameInput);
        element.remove(pTag);

        element.appendChild(form);
        break;
      case "about":
        const about = document.createElement("p");

        about.innerText =
          "welcome to our about page, this is where you will find stuff out about us";

        element.remove(pTag);

        element.appendChild(about);
        break;
    }
  };
  // if ((pageChoice = "default")) {
  //   const pTag = document.createElement("p");
  //   pTag.innerText =
  //     "This Restaurant is excellent, you should come and eat here some time";

  //   element.appendChild(pTag);
  // }

  // Add the image to our existing div.

  return element;
}

document.body.appendChild(component());
