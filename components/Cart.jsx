import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Cards from "./Cards";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Cart = (props) => {
  const navigation = useNavigation();
  const data = useSelector((state) => state);
  return (
    <View
      style={{
        position: "absolute",
        height: 600,
        width: 280,
        backgroundColor: "#000000",
        right: 30,
        top: 80,
        zIndex: 2,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "grey",
      }}
    >
      <TouchableOpacity
        style={{
          position: "absolute",
          //   backgroundColor: "grey",
          height: 1000,
          width: 1000,
          left: -100,
          top: -100,
        }}
        onPress={() => props.setClick(false)}
      ></TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          right: 0,
          backgroundColor: "#333333",
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 3,
          borderRadius: 20,
        }}
        onPress={() => props.setClick(false)}
      >
        <Image source={require("../assets/closeIcon.png")} />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          // backgroundColor: "#b2d8d8",
          top: 50,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 5,
          paddingBottom: 50,
        }}
      >
        <Cards data={data} />
      </ScrollView>

      <TouchableOpacity
        style={{
          backgroundColor: "#f2aa4cff",
          width: "95%",
          height: 50,
          margin: 5,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("proceed")}
      >
        <Text style={{ fontWeight: "bold" }}>==proceed==</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
