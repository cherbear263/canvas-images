function uploadMultiple(files) {
  let numOfFiles = document.getElementById("num-of-files");
  numOfFiles.textContent =  `${files.length} Files Selected`;
  const images = [];
  const imagePreviews = document.getElementById("imagePreviews")
  let i = 0;
  // get file list
  for (let file of files) {
    // turn file into a dataURI
    let reader = new FileReader();

    let img = new Image();
    reader.onload = () => {
      console.log('reader loaded')
      img.onload = () => {
        let resizedWidth = img.width <= 512 ? img.width : 512;
        console.log('image width: ', img.width, 'new width: ', resizedWidth)
        resizedHeight = resizedWidth/(img.width/img.height)
        console.log('image height: ', img.height, 'new height: ', resizedHeight) 
        let canvas = document.createElement("canvas");
        ctx = canvas.getContext("2d");
        // create a resized canvas and draw the image
        canvas.width=resizedWidth;
        canvas.height = resizedHeight;
        document.body.appendChild(canvas);
        ctx.drawImage(img, 0,0, resizedWidth, resizedHeight )
        // convert image on the canvas to png
        // images.push(canvas.toDataURL("img/png"));
        // // remove the canvas element
        // document.body.removeChild(canvas);
        // console.log(images)
        // console.log('finished.')
        // add an image tag to #imagePreviews 
        let newImage = new Image()
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = file.name;
        figure.appendChild(figCap);
        newImage = document.createElement("img")
        newImage.classList.add("max-w-full")
        newImage.setAttribute("src", canvas.toDataURL("img/png"));
        figure.insertBefore(newImage, figCap);
        // remove canvas element
        document.body.removeChild(canvas)
        imagePreviews.appendChild(figure)

  
      }
      img.src = reader.result;

    }
      URL = reader.readAsDataURL(file)
      console.log(images)
  }
  // load images from array in an image tag

};
