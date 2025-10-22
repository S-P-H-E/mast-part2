import { Text, View, Image, StyleSheet, ScrollView, Pressable } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"
import { useFoodStore } from "@/lib/constants"
import EditDishForm from "@/components/EditDishForm"
import { useUserStore } from "./login"

export default function Home() {
  const { filter } = useLocalSearchParams()
  const categories = ['starter', 'main course', 'salad', 'dessert'] as const
  const { username } = useUserStore()
  const { foodItems } = useFoodStore()

  // Filter categories based on the filter parameter
  const displayCategories = filter ? [filter as string] : categories

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      {/* Top Gradient */}
      <LinearGradient colors={["transparent", "black"]} start={{ x: 0.5, y: 0.9 }} end={{ x: 0.5, y: 0 }} style={styles.gradientTop} />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View>
            {/* Display username from Zustand store */}
            <Text style={styles.usernameText}>Welcome, {username || 'Guest'}!</Text>
            <Text style={styles.title}>Today's Picks</Text>
          </View>
          <Text style={styles.subtitle}>{foodItems.length}</Text>
        </View>

        {/* ! Remove this section in part 3 */}
        <EditDishForm />

        {displayCategories.map((category) => {
          const categoryItems = foodItems.filter(item => item.category === category)
          const categoryPrice = categoryItems.reduce((total, item) => total + item.price, 0)
          
          return (
            <View key={category} style={styles.categorySection}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</Text>
                <Text style={styles.categoryPrice}>R{categoryPrice}</Text>
              </View>
              
              {categoryItems.map((item) => (
                <View key={item.id} style={styles.foodItem}>
                  <View style={styles.foodImageContainer}>
                    <Image source={{ uri: item.image }} style={styles.itemImage} />
                    <LinearGradient 
                      colors={["transparent", "black"]} 
                      start={{ x: 0, y: 0 }} 
                      end={{ x: 0, y: 0.8 }} 
                      style={styles.imageGradient} 
                    />
                    <View style={styles.foodDetails}>
                      <Text style={styles.courseName}>{item.courseName}</Text>
                      <Text style={styles.description}>{item.description}</Text>
                      <Text style={styles.itemPrice}>R{item.price}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )
        })}
      </ScrollView>

      {/* TODO: Add this back in part 3 */}
      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <Pressable onPress={() => router.push('/filter')} style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filter By Course</Text>
        </Pressable>
        {username == "Chef" && (
          <Pressable onPress={() => router.push('/edit')} style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </Pressable>
        )}
      </View>
      <LinearGradient colors={["transparent", "black"]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 0.6 }} style={styles.bottomGradient} />
       */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
  },
  subtitle: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
  },
  categorySection: {
    marginBottom: 30,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  categoryTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  categoryPrice: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  foodItem: {
    marginBottom: 20,
  },
  foodImageContainer: {
    position: "relative",
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
  },
  itemImage: {
    width: "100%",
    height: "100%",
  },
  imageGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "90%",
  },
  foodDetails: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  courseName: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  description: {
    color: "#818181",
    fontSize: 14,
    marginBottom: 5,
  },
  itemPrice: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
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
    height: "10%",
    zIndex: 10,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    zIndex: 20,
  },
  filterButton: {
    flex: 2,
    backgroundColor: "white",
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  filterButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  dropdownIcon: {
    color: "black",
    fontSize: 12,
  },
  editButton: {
    flex: 1,
    backgroundColor: "#333333",
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  editIcon: {
    color: "white",
    fontSize: 16,
  },
  bottomGradient: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: "18%",
    zIndex: 10,
  },
  usernameContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    zIndex: 20,
  },
  usernameText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});