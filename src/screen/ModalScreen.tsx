/* eslint-disable react-native/no-inline-styles */

import {View, Button, Modal, Text} from 'react-native';
import React, {useState, useContext} from 'react';

import {HeaderTittle} from '../components/HeaderTittle';
import {ThemeContext} from '../context/theme/ThemeContext';
export const ModalScreen = () => {
  const [isvisible, setIsvisible] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View>
      <HeaderTittle title="Modal screen" />

      <Button title="Abrir modal" onPress={() => setIsvisible(!isvisible)} />

      <Modal animationType="fade" visible={isvisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.card,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: colors.card,
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <HeaderTittle title="Modal" />
            <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}>
              Cuerpo del modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsvisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
