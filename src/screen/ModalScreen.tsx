/* eslint-disable react-native/no-inline-styles */

import {View, Button, Modal, Text} from 'react-native';
import React from 'react';
import {HeaderTittle} from '../components/HeaderTittle';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isvisible, setIsvisible] = useState(false);
  return (
    <View>
      <HeaderTittle title="Modal screen" />

      <Button title="Abrir modal" onPress={() => setIsvisible(!isvisible)} />

      <Modal animationType="fade" visible={isvisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
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
