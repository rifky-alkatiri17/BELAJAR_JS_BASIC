//import * as faceDetection from "https://esm.run/@tensorflow-models/face-detection";
//import "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core";
//import "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter";

// Load TFJS core
import * as tf from "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core";

// Load converter
import "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter";

// Load face detection ESM model
import * as faceDetection from "https://esm.run/@tensorflow-models/face-detection";

const img = document.getElementById('foto');

const detector = await faceDetection.createDetector(
  faceDetection.SupportedModels.MediaPipeFaceDetector,
  {
    runtime: "mediapipe",
    solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_detection"
  }
);

const faces = await detector.estimateFaces(img);
console.log(faces);
