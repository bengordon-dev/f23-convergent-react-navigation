import { Text, TouchableOpacity, View } from 'react-native';

export default function Push(props) {
  const {styles} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Push day</Text>
      <Text style={styles.description}>Today is chest day!</Text>
      <View style={styles.navButtonHolder}>
        <TouchableOpacity style={styles.navButton} onPress={props.goHome}>
          <Text>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}