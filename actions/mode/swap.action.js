const swapAction = () => {
  const html = document.querySelector("html");
  const button = document.querySelector("#knowMulti");

  if (button) {
    button.addEventListener("click", function () {
      html.classList.toggle("multiMode");
      console.log("O botão existe");
    });
  }
};

swapAction()
