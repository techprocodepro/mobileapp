import React from "react";
import data from "../api";
import Heading from "./Heading";
import Navbar from "./Navbar";
import CardDiv from "./CardDiv";
import { useState } from "react";
import { ImageBackground, View } from "react-native";
import styles from "../appcss";

const Body = (props) => {
  const [params, setParams] = useState(0);
  return (
    // <ImageBackground source={require('../assets/background.jpg')}>

    <View style={styles.body}>
      <Heading heading={data[params][0].mainname} />
      <Navbar params={params} setParams={setParams} />
      <CardDiv data={data[params]} />
    </View>

    // </ImageBackground>
  );
};

export default Body;
