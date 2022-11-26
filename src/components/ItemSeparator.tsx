/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useContext} from 'react';

import {ThemeContext} from '../context/theme/ThemeContext';

export const ItemSeparator = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 8,
        borderBottomColor: colors.border,
      }}
    />
  );
};
