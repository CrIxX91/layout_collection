import './App.css';
import { GridComponent, NavBarComponent } from './components';



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAcHBtj-SFZ0mO-_NvQLAlju_aqo4BZBD4",
//   authDomain: "mycollection-89660.firebaseapp.com",
//   projectId: "mycollection-89660",
//   storageBucket: "mycollection-89660.appspot.com",
//   messagingSenderId: "78260896159",
//   appId: "1:78260896159:web:571c4e1fd88b9f0f15bdaa"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const figures = ['1','2','3','4','5','6','7','8','9','10'];

function App() {


  
  return (
    <>
      <NavBarComponent/>
      <GridComponent/>
    </>
      
  );
}

export default App;
