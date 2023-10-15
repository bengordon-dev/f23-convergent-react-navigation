import { Text, TouchableOpacity, View } from 'react-native';
import ExerciseCard from './ExerciseCard';

export default function Push(props) {
  const {styles} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Push day</Text>
      <Text style={styles.description}>First day of the week</Text>
      <ExerciseCard
        name="Bench Press"
        sets={3}
        maxSets={4}
        reps={5}
        maxReps={8}
        tip="Arch back, go slow when descending"
      />
      <ExerciseCard
        name="Incline Bench Press"
        sets={3}
        reps={5}
        tip="30 degree bench angle, less weight than flat press"
      />
      <ExerciseCard
        name="Shoulder DB press"
        sets={3}
        reps={8}
        maxReps={12}
        tip="60-75 degree bench angle"
      />
      <ExerciseCard
        name="Lateral raise"
        sets={3}
        reps={8}
        maxReps={12}
        tip="Very small dumbbell"
      />
      <ExerciseCard
        name="Dips"
        sets={3}
        reps={8}
        maxReps={12}
        tip="90 degree angle"
      />
      <ExerciseCard
        name="Overhead tricep extension"
        sets={3}
        reps={8}
        maxReps={12}
        tip="Need a low-backed chair and one dumbbell, do not flare out elbows"
      />

      <View style={styles.navButtonHolder}>
        <TouchableOpacity style={styles.navButton} onPress={props.goHome}>
          <Text>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}