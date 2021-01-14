import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const Product_style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    padding: 10,
    height: deviceSize.height / 2,
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  price: {
    backgroundColor: '#4dd0e1',
    padding: 8,
    borderRadius: 4,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    padding: 10,
    backgroundColor: '#eceff1',
  },
  contentContainer: {
    marginTop: 10,
  },
  categoryContainer: {
    // marginTop: 10,
    padding: 10,
    flexDirection: 'row',
  },
  category: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  discription: {
    paddingHorizontal: 10,
  },
  similarItems: {
    marginTop: 20,
  },
  similarItemsBg: {
    backgroundColor: '#eceff1',
    padding: 10,
  },
  similarProductsTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  addToCart: {
    marginTop: 10,
  }
});

export {Product_style};
