import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Button({
  yellow,
  text,
}: {
  yellow: boolean;
  text: string;
}) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        backgroundColor: !yellow ? '#fff' : '#FFF601',
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: '#000',
          fontFamily: 'Ubuntu_700Bold',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
