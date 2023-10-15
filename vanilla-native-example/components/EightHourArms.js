import { Text, TouchableOpacity, View } from 'react-native';
import ExerciseCard from './ExerciseCard';


export default function EightHourArms(props) {
  const {styles} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>8 hour arm workout</Text>
      <Text style={styles.description}>It's basically an eight hour arm workout, and it's made up of 16 mini-workouts
      every half an hour for 8 hours straight</Text>
      <ExerciseCard
        name="Skull Crushers"
        sets={32}
        reps={10}
        tip="Be careful not to hurt your elbows"
      />
      <ExerciseCard
        name="Barbell Bicep Curl"
        sets={32}
        reps={10}
      />
      <ExerciseCard
        name="Single Arm Dumbbell Tricep Extension"
        sets={32}
        reps={15}
      />
      <ExerciseCard
        name="Hammer Curls"
        sets={32}
        reps={15}
      />
      <Text style={styles.description}>Alternate between Workout A (4 sets of each of the first 2 exercices) 
      and workout B (4 sets of each of the second 2). Each mini-workout should take half an hour</Text>
      <Text style={styles.description}>After each mini-workout you should drink a protein shake. You must make 16 protein
      shakes before attempting this workout</Text>
     
      <View style={styles.navButtonHolder}>
        <TouchableOpacity style={styles.navButton} onPress={props.goHome}>
          <Text>Go Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
