 const markedButton = document.querySelector(".marked-read")
markedButton.addEventListener("click", () => {
        let notNumber = document.querySelector(".notfication-number");
        let dotRemove = document.querySelectorAll(".dot");
        let boxRead = document.querySelectorAll(".message-box.blue");
        notNumber.innerHTML = 0;
        for (let i = 0; i < dotRemove.length; i++) {
            dotRemove[i].style.display = "none";
          }
          for (let i = 0; i < boxRead.length; i++) {
            boxRead[i].style.backgroundColor = "white";
          }
});









