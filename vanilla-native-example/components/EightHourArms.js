import { Text, TouchableOpacity, View } from 'react-native';


export default function EightHourArms(props) {
  const {styles} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>8 hour arm workout</Text>
      <Text style={styles.description}>Yeah so it's basically an eight hour arm workout</Text>
      <View style={styles.navButtonHolder}>
        <TouchableOpacity style={styles.navButton} onPress={props.goHome}>
          <Text>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
