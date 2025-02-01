The solution involves using a `.then()` block to handle the promise returned by the `getDoc()` method. This ensures that the code accessing the `name` property only executes after the data has been successfully retrieved:
```javascript
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();
const docRef = doc(db, "yourCollection", "yourDocumentId");

getDoc(docRef).then((doc) => {
  if (doc.exists()) {
    console.log("Document data:", doc.data().name);
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
```