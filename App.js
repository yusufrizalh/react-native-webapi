import React from "react";
import { View, Text, Image } from "react-native";
import PegawaiMain from "./pegawai/PegawaiMain";
import PegawaiRead from "./pegawai/PegawaiRead";
import PegawaiEdit from "./pegawai/PegawaiEdit";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PegawaiMain">
        <Stack.Screen
          name="PegawaiMain"
          component={PegawaiMain}
          options={{
            title: "Buat Data Pegawai",
            headerStyle: {
              backgroundColor: "#001337",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            // headerTitle: (props) => <MyLogo {...props} />,
          }}
        />
        <Stack.Screen
          name="PegawaiRead"
          component={PegawaiRead}
          options={{
            title: "Lihat Data Pegawai",
            headerStyle: {
              backgroundColor: "#001337",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="PegawaiEdit"
          component={PegawaiEdit}
          options={{
            title: "Ubah Data Pegawai",
            headerStyle: {
              backgroundColor: "#001337",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
