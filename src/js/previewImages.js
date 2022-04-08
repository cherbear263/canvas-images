      // ********************** upload and resize multiple images ****************/
      // files will already be in a list. Loop through the list 
      // the displayed canvas can be limited by the parent div with max-width and not affect the canvas size
      let fileInput = document.getElementById("file-input");
      let imageContainer = document.getElementById("images");
      let numOfFiles = document.getElementById("num-of-files");
      console.log('started')
      function preview() {
        imageContainer.innerHTML = "";
        numOfFiles.textContent =  `${fileInput.files.length} Files Selected`;
        for(i of fileInput.files) {
          let reader = new FileReader();
          let figure = document.createElement("figure");
          let figCap = document.createElement("figcaption");
          figCap.innerText = i.name;
          figure.appendChild(figCap);
          reader.onload=() => {
            let img = document.createElement("img");
            img.setAttribute("src", reader.result);
            figure.insertBefore(img, figCap);
          }
          imageContainer.appendChild(figure);
          reader.readAsDataURL(i)
        }

      }