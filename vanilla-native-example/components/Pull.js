import { Text, TouchableOpacity, View } from 'react-native';
import ExerciseCard from './ExerciseCard';

export default function Pull(props) {
  const {styles} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pull day</Text>
      <Text style={styles.description}>Back and biceps</Text>
      <ExerciseCard
        name="Deadlift"
        sets={3}
        maxSets={4}
        reps={8}
        maxReps={12}
        tip="Remember the list of things I told you"
      />
      <ExerciseCard
        name="Pull-ups"
        sets={3}
        maxSets={4}
        reps={5}
        maxReps={8}
        tip="Use assistance if needed, every rep should look the same"
      />
      <ExerciseCard
        name="Lat pulldown"
        sets={3}
        reps={8}
        maxReps={12}
        tip="Hold 2 seconds at the top, 4 seconds going down"
      />
      <ExerciseCard
        name="Row machine"
        sets={3}
        reps={8}
        maxReps={12}
        tip="Hold 2 seconds at the top, 4 seconds going down"
      />
      <ExerciseCard
        name="Seated DB curls"
        sets={3}
        reps={8}
        maxReps={12}
        tip="Rep counts are per side - alternate sides"
      />
      <ExerciseCard
        name="Hammer curls"
        sets={3}
        reps={8}
        maxReps={12}
        tip="Stand up, keep elbows in front of hips"
      />
     
      <View style={styles.navButtonHolder}>
        <TouchableOpacity style={styles.navButton} onPress={props.goHome}>
          <Text>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

