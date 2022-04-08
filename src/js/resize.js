      // ********************** upload and resize an image ****************/
      // the displayed canvas can be limited by the parent div with max-width and not affect the canvas size
      
      const canvas2 = document.getElementById('canvas2')
      // you need the context in order to draw to the canvas
      const ctx2 = canvas2.getContext('2d')
      const aspectRatio = document.querySelector("#aspectRatio")
      const viewWidth = document.querySelector("#viewWidth")
      let maxwInput = document.querySelector("#maxwInput");
      maxwInput.value = 512
      maxWidth = maxwInput.value
      viewWidth.innerHTML = `${maxWidth}px`;
      const reader = new FileReader()
      const img = new Image()
      const uploadImage = (e) => {
        reader.onload = () => {
          img.onload = () => {
            // get aspect ratio
            ratio = img.width / img.height
            const wh = `${img.width}px x ${img.height}px`
            const originalWH = document.querySelector("#originalWH")
            originalWH.innerHTML = wh
            // display on screen
            aspectRatio.innerHTML = ratio
            // use the ratio to determine the new height based on maxWidth
            const height = maxWidth / ratio
            const resized = `${maxWidth}px x ${height.toFixed(1)}px`
            const resizedWH = document.querySelector("#resizedWH")
            resizedWH.innerHTML = resized
            // image will be placed to top left (0,0)
            canvas2.width = maxWidth
            canvas2.height = height
            ctx2.drawImage(img, 0,0, maxWidth, height)
          };
          img.src = reader.result
        }
        // read contents of image (first file)
        reader.readAsDataURL(e.target.files[0])
      };
      const imageLoader = document.getElementById('uploader')
      imageLoader.addEventListener('change', uploadImage)

      function changeWidth(width) {
        maxWidth = width
        viewWidth.innerHTML = `${maxWidth}px`;
      }