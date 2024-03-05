import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { ProceedCards } from "./ProceedCards";

const Proceed = () => {
  const data = useSelector((state) => state);
  const totalAmount = useSelector((state) =>
    state.reduce((total, item) => total + item.price * item.order, 0)
  );
  return (
    <View style={{ border: 2, backgroundColor: "#101820ff", height: "100%" }}>
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "white",
            paddingTop: 40,
            marginBottom: 20,
            paddingBottom: 20,
            borderBottomColor: "white",
            borderBottomWidth: 2,
            width: "80%",
            marginHorizontal: "10%",
          }}
        >
          Cart Items
        </Text>
      </View>
      <View
        style={{
          top: "0%",
          height: "90%",
        }}
      >
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProceedCards data={data} />
        </ScrollView>
        <View
          style={{
            height: "30%",
            width: "85%",
            marginHorizontal: "7.5%",
            borderTopWidth: 3,
            borderTopColor: "white",
          }}
        >
          <View
            style={{
              margin: 10,
              backgroundColor: "#212122",
              height: "70%",
              borderRadius: 30,
            }}
          >
            <View
              style={{
                height: "60%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>
                AMOUNT{" "}
                <Text style={{ fontWeight: "bold" }}>: {totalAmount} Rs</Text>{" "}
              </Text>
              <Text style={{ color: "white" }}>
                + GST (18%){" "}
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  : {(totalAmount * 18) / 100} Rs
                </Text>
              </Text>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                TOTAL AMOUNT :-{" "}
                <Text>{totalAmount + (totalAmount * 18) / 100} RS</Text>
              </Text>
            </View>
            <TouchableOpacity
              style={{
                position: "relative",
                height: "30%",
                bottom: 10,
                backgroundColor: "#f2aa4cff",
                margin: 15,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Proceed;
