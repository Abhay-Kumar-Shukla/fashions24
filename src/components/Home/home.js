import { CircularProgress, Container, Typography } from "@mui/material";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebase";
import Card from "./Card";
import MenuAppBar from "./nav";

export default function Home(props) {
  var userdata = {};
  const [udata, setudata] = useState(null);
  const [pdata, setpdata] = useState(null);
  getDoc(doc(db, "users", props.user.uid)).then((docs) => {
    userdata = docs.data();
    if (userdata.firstTime) {
      updateDoc(doc(db, "users", userdata.uid), { firstTime: false }).then(
        (fx) => {
          window.location = "./products";
        }
      );
    }
    setudata(userdata);
    console.log(docs.data());
  });

  getDocs(collection(db, "products")).then((docdata) => {
    let d = [];
    docdata.forEach((doc) => {
      d.push(doc.data());
    });
    setpdata(d);
  });

  if (udata == null || pdata == null) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else {
    let list = [];
    pdata.forEach((doc) => {
      list.push(<Card data={doc} />);
    });
    return (
      <div>
        <MenuAppBar />

        <Container style={{ margin: "20px auto" }}>
          <Typography
            variant="h4"
            style={{ marginBottom: "20px", textDecoration: "underline" }}
            gutterBottom
          >
            Recommended Products
          </Typography>
          {list}
          <Typography
            variant="h4"
            style={{
              marginBottom: "20px",
              textDecoration: "underline",
              marginTop: "50px",
            }}
            gutterBottom
          >
            All Products
          </Typography>
        </Container>
      </div>
    );
  }
}
