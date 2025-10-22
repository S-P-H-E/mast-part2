import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"
import { Pressable } from "react-native";

export default function Filter() {
    const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>

      <View style={styles.content}>
        <Text style={styles.title}>Filter</Text>
        <Text style={styles.subtitle}>Click the category you want to filter by</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.categoryButton} onPress={() => router.push('/home?filter=starter')}>
            <Text style={styles.categoryButtonText}>Starter</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryButton} onPress={() => router.push('/home?filter=main course')}>
            <Text style={styles.categoryButtonText}>Main Course</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryButton} onPress={() => router.push('/home?filter=salad')}>
            <Text style={styles.categoryButtonText}>Salad</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryButton} onPress={() => router.push('/home?filter=dessert')}>
            <Text style={styles.categoryButtonText}>Dessert</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomButtonContainer}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
          
          <Pressable onPress={() => router.push('/home')} style={styles.showAllButton}>
            <Text style={styles.showAllButtonText}>Show All</Text>
          </Pressable>
        </View>
      </View>

      {/* Top Gradient */}
      <LinearGradient colors={["transparent", "black"]} start={{ x: 0.5, y: 0.9 }} end={{ x: 0.5, y: 0 }} style={styles.gradientTop} />
      {/* Bottom Gradient */}
      <LinearGradient colors={["black", "transparent"]} start={{ x: 0.5, y: 0.4 }} end={{ x: 0.5, y: 0 }} style={styles.gradient} />

      <Image source={require('@/assets/images/01.jpg')} style={styles.backgroundImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 20,
    backgroundColor: "transparent",
    paddingHorizontal: 40,
    paddingBottom: 64,
    width: "100%",
    maxWidth: 500,
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "600",
    marginBottom: 16,
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 32,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 32,
  },
  categoryButton: {
    backgroundColor: "#333333",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
    width: "100%",
  },
  categoryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  bottomButtonContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
  backButton: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flex: 2,
  },
  backButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  showAllButton: {
    backgroundColor: "#333333",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flex: 1,
  },
  showAllButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  gradientTop: {
    position: "absolute",
    width: "100%",
    height: "20%",
    zIndex: 10,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    transform: [{ translateY: -300 }],
  },
});