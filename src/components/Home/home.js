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

  getDocs(collection(db, "Products")).then((docdata) => {
    let d = [];
    docdata.forEach((doc) => {
      d.push(doc.data());
    });
    setpdata(d);
    console.log(d)
  });

  if (udata == null || pdata == null) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else {
    let agelist = [];
    let genderlist = [];
    let makeuplist = [];
    let glasseslist = [];
    let fhairlist = [];
    let list = [];

    pdata.forEach((doc) => {
     if(doc.ageMin <= udata.faceAttributes.age && udata.faceAttributes.age <= doc.ageMax)
      agelist.push(<Card data={doc} type='age' />);
    });

    pdata.forEach((doc) => {
      if(doc.gender == udata.faceAttributes.gender )
       genderlist.push(<Card data={doc} type='gender' />);
     });

     pdata.forEach((doc) => {
      if(doc.glasses == udata.faceAttributes.glasses )
       glasseslist.push(<Card data={doc} type='glasses' glasses={udata.faceAttributes.glasses} />);
     });

     pdata.forEach((doc) => {
      if(udata.faceAttributes.makeup.eyeMakeup)
       makeuplist.push(<Card data={doc} type='makeup' makeup='eyeMakeup' />);

      if(udata.faceAttributes.makeup.lipMakeup)
       makeuplist.push(<Card data={doc} type='makeup' makeup='lipMakeup' />);
     });

     pdata.forEach((doc) => {
      if(udata.faceAttributes.facialHair.beard > 0.5)
       fhairlist.push(<Card data={doc} type='fhair' fhair='beard' />);
      if(udata.faceAttributes.facialHair.moustache > 0.5)
       fhairlist.push(<Card data={doc} type='fhair' fhair='moustache' />);
     });

    pdata.forEach((doc) =>{
      list.push(<Card data={doc} />)
    })
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
          <Typography style={{ marginBottom: "20px", color:'grey', textDecoration: "underline" }} variant="h5">Recommended on basis of age</Typography>
          <Container style={{display:'grid',gridTemplateColumns:'30% 30% 30%'}}>{agelist}</Container>
          <Typography style={{ marginBottom: "20px", color:'grey', textDecoration: "underline" }} variant="h5">Recommended on basis of gender</Typography>
          <Container style={{display:'grid',gridTemplateColumns:'30% 30% 30%'}}>{genderlist}</Container>
          <Typography style={{ marginBottom: "20px", color:'grey', textDecoration: "underline" }} variant="h5">Recommended on basis of make up</Typography>
          <Container style={{display:'grid',gridTemplateColumns:'30% 30% 30%'}}>{makeuplist}</Container>
          <Typography style={{ marginBottom: "20px", color:'grey', textDecoration: "underline" }} variant="h5">Recommended on basis of glasses</Typography>
          <Container style={{display:'grid',gridTemplateColumns:'30% 30% 30%'}}>{glasseslist}</Container>
          <Typography style={{ marginBottom: "20px", color:'grey', textDecoration: "underline" }} variant="h5">Recommended on basis of facial hair</Typography>
          <Container style={{display:'grid',gridTemplateColumns:'30% 30% 30%'}}>{fhairlist}</Container>
          
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
          <Container style={{display:'flex'}}>{list}</Container>
        </Container>
      </div>
    );
  }
}
