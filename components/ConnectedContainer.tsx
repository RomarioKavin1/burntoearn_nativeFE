import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Image} from 'react-native';
import {FontFamily, FontSize, Border, Color} from '../GlobalStyles';
import {Avatar, Badge, Tooltip, TooltipProps, lightColors} from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useAddress,
  useContract,
  useContractRead,
} from '@thirdweb-dev/react-native';
const ControlledTooltip: React.FC<TooltipProps> = props => {
  const [open, setOpen] = React.useState(false);
  return (
    <Tooltip
      visible={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      {...props}
    />
  );
};

const ConnectedContainer = () => {
  const address = useAddress();
  const {contract, isLoading: isLoadingContract} = useContract(
    '0x5708A9ef5ED5e8A494aC96c2b8D88F44b02aCB13',
  );
  const {data: balance, isLoading: isLoadingBalance} = useContractRead(
    contract,
    'balanceOf',
    [address != null ? address : ''],
  );
  const [userName, setUserName] = React.useState<string | null>(null);
  React.useEffect(() => {
    console.log('Balance: ', JSON.stringify(balance));
  }, [balance]);
  React.useEffect(() => {
    // Retrieve the access token
    const getAccessToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        console.log('Access token retrieved1:', accessToken);
        return accessToken;
      } catch (error) {
        console.error('Error retrieving access token1:', error);
        return null;
      }
    };

    // Make a request to retrieve user information
    const getUserInfo = async () => {
      const accessToken = await getAccessToken();
      if (accessToken) {
        try {
          const response = await fetch(
            'https://www.googleapis.com/userinfo/v2/me',
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },
          );

          if (response.ok) {
            const data = await response.json();
            // Extract user name from the data
            const {name} = data;
            setUserName(name);
          } else {
            console.error('Error fetching user info:', response.status);
          }
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      }
    };

    getUserInfo();
  }, []);
  return (
    <View style={styles.tokenbar}>
      <View style={[]} />
      <View style={{}}>
        <View style={{right: 20, top: 50}}>
          <Text style={[styles.thursday08July, styles.helloLinhPosition]}>
            Thursday, 08 July
          </Text>
          {/* {isLoading ? <Text style={[styles.helloLinh, styles.helloLinhPosition]}>Loading...</Text> : 
      ( 
        <Text style={[styles.helloLinh, styles.helloLinhPosition]}>Hello {data.name}</Text>
      )} */}
          <Text style={[styles.helloLinh, styles.helloLinhPosition]}>
            {userName ? `Welcome, ${userName}` : 'Loading user information...'}
          </Text>
        </View>
      </View>
      <View style={[styles.off]}>
        <ControlledTooltip
          popover={<Text>{address}</Text>}
          width={400}
          backgroundColor={lightColors.grey5}>
          <Avatar
            rounded
            source={require('../assets/metamask-fox-21.png')}
            size="medium"
          />
          <Badge
            status="success"
            containerStyle={{position: 'absolute', top: 5, left: 40}}
          />
        </ControlledTooltip>
      </View>
      <View>
        <View style={[styles.base, styles.baseBorder]}></View>
        <Image
          style={{width: 50, height: 50, right: -195, top: -40}}
          source={require('../assets/tokenpng.png')}
        />
        <Text
          style={{
            left: 212,
            bottom: 30,
            fontSize: FontSize.headline06_size,
            color: Color.colorsBlack100,
            fontFamily: FontFamily.headline06,
          }}>
          {isLoadingBalance ? '...' : balance.toString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  token: {
    height: 20,
    width: 20,
  },
  tokenbarBorder: {
    borderColor: '#f5f4f4',
    borderStyle: 'solid',
    position: 'absolute',
  },
  off: {
    left: -80,
    width: 10,
    top: 30,
  },
  tokenLayout: {
    width: 20,
    position: 'absolute',
  },

  connected1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.headline06,
    fontWeight: '700',
    lineHeight: 28,
    fontSize: FontSize.size_6xs,
    position: 'absolute',
  },
  base: {
    height: '190.27%',
  },
  baseBorder: {
    opacity: 0.2,
    borderWidth: 1.9,
    borderColor: '#bfbfbf',
    borderStyle: 'solid',
    borderRadius: Border.br_5xl,
    left: '70.48%',
    width: '30.96%',
    position: 'absolute',
    top: -50,
    height: '150.27%',
  },
  connectedLayout: {
    width: 130,
    position: 'absolute',
  },
  tokenbarChild: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorsWhite100,
    borderWidth: 5,
    height: 44,
    left: 0,
    top: 0,
    width: 254,
  },
  metamaskFox2Icon: {
    left: 16,
    height: 20,
    width: 20,
    top: 15,
  },
  walletAddress: {
    marginTop: -19.5,
    width: '72.44%',
    left: '13.78%',
    height: 28,
    color: Color.colorsBlack100,
    top: '340%',
    textAlign: 'left',
    fontFamily: FontFamily.headline06,
    fontWeight: '700',
    fontSize: 10,
  },
  tokenbarItem: {
    top: -1,
    left: 207,
    borderRightWidth: 5,
    width: 5,
    height: 49,
  },
  tokenChild: {
    height: 20,
    left: 0,
    top: 0,
  },
  strengthIcon1: {
    top: 3,
    left: 4,
    width: 8,
    height: 9,
    position: 'absolute',
  },
  tokenNumbers: {
    marginTop: -8,
    width: '62.5%',
    left: '18.75%',
    height: 23,
    color: Color.colorsBlack100,
    top: '50%',
    textAlign: 'left',
    fontFamily: FontFamily.headline06,
    fontWeight: '700',
    lineHeight: 28,
    fontSize: FontSize.size_6xs,
  },
  connectedChild: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.palegreen,
    height: 12,
    top: 9,
    left: -60,
  },
  connected1: {
    left: -10,
    color: Color.black,
    width: 48,
    // height: 12,
    textAlign: 'left',
    fontFamily: FontFamily.headline06,
    fontWeight: '700',
    lineHeight: 10,
    fontSize: FontSize.size_mid,
  },
  connected: {
    top: 16,
    left: 83,
    height: 20,
  },
  tokenbar: {
    top: 15,
    left: 97,
    height: 45,
    width: 254,
    position: 'absolute',
  },
  avatarLayout: {
    height: 56,
    width: 56,
    top: 3,
    position: 'absolute',
  },
  helloLinhPosition: {
    textAlign: 'left',
    left: '0%',
    width: '100%',
    top: '50%',
    position: 'absolute',
  },
  buttonIcon: {
    left: 271,
  },
  thursday08July: {
    marginTop: -2,
    fontSize: FontSize.headline04_size,
    lineHeight: 28,
    fontWeight: '700',
    fontFamily: FontFamily.headline06,
    color: Color.colorsBlack100,
  },
  helloLinh: {
    marginTop: -26,
    fontSize: FontSize.headline06_size,
    lineHeight: 24,
    fontFamily: FontFamily.paragraph03,
    color: Color.gray_100,
  },
  title: {
    marginTop: -25.5,
    width: '51.07%',
    right: '24.46%',
    left: '24.46%',
    height: 52,
    top: '50%',
    position: 'absolute',
  },
  avatar6Icon: {
    height: '100%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    display: 'none',
    left: '0%',
    width: '100%',
    position: 'absolute',
  },
  avatar: {
    left: 0,
  },
  icon1: {
    top: 0,
    left: 9,
    width: 59,
    height: 59,
    position: 'absolute',
  },
  icon: {
    top: 45,
    left: 47,
    width: 16,
    height: 16,
    position: 'absolute',
  },
  header: {
    top: 76,
    left: 23,
    width: 327,
    height: 61,
    position: 'absolute',
  },
});

export default ConnectedContainer;
