function header() {
  const headerDiv = document.createElement("div");

  const headerContainer = document.createElement("div");
  headerContainer.id = "headerContainer";

  const h1 = document.createElement("h1");
  h1.innerText = "Restaurant Page";

  headerContainer.appendChild(h1);

  const buttonDiv = document.createElement("div");
  buttonDiv.id = "buttonDiv";

  const contactbutton = document.createElement("button");
  const aboutbutton = document.createElement("button");

  contactbutton.innerHTML = "Contact";
  aboutbutton.innerHTML = "About";

  headerDiv.appendChild(headerContainer);
  buttonDiv.appendChild(contactbutton);
  buttonDiv.appendChild(aboutbutton);
  headerDiv.appendChild(buttonDiv);

  return headerDiv;
}

document.body.appendChild(header());
