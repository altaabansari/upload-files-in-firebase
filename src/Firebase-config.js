import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAKE7wKotXSGtpXaHUVaEm8ojrv1ze6z50",
  authDomain: "fir-storagepractise.firebaseapp.com",
  projectId: "fir-storagepractise",
  storageBucket: "fir-storagepractise.appspot.com",
  messagingSenderId: "172895228697",
  appId: "1:172895228697:web:3bfc60f1759cad5c03eb88",
  measurementId: "G-7VN6P3VEC2",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
