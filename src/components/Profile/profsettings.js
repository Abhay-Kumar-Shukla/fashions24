import { CircularProgress } from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebase";

export default function Profsettings(props) {
    const [data, setData] = useState(null);
  
  getDoc(doc(db, "users", props.user.uid)).then((docs) => {
    setData(docs.data())
    
  });

  
  if(data !== null){
      return <>{data.faceAttributes.glasses}<br />{data.faceAttributes.age}</>
  }
    return <div>
      
      <CircularProgress/>
      </div>;
  
}