import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Modal,
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
} from 'react-native';
import {Loading, Error} from '../../components';
import {CartItem} from './components';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Cart() {
  const [localData, setLocalData] = useState([]);
  const cartsList = useSelector((state) => state.cartsList);
  const [modalVisible, setModalVisible] = useState(false);
  const [historyData, setHistoryData] = useState([]);

  const renderCart = ({item}) => <CartItem itemCartData={item} />;

  if (cartsList.loading) {
    return <Loading />;
  }
  if (cartsList.error) {
    return <Error />;
  }
  const getStorageData = async () => {
    const jsonValue = await AsyncStorage.getItem('@storage_Cart');
    if (jsonValue != null) {
      const bakeToJason = JSON.parse([jsonValue]);
      setLocalData(bakeToJason);
    } else {
      <Error />;
    }
  };
  getStorageData();

  const addData = async () => {
    const localValue = await AsyncStorage.getItem('@CART_DATA');
    const bakeToJson = localValue && JSON.parse(localValue);

    if (localValue != null && bakeToJson.length >= 1) {
      const jsonValue = JSON.stringify([...bakeToJson, localData]);
      await AsyncStorage.setItem('@CART_DATA', jsonValue);
    } else {
      const jsonValue = JSON.stringify([localData]);
      await AsyncStorage.setItem('@CART_DATA', jsonValue);
    }
    Alert.alert('BİLGİ', 'Ürünler satın alındı.');
  };
  const oppenModel = async () => {
    const jsonValue = await AsyncStorage.getItem('@CART_DATA');
    if (jsonValue != null) {
      const bakeToJason = JSON.parse([jsonValue]);
      setHistoryData(bakeToJason);
    } else {
      <Error />;
    }
    setModalVisible(true);
  };
  const renderHistory = ({item}) => {console.log(item.category)}

  return (
    <SafeAreaView>
      <FlatList
        data={localData && localData}
        renderItem={renderCart}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={<Button title="Satın Al" onPress={addData} />}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={historyData}
              renderItem={renderHistory}
              keyExtractor={(item, index) => index.toString()}
            />
            {/* <Text style={styles.modalText}>{item.title} </Text> */}

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Gizle</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => oppenModel()}>
        <Text style={styles.textStyle}>Geçmişi Görüntüle</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
// TODO: change this to {Favorites}
export {Cart};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: 'tomato',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
  },
});
