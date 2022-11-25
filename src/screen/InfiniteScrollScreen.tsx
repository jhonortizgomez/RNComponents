/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, Image, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';

import {HeaderTittle} from '../components/HeaderTittle';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumber] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumber([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <Image
        source={{uri: `https://picsum.photos/id/${item}/500/400.jpg`}}
        style={{width: '100%', height: 400}}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTittle title="Infite scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <ActivityIndicator size={20} color="red" />
          </View>
        )}
      />
    </View>
  );
};
