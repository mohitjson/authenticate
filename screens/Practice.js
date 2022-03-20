import React from 'react';
import { Image, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        url: "https://uae-staging.bevarabia.com/media/catalog/product/cache/6b40dc7b600d1d1fd57f62feaca1705e/i/l/illy-single-origin-coffee-beans-brazil-250g.jpg"

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        url: "https://uae-staging.bevarabia.com/media/catalog/product/cache/6b40dc7b600d1d1fd57f62feaca1705e/i/l/illy-coffee-beans-dark-roast-250g.jpg"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        url: "https://uae-staging.bevarabia.com/media/catalog/product/cache/6b40dc7b600d1d1fd57f62feaca1705e/1/7/17699-250-as-front-eti-eu-chicchi.jpg"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Fourt Item',
        url: "https://uae-staging.bevarabia.com/media/catalog/product/cache/6b40dc7b600d1d1fd57f62feaca1705e/1/7/17699-250-as-front-guat-eu-chicchi.jpg"
    },
];
const Practice = () => {
    return (
        <View style={styles.container}>
            <Text style={{ flex: .1, alignItems: 'center', justifyContent: 'center', fontSize: 23 }}>just for practice flatlist!!!!!!!</Text>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={(itemData) =>
                    <Text>{itemData.item.title}</Text>
                    // <Image style={{ height: 300, width: 300 }} source={{ uri: itemData.item.url }} />
                }
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Practice;