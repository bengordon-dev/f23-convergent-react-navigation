import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Pull(props) {
  const {styles} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pull day</Text>
      <Text style={styles.description}>Back and bis</Text>
      <View style={styles.navButtonHolder}>
        <TouchableOpacity style={styles.navButton} onPress={props.goHome}>
          <Text>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

