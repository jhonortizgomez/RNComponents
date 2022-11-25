/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';

import {HeaderTittle} from '../components/HeaderTittle';
import {styles} from '../theme/AppTheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';

export const TextInputScreen = () => {
  const {onChange, form, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTittle title="Text Inputs" />

          <TextInput
            style={styles.Input}
            placeholder="ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={styles.Input}
            placeholder="ingrese su email"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
            keyboardAppearance="dark"
          />

          <View style={styles.switchRow}>
            <Text style={styles.switchText}>Suscribirse</Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>

          <HeaderTittle title={JSON.stringify(form, null, 3)} />
          <HeaderTittle title={JSON.stringify(form, null, 3)} />

          <TextInput
            style={styles.Input}
            placeholder="ingrese su telefeno"
            autoCorrect={false}
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
          <HeaderTittle title={JSON.stringify(form, null, 3)} />
        </View>

        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
