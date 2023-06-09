import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { Avatar} from "@rneui/base";
import AsyncStorage from '@react-native-async-storage/async-storage';
const TodaysInformationContainer = () => {
  const navigation = useNavigation();
  const [stepCount, setStepCount] = React.useState<number | null>(null);
  const [caloriesBurned, setCaloriesBurned] = React.useState<number | null>(null);
  const [heartRate, setHeartRate] = React.useState<number | null>(null);
  
  React.useEffect(() => {
    const getAccessToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        console.log('Access token retrieved:', accessToken);
        return accessToken;
      } catch (error) {
        console.error('Error retrieving access token:', error);
        return null;
      }
    };
    // Store the access token
    const storesteps = async (steps: string) => {
      if(steps!==null){
      try {

        await AsyncStorage.setItem('steps', steps);
        console.log('steps stored successfully.');
      } catch (error) {
        console.error('Error steps:', error);
      }}
    };
    const storeheart = async (heart: string) => {
      if(heart!==null){
      try {

        await AsyncStorage.setItem('heartpnts', heart);
        console.log('heartpnts stored successfully.');
      } catch (error) {
        console.error('Error heartpnts:', error);
      }}
    };
    const storecal = async (cal: string) => {
      if(cal!==null){
      try {

        await AsyncStorage.setItem('calories', cal);
        console.log('cals stored successfully.');
      } catch (error) {
        console.error('Error cals:', error);
      }}
    };
    const fetchDataFromGoogleFit = async () => {
      const accessToken = await getAccessToken();
      if (accessToken) {
        try {
          const endTimeMillis = Date.now();
          const startTimeMillis = endTimeMillis - 24 * 60 * 60 * 1000; // 24 hours in milliseconds

          const requestBody = {
            aggregateBy: [
              {
                dataTypeName: 'com.google.step_count.delta',
                dataSourceId: 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps',
              },
            ],
            bucketByTime: { durationMillis: 86400000 },
            startTimeMillis,
            endTimeMillis,
          };
          const stepCountResponse = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });

          if (stepCountResponse.ok) {
            const stepCountData = await stepCountResponse.json();
            // Check if the bucket array exists and is not empty
            if (stepCountData.bucket && stepCountData.bucket.length > 0) {
              const steps = stepCountData.bucket.reduce((totalSteps: number, bucket: any) => {
                return totalSteps + bucket.dataset[0].point.reduce((bucketSteps: number, point: any) => {
                  return bucketSteps + point.value[0].intVal;
                }, 0);
              }, 0);
              setStepCount(steps);
              storesteps(steps.toString());
            } else {
              console.log('No step count data available for the specified time range.');
              setStepCount(0);
            }
          } else {
            console.error('Error fetching step count:', stepCountResponse.status);
          }
          const requestBody2 = {
            aggregateBy:[
            {
              dataTypeName: 'com.google.calories.expended',
              dataSourceId: 'derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended',
            }],
            bucketByTime: { durationMillis: 86400000 },
            startTimeMillis,
            endTimeMillis,
            
          }
    
          const CalResponse = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody2),
          });
          if (CalResponse.ok) {
            const CalData = await CalResponse.json();
            // Check if the bucket array exists and is not empty
            if (CalData.bucket && CalData.bucket.length > 0) {
              const calories = CalData.bucket.reduce((totalSteps: number, bucket: any) => {
                return totalSteps + bucket.dataset[0].point.reduce((bucketSteps: number, point: any) => {
                  return bucketSteps + point.value[0].fpVal;
                }, 0);
              }, 0);
              setCaloriesBurned(Math.round(calories));
              storecal(Math.round(calories).toString());
            } else {
              console.log('No calorie count data available for the specified time range.');
              setCaloriesBurned(0);
            }
          } else {
            console.error('Error fetching calorie count:', stepCountResponse.status);
          }
          const requestBody3 = {
            aggregateBy:[
            {
              dataTypeName: "com.google.heart_minutes",
              dataSourceId: "derived:com.google.heart_minutes:com.google.android.gms:merge_heart_minutes"
            }],
            bucketByTime: { durationMillis: 86400000 },
            startTimeMillis,
            endTimeMillis,
          }
          const HeartResponse = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody3),
          });
          if (HeartResponse.ok) {
            const HeartData = await HeartResponse.json();
            // Check if the bucket array exists and is not empty
            if (HeartData.bucket && HeartData.bucket.length > 0) {
              const bpm = HeartData.bucket.reduce((totalSteps: number, bucket: any) => {
                return totalSteps + bucket.dataset[0].point.reduce((bucketSteps: number, point: any) => {
                  return bucketSteps + point.value[0].fpVal;
                }, 0);
              }, 0);
              setHeartRate(bpm);
              storeheart(bpm.toString());
            } else {
              console.log('No heart count data available for the specified time range.');
              setHeartRate(0);
            }
          } else {
            console.error('Error fetching heart count:', HeartResponse.status);
          }
        } catch (error) {
          console.error('Error fetching data from Google Fit:', error);
        }
      }
      
    };
    fetchDataFromGoogleFit();
    
  }, []);

  return (
    <View style={[styles.todaysInformation, styles.itemsPosition]}>
      <View style={[styles.items, styles.itemsPosition]}>
        <View style={[styles.calories, styles.stepsPosition]}>
          <View style={[styles.base, styles.baseBorder]} />
          <Text style={[styles.kcal, styles.textPosition]}>Kcal</Text>
          <Text style={[styles.text, styles.textTypo]}>{caloriesBurned || 'Loading...'}</Text>
          <View style={[styles.title, styles.titlePosition1]}>
            <Image
              style={[styles.flameIcon, styles.iconLayout]}
              source={require("../assets/flame.png")}
            />
            <Text style={[styles.calories1, styles.steps2Layout]}>
              Calories
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.steps, styles.stepsPosition]}
          onPress={() => navigation.navigate("CaloriesDetails")}
        >
          <View style={[styles.base, styles.baseBorder]} />
          <Text style={[styles.kcal, styles.textPosition]}>Steps</Text>
          <Text style={[styles.text, styles.textTypo]}>{stepCount || 'Loading...'}</Text>
          <View style={[styles.title1, styles.titlePosition]}>
            <Image
              style={[styles.icon, styles.iconPosition]}
              source={require("../assets/icon1.png")}
            />
            <Text style={[styles.steps2, styles.steps2Layout]}>Steps</Text>
          </View>
        </Pressable>
        <View style={[styles.heart, styles.iconPosition]}>
          <View style={[styles.base2, styles.baseBorder]} />
          <Image
            style={[styles.chartIcon, styles.iconLayout]}
            source={require("../assets/chart.png")}
          />
          <Text style={[styles.bpm, styles.textPosition]}>Points</Text>
          <Text style={[styles.text2, styles.textTypo]}>{heartRate || 'Loading...'}</Text>
          <View style={[styles.title2, styles.titlePosition]}>
            <Image
              style={[styles.icon, styles.iconPosition]}
              source={require("../assets/icon2.png")}
            />
            <Text style={[styles.steps2, styles.steps2Layout]}>Heart Points</Text>
          </View>
        </View>
      </View>
      <View style={[styles.title3, styles.itemsPosition]}>
        <Text style={[styles.july2021, styles.july2021Position]}>
          July, 2021
        </Text>
        <Text style={[styles.todaysInformation1, styles.july2021Position]}>
          Today's Information
        </Text>
        <View style={{left:260,top:0}}>
        <Avatar
          size={64}
          rounded
          icon={{ name:'calendar',
          type:'antdesign',
          color:'#FF6079' }}
          containerStyle={{ backgroundColor: '#FFFFFF' ,borderColor:'#7F7F7F',borderWidth:0.2}}
        />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemsPosition: {
    left: "0%",
    width: "100%",
    right: "0%",
    position: "absolute",
  },
  stepsPosition: {
    right: "52.29%",
    height: "46.83%",
    width: "47.71%",
    left: "0%",
    position: "absolute",
  },
  baseBorder: {
    opacity: 0.2,
    borderWidth: 1.5,
    borderColor: "#bfbfbf",
    borderStyle: "solid",
    borderRadius: Border.br_5xl,
    left: "-0.48%",
    right: "-0.48%",
    width: "100.96%",
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    top: "50%",
    width: "79.49%",
    left: "10.26%",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headline04_size,
  },
  titlePosition1: {
    bottom: "66.1%",
    top: "13.56%",
    height: "20.34%",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  steps2Layout: {
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
  },
  titlePosition: {
    right: "10.26%",
    left: "10.26%",
    width: "79.49%",
    position: "absolute",
  },
  iconPosition: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  july2021Position: {
    width: "87.77%",
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  base: {
    height: "101.27%",
    top: "-0.64%",
    bottom: "-0.64%",
  },
  kcal: {
    marginTop: 27,
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
    lineHeight: 16,
    fontSize: FontSize.headline07_size,
    textAlign: "left",
    top: "50%",
    width: "79.49%",
  },
  text: {
    marginTop: -3,
    textAlign: "left",
    top: "50%",
    width: "79.49%",
    left: "10.26%",
    position: "absolute",
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headline04_size,
  },
  flameIcon: {
    height: "83.33%",
    width: "13.33%",
    top: "8.33%",
    bottom: "8.33%",
    left: "86.67%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    maxWidth: "100%",
  },
  calories1: {
    width: "70%",
    marginTop: -12,
    fontSize: FontSize.headline06_size,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  title: {
    width: "76.92%",
    right: "12.82%",
    left: "10.26%",
    bottom: "66.1%",
    top: "13.56%",
    height: "20.34%",
    position: "absolute",
  },
  calories: {
    bottom: "53.17%",
    top: "0%",
  },
  icon: {
    width: "19.35%",
    left: "80.65%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  steps2: {
    width: "67.74%",
    marginTop: -12,
    fontSize: FontSize.headline06_size,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  title1: {
    bottom: "66.1%",
    top: "13.56%",
    height: "20.34%",
  },
  steps: {
    top: "53.17%",
    bottom: "0%",
  },
  base2: {
    height: "100.6%",
    top: "-0.3%",
    bottom: "-0.3%",
  },
  chartIcon: {
    height: "77.78%",
    top: "22.22%",
    left: "-0.48%",
    right: "-0.48%",
    width: "100.96%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
  },
  bpm: {
    marginTop: 94,
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
    lineHeight: 16,
    fontSize: FontSize.headline07_size,
    textAlign: "left",
    top: "50%",
    width: "79.49%",
  },
  text2: {
    marginTop: 64,
    textAlign: "left",
    top: "50%",
    width: "79.49%",
    left: "10.26%",
    position: "absolute",
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headline04_size,
  },
  title2: {
    height: "9.52%",
    top: "6.35%",
    bottom: "84.13%",
  },
  heart: {
    left: "52.29%",
    width: "47.71%",
    height: "100%",
  },
  items: {
    height: "75.9%",
    top: "24.1%",
    bottom: "0%",
  },
  icon2: {
    height: "42.86%",
    width: "7.34%",
    top: "3.57%",
    bottom: "53.57%",
    left: "92.66%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    maxWidth: "100%",
  },
  july2021: {
    marginTop: 4,
    lineHeight: 24,
    fontSize: FontSize.headline06_size,
    color: Color.gray_100,
    fontFamily: FontFamily.paragraph03,
  },
  todaysInformation1: {
    marginTop: -28,
    color: Color.colorsBlack100,
    fontFamily: FontFamily.headline06,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headline04_size,
  },
  title3: {
    height: "16.87%",
    bottom: "83.13%",
    top: "0%",
  },
  todaysInformation: {
    height: "69.17%",
    bottom: "30.83%",
    top: "0%",
  },
});

export default TodaysInformationContainer;
