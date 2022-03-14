import React from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import { MotiImage, MotiView } from 'moti';
import {
  FadeIn,
  FadeInUp,
  LightSpeedInLeft,
  SlideInDown,
  SlideInRight,
  SlideInUp,
} from 'react-native-reanimated';

export interface Galeria {
  img: string;
  index: number;
}

interface GaleriaProps extends Galeria, TouchableOpacityProps {}

export function GaleriaItem({ img, index, ...rest }: GaleriaProps) {
  return (
    <MotiView
      delay={2000}
      style={[styles.container]}
      {...rest}
      from={{
        scale: 1,
      }}
      animate={{
        scale: 1.1,
      }}
      transition={{
        type: 'timing',
        duration: 2500,
        loop: true,
      }}
    >
      <MotiImage
        entering={FadeInUp.duration(1850)}
        source={{ uri: img }}
        style={styles.image}
        // from={{
        //   opacity: 0,
        //   backgroundColor: 'rgba(0, 0, 0, 1)',
        //   height: 0,
        // }}
        // animate={{
        //   opacity: 1,
        //   height: 250,
        //   backgroundColor: 'transparent',
        // }}
        // transition={{
        //   type: 'timing',
        //   duration: 1000,
        // }}
      />
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginHorizontal: 5,
    flexDirection: 'column',
    overflow: 'hidden',
    elevation: 1,
    paddingBottom: 10,
    flex: 1,
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 15,
  },
  info: {
    width: '100%',
    padding: 10,
  },
});
