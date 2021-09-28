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

export default class PegawaiEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput_ID: "",
      textInput_Nama: "",
      textInput_Gaji: "",
    };
  }

  componentDidMount() {
    // membaca data dari pegawai read
    this.setState({
      textInput_ID: this.props.route.params.ID,
      textInput_Nama: this.props.route.params.NAMA,
      textInput_Gaji: this.props.route.params.GAJI,
    });
  }

  updateDataPegawai = () => {
    fetch("http://localhost/my-react-crud/UpdateDataPegawai.php", {
      method: "POST",
      body: JSON.stringify({
        pegawai_id: this.state.textInput_ID,
        pegawai_nama: this.state.textInput_Nama,
        pegawai_gaji: this.state.textInput_Gaji,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    // redirect kembali ke pegawai main
    this.props.navigation.navigate("PegawaiMain");
  };

  deleteDataPegawai = () => {
    fetch("http://localhost/my-react-crud/HapusDataPegawai.php", {
      method: "POST",
      body: JSON.stringify({
        pegawai_id: this.state.textInput_ID,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    // redirect kembali ke pegawai main
    this.props.navigation.navigate("PegawaiMain");
  };

  render() {
    const { textInput_ID, textInput_Nama, textInput_Gaji } =
      this.props.route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.teksjudul}> Mengubah Data Pegawai </Text>
        <Input
          placeholder="Nama Pegawai"
          leftIcon={{ type: "font-awesome", name: "chevron-right" }}
          value={this.state.textInput_Nama}
          onChangeText={(TextInputValue) =>
            this.setState({ textInput_Nama: TextInputValue })
          }
        />
        <Text style={styles.tekspadding} />
        <Input
          placeholder="Gaji Pegawai"
          leftIcon={{ type: "font-awesome", name: "chevron-right" }}
          value={this.state.textInput_Gaji}
          onChangeText={(TextInputValue) =>
            this.setState({ textInput_Gaji: TextInputValue })
          }
        />
        <Text style={styles.tekspadding} />
        <Button
          onPress={this.updateDataPegawai}
          title="  Ubah Data Pegawai"
        />
        <Text style={styles.tekspadding} />
        <Button
          onPress={this.deleteDataPegawai}
          title="  Hapus Data Pegawai"
        />
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
  },
});
