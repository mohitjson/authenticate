//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, SafeAreaView } from 'react-native';
import Colors from '../constants/Colors';

import ProductItem from '../components/shop/ProductItem'

const LAUNCHES_QUERY = `
{
    products(
      filter: {category_id: {eq: "3"}},
      sort: {name: ASC},
      pageSize: 10,
      currentPage: 1
    ) {
      total_count
      items {
        id
        image{
          url
        }
        name
        sku
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
        }
      }
    }
  }`
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/bevarabialogo.png')}
    />)
}
const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState();
  const getPost = () => {
    fetch(
      'https://uae-staging.bevarabia.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: LAUNCHES_QUERY
      })
    }).then((response) => {
      response.json()
        .then((resJson) =>
          setData(resJson.data.products.items))
    })
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    getPost();
  }, [])
  // console.log(data)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // numColumns={2}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={(itemData) =>
          <ProductItem

            image={itemData.item.image.url}
            title={itemData.item.name}
            price={`${itemData.item.price_range.minimum_price.regular_price.currency} ${itemData.item.price_range.minimum_price.regular_price.value}.00 `}
            onSelect={() => { }}
          >
            <Button
              color={Colors.primary}
              title="View Details"
              onPress={() => { }}
            />
            <Button
              color={Colors.primary}
              title="To Cart"
              onPress={() => { navigation.navigate('CartScreen') }}
            />

          </ProductItem>
        }
      />
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = () => {
  return {
    headerTitle: 'all',
    headerRight:()=>(
      <Button
      onPress={()=>{}}
      title='info'
      />
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
