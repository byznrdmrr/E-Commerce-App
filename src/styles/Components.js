import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const Product_card_style = StyleSheet.create({
  productItem: {
    width: deviceSize.width / 3,
    padding: 10,
    marginRight: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ecefef',
    position: "relative"
  },
  productTextContentContainer: {
    marginTop: 5,
    flex: 1,
    justifyContent: "space-between",
  },
  productTextContent: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  productTextPrice: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#03a9f4',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Favorite_card_style = StyleSheet.create({
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
  price: {
    color: '#03a9f4',
  },
});

const Add_to_cart_style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#4dd0e1',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginLeft: 4,
  },
});

const Cart_item_style = StyleSheet.create({
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
    marginRight: 5
  },
  delete: {
    marginRight: 10
  }
});


export {Product_card_style, Favorite_card_style, Add_to_cart_style, Cart_item_style};
