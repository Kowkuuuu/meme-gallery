<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="{{ asset('style.css') }}">
  <meta charset="UTF-8" />
  <title>Simple Meme Gallery</title>
  <style>
    #gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 20px;
    }
    #gallery img {
      width: 300px;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.5);
    }
  </style>
</head>
<body>
  <h1>Simple Meme Gallery</h1>
  
  <div id="gallery"></div>

  
  <div class="controls">
    <input type="file" id="imageUpload" multiple accept="image/*" />
    <button id="clearGallery">Clear Gallery</button>
  </div>
  

  
 <script src="{{ asset('script.js') }}"></script>
</body>
</html>
