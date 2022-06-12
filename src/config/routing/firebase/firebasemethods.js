import { getAuth,createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , onAuthStateChanged } 
from "firebase/auth";
import app from './firebaseconfig';
import { getDatabase , ref, set, onValue  } from "firebase/database";

// == authentication methods == 
const auth = getAuth(app);

const signUpUser = async (obj) => {
   try {
        return await createUserWithEmailAndPassword(auth, obj.email, obj.password);
    } catch (error) {
        // TODO: Notify user about error
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    }
}
const loginUser = (obj) => {
   return signInWithEmailAndPassword(auth, obj.email, obj.password)
  
}
const logoutUser = () => {
    // return signOut(auth) ; 
}
const checkauthUser = () => {
  
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       const uid = user.uid;
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //     }
    //   });
      

}

// == Database methods ==
const database = getDatabase();
let sendData=(obj, nodeName, id)=>{

    let reference = ref(database, `${nodeName}/${id ? id : ''}`);

    return set(reference, obj);

}
let getData=(nodeName)=>{
    const dbRef = ref(database,nodeName);
    const arr = [];
     onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          console.log(childData);
          arr.push(childData);
          
        });
        return arr;
      }, {
        onlyOnce: true
      });
      
}


 export {signUpUser , loginUser , logoutUser , checkauthUser, sendData, getData}; 

