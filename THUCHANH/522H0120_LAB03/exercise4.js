function handleDOMContentLoaded() {
    let imageList = document.getElementById("imageList");
    let img = document.querySelector("img");
    let backButton = document.querySelector("button[value='Back']");
    let nextButton = document.querySelector("button[value='Next']");
    let imageCount = document.querySelector("p");
    let startSlideshowButton = document.getElementById("startSlideshow");
  
    let options = Array.from(imageList.options);
    let currentIndex = 0;
    let slideshowInterval;
  
    //  "Back"
    backButton.addEventListener("click", handleBackButtonClick);
  
    //  "Next"
    nextButton.addEventListener("click", handleNextButtonClick);
  
    //  "Start Slideshow"
    startSlideshowButton.addEventListener(
      "click",
      handleStartSlideshowButtonClick
    );
  
    showImage(currentIndex);
    function showImage(index) {
      if (index < 0) {
        index = options.length - 1;
      } else if (index >= options.length) {
        index = 0;
      }
  
      let selectedOption = options[index];
      let selectedValue = selectedOption.value;
  
      img.src = "images/" + selectedValue;
      imageCount.textContent =
        selectedValue + " (" + (index + 1) + "/" + options.length + ")";
      currentIndex = index;
    }
    function handleBackButtonClick() {
      if (!slideshowInterval) {
        currentIndex--;
        showImage(currentIndex);
        updateButtonStates();
      }
    }
    function handleNextButtonClick() {
      if (!slideshowInterval) {
        currentIndex++;
        showImage(currentIndex);
        updateButtonStates();
      }
    }
    function handleStartSlideshowButtonClick() {
      if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        startSlideshowButton.textContent = "Start Slideshow";
        updateButtonStates();
      } else {
        slideshowInterval = setInterval(function () {
          currentIndex++;
          showImage(currentIndex);
          updateButtonStates();
        }, 1000);
        startSlideshowButton.textContent = "Stop Slideshow";
        updateButtonStates();
      }
    }
  
    function updateButtonStates() {
      backButton.disabled = !!slideshowInterval;
      nextButton.disabled = !!slideshowInterval;
    }
  }
  
  document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
  