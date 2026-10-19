import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Safely map values from the environment variables
const firebaseConfig = {
  apiKey: "AIzaSyDcFAkR68Uu37_lhk-AR6dK7wYpOALbwpU",
  authDomain: "aminul-islam-shohag.firebaseapp.com",
  projectId: "aminul-islam-shohag",
  storageBucket: "aminul-islam-shohag.firebasestorage.app",
  messagingSenderId: "673717617035",
  appId: "1:673717617035:web:7768e940d049b983fa2f8e",
  measurementId: "G-CY65XJ1HEV"
};
// Initialize the Firebase instances
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export instances to use in components
export { app, analytics };
