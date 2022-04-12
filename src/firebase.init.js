import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBv227FZHUpJjVbPEDJo9l6tdUdOGs47oo",
  authDomain: "product-analysis-663c2.firebaseapp.com",
  projectId: "product-analysis-663c2",
  storageBucket: "product-analysis-663c2.appspot.com",
  messagingSenderId: "918187426729",
  appId: "1:918187426729:web:f507244903ceaf39ddbab8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;