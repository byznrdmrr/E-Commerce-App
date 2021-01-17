import React from 'react';
import {ScrollView, Text, View, FlatList, Button} from 'react-native';
import {MainItem} from './MainItem';

function ListHeader({categoriesList, categoryData}) {

  const renderCategories = ({item}) => (
    <View>
      <Button title={item} onPress={categoryData} />
    </View>
  );

  return (
    <View>
      {/* {categoriesList.data.map(item => item)} */}
      <FlatList
        horizontal
        data={categoriesList}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderCategories}
      />
    </View>
  );
}
export {ListHeader};
