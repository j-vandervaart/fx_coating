(function() {
  "use strict";
  console.log("SEAF Fired");

  window.addEventListener("load", function() {
    var urlCheck = window.location.href.slice(38);
    if (
      urlCheck == "agricultural" ||
      urlCheck == "commercial" ||
      urlCheck == "industrial"
    ) {
      for (var i = 0; i < mainLi.length; i++) {
        var aValue = "#" + mainLi[i].innerHTML.toLowerCase();
        var parent = mainLi[i].parentNode;
        var wrapper = document.createElement("a");

        parent.replaceChild(wrapper, mainLi[i]);
        wrapper.appendChild(mainLi[i]);
        mainLi[i].parentNode.href = "/fx_coating_site/dist" + aValue;
      }
    } else {
      for (var i = 0; i < mainLi.length; i++) {
        mainLi[i].addEventListener("click", scrollTo, false);
      }
    }
  });

  // Variables
  var hamburg = document.querySelector(".hamburg");
  var hamburgBlock = document.querySelectorAll(".hamburgBlock");
  var slidingMenu = document.querySelector(".slidingMenu");
  var mainLi = document.querySelectorAll(".mainLi");
  var test = document.querySelector("#test");

  // Functions
  function slideMenu() {
    slidingMenu.classList.toggle("slideOpen");
    hamburg.classList.toggle("hamChange");
    for (var i = 0; i < hamburgBlock.length; i++) {
      hamburgBlock[i].classList.toggle("hamBlockChange");
    }
  }

  function scrollTo(e) {
    var aValue = "#" + e.srcElement.innerHTML.toLowerCase();
    console.log(aValue);
    TweenLite.to(window, 1.5, {
      scrollTo: aValue,
      ease: Power2.easeOut
    });
    console.log("done");
  }

  // Event Listeners
  hamburg.addEventListener("click", slideMenu, false);
})();
