import { Text, View, Image, StyleSheet, TouchableOpacity, Pressable, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"
import EditDishForm from "@/components/EditDishForm"
import { foodItems } from "@/lib/constants"

export default function Edit() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Edit Menu Items</Text>
        
        <EditDishForm />

        {/* Remove Items Section */}
        <View style={styles.removeSection}>
          <Text style={styles.sectionTitle}>Remove Items</Text>
          
          {foodItems.map((item) => (
            <View key={item.id} style={styles.itemRow}>
              <Text style={styles.itemName}>{item.courseName}</Text>
              <TouchableOpacity style={styles.removeButton}>
                <Text style={styles.removeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.bottomButtonContainer}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </Pressable>
          
          <Pressable onPress={() => {}} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Top Gradient */}
      <LinearGradient colors={["transparent", "black"]} start={{ x: 0.5, y: 0.9 }} end={{ x: 0.5, y: 0 }} style={styles.gradientTop} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    paddingHorizontal: 40,
    paddingTop: 80,
    paddingBottom: 100,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 32,
    alignSelf: "flex-start",
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  removeSection: {
    width: "100%",
    marginBottom: 32,
  },
  itemRow: {
    backgroundColor: "#333333",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  removeButton: {
    backgroundColor: "#555555",
    borderRadius: 6,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  bottomButtonContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
  backButton: {
    backgroundColor: "#333333",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flex: 1,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flex: 2,
  },
  saveButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  gradientTop: {
    position: "absolute",
    width: "100%",
    height: "20%",
    zIndex: 10,
  },
})
