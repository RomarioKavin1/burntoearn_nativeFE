import {View, FlatList, Modal, StyleSheet, Text, Pressable} from 'react-native';
import ConnectedContainer from '../components/ConnectedContainer';
import {Product} from '../components/Product';
import React, {useEffect} from 'react';
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from '@thirdweb-dev/react-native';
const Coupons = () => {
  const address = useAddress();
  const [coups, setCoups] = React.useState([
    {
      id: '0',
      name: 'Nike Store Coupon',
      desc: 'Nike store',
      cost: '17',
      discount: '10',
      img: require('../assets/nikee4.jpg'),
    },
    // {
    //   id: '1',
    //   name: 'Adidas Store Coupon',
    //   desc: 'Adidas store',
    //   cost: '13',
    //   discount: '5',
    //   img: require('../assets/adidas.jpg'),
    // },
  ]);
  const {contract: burnToEarnContract, isLoading: isLoadingBurnToEarnContract} =
    useContract('0x995A39d59484676643c631a785726534ce3CE659');
  const {
    contract: buffCouponsContract,
    isLoading: isLoadingBuffCouponsContract,
  } = useContract('0xceB4984e186244885822202b22AC155E3043F925');
  const {data: balance, isLoading: isLoadingBalance} = useContractRead(
    burnToEarnContract,
    'balanceOf',
    [address != null ? address : ''],
  );
  const {data: tokenURIs, isLoading} = useContractRead(
    buffCouponsContract,
    'getTokenURIs',
    [],
  );
  const {mutateAsync: claimCoupons, isLoading: isLoadingClaimCoupons} =
    useContractWrite(burnToEarnContract, 'claimCoupons');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedCoupon, setSelectedCoupon] = React.useState(0);
  useEffect(() => {
    if (tokenURIs != undefined && tokenURIs.length > 0) {
      // console.log('TOKEN URIS');
      // console.log(tokenURIs);
      (async function () {
        try {
          let coupons = [];
          tokenURIs.forEach(async (tokenURI: string, index: number) => {
            const response = await fetch(tokenURI);
            const json = await response.json();
            const newImageUrl = json.image.replace(
              'ipfs://',
              'https://ipfs.io/ipfs/',
            );
            coupons.push({
              id: index.toString(),
              name: json.name,
              img: {uri: newImageUrl},
              cost: json.attributes[0].value,
              discount: json.attributes[1].value,
              desc: json.description,
            });
            if (index == tokenURIs.length - 1) {
              setCoups(coupons);
            }
          });

          // setCoups(coupons);
        } catch (e) {
          console.log('ERROR OCCURED WHEN FETCHING FROM IPFS');
          console.log(e);
        }
      })();
    }
  }, [tokenURIs]);
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Do you want to purchase this token ?
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingRight: 10}}>
                <Pressable
                  style={[styles.button, styles.buttonClose1]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                disabled={balance < coups[selectedCoupon].cost}
                onPress={async () => {
                  try {
                    await claimCoupons({
                      args: [
                        '0xceB4984e186244885822202b22AC155E3043F925',
                        selectedCoupon,
                      ],
                    });
                  } catch (e) {}

                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Proceed</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{left: 22, top: 12}}>
        <ConnectedContainer />
        {coups.length > 0 && (
          <View
            style={{left: -0, top: 102, paddingBottom: 100, paddingTop: 30}}>
            <FlatList
              style={{left: 10}}
              data={coups}
              renderItem={({item}) => (
                <Product
                  name={item.name}
                  description={item.desc}
                  cost={item.cost}
                  discount={item.discount + '% Discount Coupon'}
                  img={item.img}
                  onPress={() => {
                    setModalVisible(true);
                    setSelectedCoupon(Number(item.id));
                  }}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        )}
      </View>
    </View>
  );
};
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
