import { Text, TouchableOpacity, View } from 'react-native';
import ExerciseCard from './ExerciseCard';

export default function Legs(props) {
  const {styles} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leg day</Text>
      <Text style={styles.description}>It hurts sm</Text>
      <ExerciseCard
        name="Barbell squat"
        sets={3}
        maxSets={4}
        reps={5}
        tip="Gotta go low"
      />
      <ExerciseCard
        name="Leg extension"
        sets={3}
        reps={8}
        maxReps={12}
      />
      <ExerciseCard
        name="Leg curl"
        sets={3}
        reps={8}
        maxReps={12}
      />
      <ExerciseCard
        name="Calf raise"
        sets={3}
        reps={15}
        maxReps={20}
      />
      <ExerciseCard
        name="Leg press"
        sets={3}
        reps={8}
        maxReps={12}
        tip="Add hundreds upon hundreds of pounds and have a tiny ROM and terrible form"
      />
    
     
      <View style={styles.navButtonHolder}>
        <TouchableOpacity style={styles.navButton} onPress={props.goHome}>
          <Text>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

