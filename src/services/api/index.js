const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
import { config } from '../config';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(config);

var db = firebase.firestore();

export default {
  // Get all documents of "clusters"
  getAllClusters: () => db.collection("clusters").get()
    .then((querySnapshot) => querySnapshot.docs),
  // Get all documents of "countries"
  getAllCountries: () => db.collection("countries").get()
    .then((querySnapshot) => querySnapshot.docs),
  // Get all documents of "focuses"
  getAllFocuses: () => db.collection("focuses").get()
    .then((querySnapshot) => querySnapshot.docs),
  // Get clusters by main focus
  getByMainFocus: (mainFocus) => db.collection("clusters")
    .where("mainFocus", "==", mainFocus).get()
    .then((querySnapshot) => querySnapshot.docs),
  // Get clusters by main focus and country
  getByMainFocusCountry: (mainFocus, country) => db.collection("clusters")
    .where("mainFocus", "==", mainFocus)
    .where("country", "==", country).get()
    .then((querySnapshot) => querySnapshot.docs),
  // Get clusters by main focus, country and name
  getByMainFocusCountryName: (mainFocus, country, name) => db.collection("clusters")
    .where("mainFocus", "==", mainFocus)
    .where("country", "==", country)
    .where("name", "==", name).get()
    .then((querySnapshot) => querySnapshot.docs),
  // Get clusters by secondary focus
  getBySecFocus: (secFocus) => db.collection("clusters")
    .where("secondaryFocus", "array-contains", secFocus).get()
    .then((querySnapshot) => querySnapshot.docs),
  // Get clusters by secondary focus and country
  getBySecFocusCountry: (secFocus, country) => db.collection("clusters")
    .where("secondaryFocus", "array-contains", secFocus)
    .where("country", "==", country).get()
    .then((querySnapshot) => querySnapshot.docs),
  // Get clusters by secondary focus, country and name
  getBySecFocusCountryName: (secFocus, country, name) => db.collection("clusters")
    .where("secondaryFocus", "array-contains", secFocus)
    .where("country", "==", country)
    .where("name", "==", name).get()
    .then((querySnapshot) => querySnapshot.docs)
};

/*
 *  EXAMPLES
 *
 *  import api from 'services/api/';
 *
 *  api.getAllClusters().then((clusters) => console.log(clusters[0].data()));
 *  api.getAllCountries().then((clusters) => console.log(clusters[0].data()));
 *  api.getAllFocuses().then((clusters) => console.log(clusters[0].data()));
 *  api.getByMainFocus("Medtech").then((clusters) => console.log(clusters[0].data()));
 *  api.getByMainFocusCountry("Medtech", "Sweden").then((clusters) => console.log(clusters[0].data()));
 *  api.getByMainFocusCountryName("Medtech", "Sweden", "Ideon Science Park").then((clusters) => console.log(clusters[0].data()));
 *  api.getBySecFocus("Homecare").then((clusters) => console.log(clusters[0].data()));
 *  api.getBySecFocusCountry("Homecare", "Norway").then((clusters) => console.log(clusters[0].data()));
 *  api.getBySecFocusCountryName("Homecare", "Norway", "Norwegian Smart Cluster").then((clusters) => console.log(clusters[0].data()));
 */
