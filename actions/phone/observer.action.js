const observerAction = () => {
  section = document.querySelector(".redes");
  sectionBounds = document.querySelector(".redes").getBoundingClientRect();

  const sectionHeight = sectionBounds.height;

  console.log(sectionHeight);

  var observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        // console.log('Element has just become visible in screen');
        phone.classList.add("fix-phone");
        section.style = `height: ${sectionHeight.toString()} !important`;
        console.log(sectionHeight);
      }
    },
    { threshold: [1] }
  );

  observer.observe(document.querySelector("#phone"));
};

observerAction()