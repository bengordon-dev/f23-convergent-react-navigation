import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home(props) {
  return (
    <View style={props.styles.container}>
      <Text style={props.styles.title}>Workout App</Text>
      <TouchableOpacity 
        style={[styles.pageButton, {backgroundColor: "#faa"}]} 
        onPress={() => props.setPage("push")}>
        <Text style={styles.pageButtonText}>Push</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.pageButton, {backgroundColor: "#dda"}]} 
        onPress={() => props.setPage("pull")}>
        <Text style={styles.pageButtonText}>Pull</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.pageButton, {backgroundColor: "#aaf"}]} 
        onPress={() => props.setPage("arms")}>
        <Text style={styles.pageButtonText}>Legs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageButton: {
    padding: 16,
    borderRadius: 32,
    minWidth: 120,
    alignItems: "center",
    marginTop: "20%"
  },
  pageButtonText: {
    fontSize: 20,
    fontWeight: "600"
  }

})