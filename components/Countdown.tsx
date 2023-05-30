import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from "react-native-paper";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { FontFamily } from '../GlobalStyles';

const Countdown =()=> {
    const [isPlaying, setIsPlaying] = React.useState(true)
    const[mintable,setMintable]=React.useState(true)
  return (
    
    <View style={styles.container}>
        <View style={{position:'absolute'}}>
      <CountdownCircleTimer
      initialRemainingTime={30}
        isGrowing={true}
        isPlaying={isPlaying}
        duration={24*60*60}
        colors={"#FF6079"}
        onComplete={() => (setMintable(false))}
        updateInterval={1}
        
    >
      {
      
      ({ remainingTime}) =>{ 
        const hours = Math.floor(remainingTime / 3600)
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
        return(
        
        <View>
        <Text style={{  fontSize: 20,fontFamily:FontFamily.poppinsRegular }}>
            Next mint in
        </Text>
        <Text style={{  fontSize: 20,fontFamily:FontFamily.poppinsRegular,alignContent:'center',textAlign:'center' }}>{`${hours}:${minutes}:${seconds}`}</Text>
        </View>
      )}}
    </CountdownCircleTimer>
    </View>
    <Button  mode="elevated" disabled={mintable} buttonColor='#FEE9EC' textColor='#000000' style={{top:240,left:115}}>Mint</Button>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    left:-10,
    top:-210
  }
});

export default Countdown;