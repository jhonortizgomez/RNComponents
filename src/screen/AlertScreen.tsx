import React from 'react';
import {Alert, Button, View} from 'react-native';

import {HeaderTittle} from '../components/HeaderTittle';
import {styles} from '../theme/AppTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTittle title="Alert" />

      <Button title="Mostrar Alerta" onPress={showAlert} />
    </View>
  );
};
