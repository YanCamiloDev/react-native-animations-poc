import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GaleriaItem } from '../GaleriaItem';
import Button from '../Button';
import { AnimatePresence, MotiScrollView, MotiView } from 'moti';
import Animated from 'react-native-reanimated';

const DATA = [
  {
    id: 1,
    img: 'https://festanejo.com.br/wp-content/uploads/2019/11/Wesley-Safad%C3%A3o-quebra-recorde-em-cruzeiro.jpg',
  },
  {
    id: 2,

    img: 'https://st.depositphotos.com/1003293/1485/i/600/depositphotos_14854739-stock-photo-singer.jpg',
  },
  {
    id: 3,

    img: 'https://static4.depositphotos.com/1008939/319/i/600/depositphotos_3196108-stock-photo-singer.jpg',
  },
  {
    id: 4,
    img: 'https://thumbs.dreamstime.com/b/atr%C3%A1s-do-mic-10112495.jpg',
  },
  {
    id: 5,

    img: 'https://st.depositphotos.com/1003293/1485/i/600/depositphotos_14854739-stock-photo-singer.jpg',
  },
  {
    id: 6,
    img: 'https://thumbs.dreamstime.com/b/atr%C3%A1s-do-mic-10112495.jpg',
  },
];

export function Galeria() {
  const [show, setShow] = React.useState(false);
  setTimeout(() => {
    setShow(true);
  }, 1500);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.list}>
        {show && (
          <FlatList
            data={DATA}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item, index }) => (
              <GaleriaItem index={index} img={item.img} />
            )}
            style={{ paddingTop: 10 }}
            contentContainerStyle={{ paddingBottom: 10 }}
            numColumns={2}
          />
        )}
        <View style={styles.absolute}>
          <MotiView
            style={{ justifyContent: 'center', alignItems: 'center' }}
            from={{
              transform: [{ translateY: 100 }],
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transform: [{ translateY: 0 }],
            }}
            transition={{
              type: 'timing',
              duration: 1600,
            }}
          >
            <MotiView
              delay={2000}
              from={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: 'timing',
                duration: 1000,
              }}
            >
              <Text style={styles.yellowMsg}>Welcome to beatgig</Text>
            </MotiView>
            <Text style={styles.title}>Start booking Artists.</Text>
            <MotiView
              delay={700}
              from={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                type: 'timing',
                duration: 1000,
              }}
            >
              <Text style={styles.normalText}>
                BeatGig is te easiest way to hook{`\n`} talent for private
                parties, colleges, {`\n`} bars, weddings {`&`} more
              </Text>
            </MotiView>
            <MotiView
              delay={1400}
              from={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                type: 'timing',
                duration: 1000,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  width: '50%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 50,
                }}
              >
                <Button yel={false} text={'Log in'} />
                <Button yel={true} text={'Sing up'} />
              </View>
            </MotiView>
          </MotiView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#000',
    width: '100%',
    position: 'relative',
  },
  list: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu_700Bold',
    textAlign: 'center',
  },
  yellowMsg: {
    fontSize: 20,
    color: '#E1DC44',
    fontFamily: 'Ubuntu_700Bold',
    marginBottom: 30,
  },
  normalText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Ubuntu_400Regular',
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 27,
    marginHorizontal: 10,
  },
});

// https://twitter.com/i/status/1426029861001433092
