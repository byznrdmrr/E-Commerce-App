import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');

const main_items = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#cecece',
  },
  productTextContentContainer: {
    marginTop: 5,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    height: deviceSize.height / 3,
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#03a9f4',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  favButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export {main_items};
