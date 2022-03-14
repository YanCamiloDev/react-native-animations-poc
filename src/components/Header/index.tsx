import * as React from 'react';
import { Image, Text, View } from 'react-native';
import logo from '../../../assets/logo.png';

export default function Header() {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        backgroundColor: '#000',
        alignItems: 'center',
      }}
    >
      <Image source={logo} width={40} height={40} style={{ marginTop: 8 }} />
    </View>
  );
}
