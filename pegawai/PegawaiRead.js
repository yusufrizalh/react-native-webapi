import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  Alert,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Pressable,
} from "react-native";

import { Button, Input, Header, Card } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";

export default class PegawaiRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataPegawaiArray: [],
    };
  }

  componentDidMount() {
    return fetch("http://localhost/my-react-crud/LihatSemuaPegawai.php")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataPegawaiArray: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getDataPegawai = (pegawai_id, pegawai_nama, pegawai_gaji) => {
    this.props.navigation.navigate("PegawaiEdit", {
      ID: pegawai_id,
      NAMA: pegawai_nama,
      GAJI: pegawai_gaji,
    });
  };

  ListViewSeparator = () => {
    return (
      <View
        style={{ height: 0.6, width: "100%", backgroundColor: "#333333" }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 18 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={this.state.dataPegawaiArray}
          keyExtractor={(item) => item.pegawai_id}
          renderItem={({ item }) => (
            <Card>
              {/* <Card.Title>CARD WITH DIVIDER</Card.Title> */}
              <Card.Divider />
              <View>
                <Pressable
                  onPress={this.getDataPegawai.bind(
                    this,
                    item.pegawai_id,
                    item.pegawai_nama,
                    item.pegawai_gaji
                  )}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 16,
                      padding: 5,
                      margin: 2,
                      fontStyle: "italic",
                    }}
                  >
                    ID: {item.pegawai_id} | Nama: {item.pegawai_nama}
                  </Text>
                </Pressable>
              </View>
            </Card>
          )}
        />
      </View>
    );
  }
}
