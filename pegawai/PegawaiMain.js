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
} from "react-native";

import { Button, Input } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";

export default class PegawaiMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputNama: "",
      textInputGaji: "",
    };
  }

  /*
    # membuat semua fungsi
    - insert data
    - tampil data
  */

  InsertDataPegawai = () => {
    fetch("http://localhost/my-react-crud/InsertDataPegawai.php", {
      method: "POST",
      body: JSON.stringify({
        pegawai_nama: this.state.textInputNama,
        pegawai_gaji: this.state.textInputGaji,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  LihatDataPegawai = () => {
    this.props.navigation.navigate("PegawaiRead");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.teksjudul}> Membuat Data Pegawai </Text>
        <Input
          placeholder="Tulis nama pegawai"
          leftIcon={{ type: "font-awesome", name: "chevron-right" }}
          onChangeText={(TextInputValue) =>
            this.setState({ textInputNama: TextInputValue })
          }
        />
        <Text style={styles.tekspadding} />
        <Input
          placeholder="Tulis gaji pegawai"
          leftIcon={{ type: "font-awesome", name: "chevron-right" }}
          onChangeText={(TextInputValue) =>
            this.setState({ textInputGaji: TextInputValue })
          }
        />
        <Text style={styles.tekspadding} />
        <Button title="Simpan data pegawai" onPress={this.InsertDataPegawai} />
        <Text style={styles.tekspadding} />
        <Button title="Lihat data pegawai" onPress={this.LihatDataPegawai} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 12,
    padding: 6,
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
  },
  teks: {
    color: "blue",
    fontSize: 16,
  },
  teksjudul: {
    fontSize: 18,
    textAlign: "center",
    margin: 16,
  },
  tekspadding: {
    padding: 14,
  }
});

