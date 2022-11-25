/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList} from 'react-native';

import {styles} from '../theme/AppTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTittle} from '../components/HeaderTittle';
import {ItemSeparator} from '../components/ItemSeparator';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={item => <FlatListMenuItem menuItem={item.item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTittle title="Opciones de menu" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
