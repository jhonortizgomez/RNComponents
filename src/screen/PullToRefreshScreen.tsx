import React, {useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';

import {HeaderTittle} from '../components/HeaderTittle';
import {styles} from '../theme/AppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('hola');
    }, 1500);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="purple"
          colors={['white', 'red', 'blue']}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTittle title="Pull To Refresh" />
        {data && <HeaderTittle title={data} />}
      </View>
    </ScrollView>
  );
};
