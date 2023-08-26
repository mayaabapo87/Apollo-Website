<template>
    <div class="container">
      <div class="column">
        <div class="item">
          <img src="path_to_image1.jpg" alt="Image 1" />
          <p>Text for Image 1</p>
        </div>
        <div class="item">
          <img src="path_to_image2.jpg" alt="Image 2" />
          <p>Text for Image 2</p>
        </div>
      </div>
      <div class="column">
        <div class="item">
          <img src="path_to_image3.jpg" alt="Image 3" />
          <p>Text for Image 3</p>
        </div>
        <div class="item">
          <img src="path_to_image4.jpg" alt="Image 4" />
          <p>Text for Image 4</p>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .container {
    display: flex;
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  </style>
  