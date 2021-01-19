import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Modal,
  TouchableHighlight,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';

import {Loading, Error} from '../../components';
import {CartItem} from './components';
import {useSelector} from 'react-redux';
import {Cart_item_style} from './components/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Cart() {
  const [localData, setLocalData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const cartsList = useSelector((state) => state.cartsList);
  const [modalVisible, setModalVisible] = useState(false);

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
      const bakeToJason = JSON.parse(jsonValue);
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
      const jsonValue = JSON.stringify([...bakeToJson, ...localData]);
      await AsyncStorage.setItem('@CART_DATA', jsonValue);
    } else {
      const jsonValue = JSON.stringify(localData);
      await AsyncStorage.setItem('@CART_DATA', jsonValue);
    }
    Alert.alert('BİLGİ', 'Ürünler satın alındı.');
    await AsyncStorage.removeItem('@storage_Cart');
    setLocalData([]);
  };
  const oppenModel = async () => {
    const jsonValue = await AsyncStorage.getItem('@CART_DATA');
    if (jsonValue != null) {
      const bakeToJason = JSON.parse(jsonValue);
      setHistoryData(bakeToJason);
    } else {
      <Error />;
    }
    setModalVisible(true);
  };

  const renderHistory = ({item}) => (
    <View style={Cart_item_style.itemContainer}>
      <View style={Cart_item_style.itemInnerContainer}>
        <Text style={Cart_item_style.itemText}>Ürün: </Text>
        <Text style={Cart_item_style.itemDetails}>{item.title}</Text>
      </View>
      <View style={Cart_item_style.itemInnerContainer}>
        <Text style={Cart_item_style.itemText}>Fiyat: </Text>
        <Text style={Cart_item_style.itemDetails}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={Cart_item_style.mainContainer}>
      {localData.length > 0 ? (
        <View style={{flex: 1}}>
          <FlatList
            data={localData && localData}
            renderItem={renderCart}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={<Button title="Satın Al" onPress={addData} />}
          />
        </View>
      ) : (
        <View style={Cart_item_style.buttonContainer}>
          <Text style={Cart_item_style.embtyCartText}>Sepet Boş</Text>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={Cart_item_style.centeredView}>
          <View style={Cart_item_style.modalView}>
            <FlatList
              data={historyData && historyData}
              renderItem={renderHistory}
              keyExtractor={(item, index) => index.toString()}
            />
            <TouchableHighlight
              style={Cart_item_style.closeButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={Cart_item_style.textStyle}>Gizle</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        style={Cart_item_style.openButton}
        onPress={() => oppenModel()}>
        <Text style={Cart_item_style.textStyle}>Geçmişi Görüntüle</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}
export {Cart};

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: 'tomato',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//     color: '#000',
//   },
// });
