import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FavoriteIcon} from './FavoriteIcon';
import {Card} from './Card';
import { FontFamily } from '../GlobalStyles';
export function Product({name,discount,description,img,cost,onPress}) {
  return (
    <View>
    <Card key={123} style={styles.card} onPress={onPress}>
      <Image
        style={{height:150,width:350}}
        source={img}
      />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{discount}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Image
          style={{width: 50, height: 50,left:278,zIndex:100,top:-27}}
          source={require("../assets/tokenpng2.png")}
        />
      <FavoriteIcon
        onPress={() => console.log('Favorite pressed')}
      />
      <Text style={{fontFamily:FontFamily.poppinsSemibold,left:297,top:-61,zIndex:101}}>{cost}</Text>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    width:350
  },
  thumb: {
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
  },
});