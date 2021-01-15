import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

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


export {Cart_item_style};
