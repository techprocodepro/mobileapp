import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  NativeModules,
} from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Body from "./components/Body";
import Proceed from "./components/Proceed";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator initialRouteName="body">
          <stack.Screen name="body" component={Body} options={{headerShown:false}}/>
          <stack.Screen name="proceed" component={Proceed} options={{headerShown:false}}/>
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// export const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: "green",
//     // backgroundColor: "#9e5f5f",
//     height: "100%",
//   },

//   navbar: {
//     position: "absolute",
//     backgroundColor: "red",
//     height: "200%",
//     width: "160%",
//     right: 0,
//     top: 0,
//     transform: [{ rotate: "270deg" }],
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   heading: {
//     position: "absolute",
//     backgroundColor: "blue",
//     height: "15%",
//     width: "100%",
//     top: 0,
//     color: "red",
//   },
//   cardDiv: {
//     position: "absolute",
//     width: "80%",
//     height: "85%",
//     backgroundColor: "orange",
//     right: 0,
//     bottom: 0,
//     // flexDirection: "row",
//     // flexWrap: "wrap",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   cards: {
//     position: "relative",
//     height: 250,
//     width: 200,
//     backgroundColor: "yellow",
//     marginTop: "2%",
//     marginLeft: "1%",
//   },
//   scrollView: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 20,
//   },
//   navbarops: {
//     position: "relative",
//     marginTop: 55,
//     marginLeft: 60,
//     marginBottom: 1,
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   head: {
//     fontSize: 35,
//     fontWeight: "bold",
//     margin: 10,
//     marginLeft: 30,
//     minHeight: 1000,
//     minWidth: 1000,
//   },
//   img: {
//     height: 100,
//     width: 100,
//   },
//   focused: {
//     color: "red",
//   },
// });
