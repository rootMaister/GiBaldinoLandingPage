const datetimeAction = () => {
  const date = new Date().toLocaleTimeString(
    "default",
    { hour: "2-digit", minute: "2-digit" },
    1000
  );

  const phoneTime = document.querySelector(".phone-time");
  phoneTime.innerText = date;
  console.log(date);
};

datetimeAction()
