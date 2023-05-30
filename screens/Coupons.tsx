import { View ,FlatList,Modal, StyleSheet, Text, Pressable,} from "react-native";
import ConnectedContainer from "../components/ConnectedContainer";
import { Product } from "../components/Product";
import React from "react";
const Coupons = () => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const coups = [
        {
          id: '1',
          name: 'Nike Store Coupon',
          desc: 'Nike store',
          cost: '17',
          discount:'10',
          img:require("../assets/nikee4.jpg")
        },
        {
          id: '2',
          name: 'Adidas Store Coupon',
          desc: 'Adidas store',
          cost: '13',
          discount:'5',
          img:require("../assets/adidas.jpg")
        },
    ]
    return(
        <View style={{backgroundColor:"#FFFFFF"}}>
            <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do you want to purchase this token ?</Text>
            <View style={{ flexDirection:"row" }}>
            <View style={{paddingRight:10}}>
            <Pressable
              style={[styles.button, styles.buttonClose1]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Proceed</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
            <View style={{left:22,top:12}}>
            <ConnectedContainer />
            <View style={{left:-0,top:102,paddingBottom: 100,paddingTop:30}}>
            <FlatList 
            style={{left:10}}
                data={coups}
                renderItem={({ item }) => <Product name={item.name} description={item.desc} cost={item.cost} discount={item.discount+'% Discount Coupon'} img={item.img} onPress={()=>setModalVisible(true)}/>}
                keyExtractor={(item) => item.id}
            />
            </View>
            </View>
        </View>
    );
    
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    buttonClose1: {
        backgroundColor: '#ff6961',
      },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  
export default Coupons;