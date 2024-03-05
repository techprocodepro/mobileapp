import React, { useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import styles from "../appcss";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Heading = (props) => {
  const amount = useSelector((state) =>
    state.reduce((total, item) => total + item.price * item.order, 0)
  );
  const [click, setClick] = useState(false);
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>{props.heading}</Text>
      <View
        style={{
          position: "absolute",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/cheflogo.png")}
          resizeMode="contain"
          style={{
            position: "absolute",
            height: 100,
            width: 200,
            top: 20,
            left: 70,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          width: 120,
          height: 50,
          backgroundColor: "#f2aa4cff",
          top: 80,
          right: 30,
          borderRadius: 20,
          padding: 10,
          justifyContent: "center",
        }}
        onPress={() => setClick(true)}
      >
        <Image
          source={require("../assets/cartLogo.png")}
          resizeMode="contain"
          style={{ height: "100%", width: "30%" }}
        />
        <Text
          style={{
            position: "absolute",
            color: "white",
            fontWeight: "bold",
            fontSize: 17,
            right: 10,
          }}
        >
          {amount} Rs
        </Text>
      </TouchableOpacity>
      {click && <Cart setClick={setClick} click={click} />}
      <TextInput
        style={{
          width: "80%",
          height: 50,
          backgroundColor: "white",
          paddingLeft: 20,
          borderRadius: 10,
          margin: 20,
          marginRight: 50,
          marginBottom: 50,
          marginLeft: 40,
        }}
        placeholder="search.."
      ></TextInput>
    </View>
  );
};

export default Heading;
