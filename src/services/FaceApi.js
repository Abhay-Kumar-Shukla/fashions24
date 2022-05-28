import { data } from "autoprefixer";
import axios from "axios";
const baseURL = "https://facerecengage.cognitiveservices.azure.com/";
const subscriptionKey = "5b79ba0bb0304460993244188127b26d";
const faceAttributes = "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise";
const detectionModel = "detection_01"; //*

export const faceApiForUrl = axios.create({
baseURL: baseURL,
timeout: 50000,
headers: {
"Ocp-Apim-Subscription-Key": subscriptionKey,
"Content-Type": "application/json"
},
params: {
returnFaceId: true,
returnFaceLandmarks: false,
returnFaceAttributes: faceAttributes,
detectionModel: detectionModel
}
});

export const faceApiForUpload = axios.create({
    baseURL: baseURL,
    timeout: 50000,
    data : data,
    headers: {
    "Ocp-Apim-Subscription-Key": subscriptionKey,
    "Content-Type": "application/octet-stream",
    'processData':false,
    },
    params: {
    returnFaceId: true,
    returnFaceLandmarks: false,
    returnFaceAttributes: faceAttributes,
    detectionModel: detectionModel,
    }
    });