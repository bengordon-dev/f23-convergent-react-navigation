import { Text, View, StyleSheet } from 'react-native';

export default function ExerciseCard(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{props.name}</Text>
      <Text>{props.sets}{props.maxSets ? `-${props.maxSets}` : ""} sets, {props.reps}{props.maxReps ? `-${props.maxReps}` : ""} reps</Text>
      {props.tip && <Text>{props.tip}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "95%",
    padding: 5,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: "#ddd"
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
})