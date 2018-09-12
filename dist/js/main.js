(function() {
  "use strict";
  // console.log("SEAF Fired");

  // Variables
  var hamburg = document.querySelector(".hamburg");
  var hamburgBlock = document.querySelectorAll(".hamburgBlock");
  var slidingMenu = document.querySelector(".slidingMenu");
  var mainLi = document.querySelectorAll(".mainLi");
  var test = document.querySelector("#test");
  var right = document.querySelector("#galleryRight");
  var left = document.querySelector("#galleryLeft");
  var galleryPos = 0;
  var galleryInfo = [
    [
      "project1",
      "Test 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ],
    [
      "project2",
      "Test 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ],
    [
      "project3",
      "Test 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ]
  ];
  var galleryImg = document.querySelector("#galleryImg");
  var gallDesc = document.querySelector("#gallDesc");
  var request = new XMLHttpRequest();
  var form = document.querySelector("#quoteForm");
  var alert = document.querySelector(".alert");

  window.addEventListener("load", function() {
    var urlCheck = window.location.href;
    var replace = urlCheck.replace("www.", "");
    var urlParam = replace.slice(20);
    if (
      urlParam == "agricultural" ||
      urlParam == "commercial" ||
      urlParam == "industrial"
    ) {
      for (var i = 0; i < mainLi.length; i++) {
        var aValue = "#" + mainLi[i].innerHTML.toLowerCase();
        var parent = mainLi[i].parentNode;
        var wrapper = document.createElement("a");
        // console.log(aValue);
        parent.replaceChild(wrapper, mainLi[i]);
        wrapper.appendChild(mainLi[i]);
        mainLi[i].parentNode.href = "http://www.fxcoating.ca/" + aValue;
      }
    } else {
      for (var i = 0; i < mainLi.length; i++) {
        mainLi[i].addEventListener("click", scrollTo, false);
      }
    }
  });
  //Ajax Functions
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  } else if (request === null) {
    alert("Please update to a modern browser");
    return;
  }

  function regForm(e) {
    e.preventDefault();
    alert.innerHTML = "";

    var thisform = e.currentTarget;
    var formdata =
      "name=" +
      thisform.elements.name.value +
      "&phone=" +
      thisform.elements.phone.value +
      "&email=" +
      thisform.elements.email.value +
      "&size=" +
      thisform.elements.size.value +
      "&location=" +
      thisform.elements.location.value +
      "&overview=" +
      thisform.elements.overview.value;
    // console.log(formdata);

    var url = "./send.php";
    request.onreadystatechange = formSubmitted;
    request.open("POST", url, true);
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    request.send(formdata);
  }

  function formSubmitted() {
    if (request.readyState === 4 || request.readyState === "complete") {
      if (
        request.responseText == "Please use a valid email" ||
        request.responseText == "Please fill in all fields" ||
        request.responseText == "Your email was not sent"
      ) {
        alert.innerHTML = request.responseText;
        alert.style.backgroundColor = "#bc214b";
        alert.style.color = "white";
        alert.style.height = "auto";
        alert.style.padding = "10px";
        // console.log(request.responseText);
        alert.style.opacity = "1";
      } else if (request.responseText == "Your email has been sent") {
        alert.innerHTML = request.responseText;
        alert.style.backgroundColor = "white";
        alert.style.color = "#0f3748";
        alert.style.height = "auto";
        alert.style.padding = "10px";
      }
    }
  }

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
    // console.log(aValue);
    TweenLite.to(window, 1.5, {
      scrollTo: aValue,
      ease: Power2.easeOut
    });
    slidingMenu.classList.remove("slideOpen");
    hamburg.classList.remove("hamChange");
    for (var i = 0; i < hamburgBlock.length; i++) {
      hamburgBlock[i].classList.remove("hamBlockChange");
    }
  }

  function moveForward() {
    if (galleryPos >= galleryInfo.length - 1) {
      galleryPos = -1;
    }
    galleryPos++;
    TweenLite.to([galleryImg, gallDesc], 0.4, {
      opacity: 0,
      onComplete: fadeImg
    });
  }

  function fadeImg() {
    galleryImg.style.backgroundImage =
      "url('./images/" + galleryInfo[galleryPos][0] + ".jpg')";
    gallDesc.innerHTML = galleryInfo[galleryPos][1];
    TweenLite.to([galleryImg, gallDesc], 0.4, {
      opacity: 1
    });
  }

  function moveBack() {
    if (galleryPos <= 0) {
      galleryPos = galleryInfo.length;
    }
    galleryPos--;
    // console.log(galleryPos);
    TweenLite.to([galleryImg, gallDesc], 0.4, {
      opacity: 0,
      onComplete: fadeImg
    });
  }

  // Event Listeners
  hamburg.addEventListener("click", slideMenu, false);
  if (right) {
    right.addEventListener("click", moveForward, false);
    left.addEventListener("click", moveBack, false);
    form.addEventListener("submit", regForm, false);
    form.addEventListener(
      "keyup",
      function() {
        alert.style.height = "0";
        alert.style.padding = "0";
        alert.innerHTML = "";
        alert.style.backgroundColor = "#0f3748";
      },
      false
    );
  }
})();
