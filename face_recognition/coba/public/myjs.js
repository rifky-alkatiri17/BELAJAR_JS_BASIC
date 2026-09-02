// --- via NPM --
//import './@mediapipe/face_detection';
//import './@tensorflow/tfjs-core';
// Register WebGL backend.
//import './@tensorflow/tfjs-backend-webgl';
//import * as faceDetection from './@tensorflow-models/face-detection' ;

// -- rifky coba --
//import './@mediapipe/face_detection/face_detection.js';
//import * as faceDetection1 from './@mediapipe/face_detection/face_detection.js';
//import * as faceDetection from './@tensorflow-models/face-detection/dist/face-detection.esm.js' ;

// -- via CDN --
// Load TensorFlow.js Core
import * as tf from "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core";

// Load TFJS Converter
import "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter";

// Load Face Detection Model
import * as faceDetection from "https://cdn.jsdelivr.net/npm/@tensorflow-models/face-detection";

const img = document.getElementById('foto');
img.style.width = '100%'

// Load MediaPipe dari CDN Google
const detector = await faceDetection.createDetector(
	faceDetection.SupportedModels.MediaPipeFaceDetector,
	{
	  runtime: "mediapipe",
	  solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_detection"
	} 
);

const faces = await detector.estimateFaces(img);
console.log(faces);