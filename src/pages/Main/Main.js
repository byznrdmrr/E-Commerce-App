import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import {Loading, Error} from '../../components';
import {MainItem, ListHeader} from './components';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';
const API_URL_CATEGORIES = 'https://fakestoreapi.com/products/categories';

function Main(props) {
  const [pageEntries, setPageEntries] = useState([]);
  const [loadingCategory, setLoadingGategory] = useState(false);
  const {data, loading, error} = useFetch(API_URL);
  const categoriesData = useFetch(API_URL_CATEGORIES);

  useEffect(() => {
    if (data) {
      setPageEntries(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  if (loadingCategory) {
    return (
      <View style={[styles.loadingContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#ff6347" />
      </View>
    );
  }
  const renderMain = ({item}) => (
    <MainItem
      item={item}
      onSelect={() => props.navigation.navigate('DetailScreen', {item: item})}
    />
  );

  const filterProductsByCategory = (categoryName) => {
    setLoadingGategory(true);
    if (categoryName) {
      axios
        .get(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((res) => {
          setPageEntries(res.data);
          setLoadingGategory(false);
        });
    }
  };

  const allData = () => {
    setPageEntries(data);
  };

  function ListHeader() {
    const renderCategories = ({item}) => (
      <>
        <TouchableOpacity
          onPress={() => filterProductsByCategory(item)}
          style={styles.button}>
          <Text style={{color: '#fff'}}>{item}</Text>
        </TouchableOpacity>
      </>
    );

    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={
            <TouchableOpacity onPress={() => allData()} style={styles.button}>
              <Text style={{color: '#fff'}}>All Products</Text>
            </TouchableOpacity>
          }
          data={categoriesData.data}
          keyExtractor={(_, i) => i.toString()}
          renderItem={renderCategories}
        />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<ListHeader />}
        data={pageEntries}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderMain}
      />
    </SafeAreaView>
  );
}
export {Main};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    backgroundColor: '#ff6347',
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 5,
    borderRightWidth: 2,
    borderLeftWidth: 2,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
