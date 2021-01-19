import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const Cart_item_style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#c1c4c4',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    margin: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ecefef',
    padding: 5,
  },
  image: {
    height: deviceSize.height / 7,
  },
  contentContainer: {
    flex: 3,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  contentInnerContainerFirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    flex: 1,
  },
  contentInnerContainerSecond: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    flex: 3,
    marginRight: 10,
  },
  priceContainer: {
    marginBottom: 20,
    marginRight: 5,
  },
  delete: {
    marginRight: 10,
  },
  // Modal styles
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
    padding: 10,
    width: '90%',
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
    width: deviceSize.width * 0.9,
    padding: 10,
    elevation: 2,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    borderRadius: 10
  },
  closeButton: {
    backgroundColor: '#2196F3',
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
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  embtyCartText: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center"
  },
  itemContainer: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    width: "90%",
    borderRadius: 10,
    borderColor: "#2196F3"
  },
  itemInnerContainer: {
    flexDirection: "row",
  },
  itemText: {
    fontWeight: "bold",
  },
  itemDetails: {
    width: "90%",
  }
});

export {Cart_item_style};
