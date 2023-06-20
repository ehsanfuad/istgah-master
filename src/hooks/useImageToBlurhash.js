// import React, { useState, useEffect } from "react";
// import { decode } from "blurhash";

// const useImageToBlurhash = (imageUrl) => {
//   const [blurhash, setBlurhash] = useState("");

//   useEffect(() => {
//     const loadImage = async () => {
//       try {
//         const img = new Image();
//         img.crossOrigin = "Anonymous";

//         // Load the image from the provided URL
//         img.src = imageUrl;

//         // Convert the loaded image to BlurHash
//         img.onload = () => {
//           const canvas = document.createElement("canvas");
//           const context = canvas.getContext("2d");
//           const width = img.width;
//           const height = img.height;
//           canvas.width = width;
//           canvas.height = height;
//           context.drawImage(img, 0, 0, width, height);

//           const imageData = context.getImageData(0, 0, width, height);
//           const pixels = imageData.data;
//           const blurhash = decode(pixels, width, height, 4, 3);

//           setBlurhash(blurhash);
//         };
//       } catch (error) {
//         console.error("Error loading image:", error);
//       }
//     };

//     loadImage();
//   }, [imageUrl]);

//   return blurhash;
// };

// export default useImageToBlurhash;
