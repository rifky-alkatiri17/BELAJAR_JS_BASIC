// Pastikan folder "models" berisi model bawaan face-api
// Atau gunakan URL alternatif model CDN (di bawah)

// console.log(window.location.href);
console.log(import.meta.url);

async function run() {
  // **Load model**
  //await faceapi.nets.ssdMobilenetv1.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/'); 
  // Bisa diganti ke URL CDN model jika tidak punya folder models:
  // await faceapi.nets.ssdMobilenetv1.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/');
  //await faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/');
  //await faceapi.nets.faceRecognitionNet.loadFromUri('https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/');

  //local 
  await faceapi.nets.ssdMobilenetv1.loadFromUri('model/');
  await faceapi.nets.faceLandmark68Net.loadFromUri('model/');
  await faceapi.nets.faceRecognitionNet.loadFromUri('model/');

  const img = document.getElementById('inputImage');
  const canvas = document.getElementById('overlay');

  // Sesuaikan ukuran canvas
  const size = { width: img.width, height: img.height };
  faceapi.matchDimensions(canvas, size);

  // **Deteksi wajah**
  const detections = await faceapi
    .detectAllFaces(img)
    .withFaceLandmarks()
    .withFaceDescriptors();

  const resized = faceapi.resizeResults(detections, size);

  // **Gambar bounding box**
  faceapi.draw.drawDetections(canvas, resized);
  faceapi.draw.drawFaceLandmarks(canvas, resized);
}

run();
