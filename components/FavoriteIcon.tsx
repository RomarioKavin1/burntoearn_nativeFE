import React from 'react';
import {StyleSheet, TouchableOpacity,Image} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export function FavoriteIcon({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        
      <Svg
        width={32}
        height={32}
        viewBox="0 0 24 24"
        fill={'none'}
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
       
      </Svg>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 16,
    top: 260 - 64 / 2,
    height: 64,
    width: 64,
    borderRadius: 64 / 2,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});