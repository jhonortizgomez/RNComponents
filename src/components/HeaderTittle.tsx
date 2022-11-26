/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from '../theme/AppTheme';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  title: string;
}

export const HeaderTittle = ({title}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={{...styles.title, color: colors.text}}>{title} </Text>
    </View>
  );
};
