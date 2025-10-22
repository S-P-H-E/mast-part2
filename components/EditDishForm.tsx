import { Text, View, StyleSheet, TouchableOpacity, Pressable, TextInput, Modal, Alert } from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { useFoodStore, FoodItem } from "@/lib/constants"

export default function EditDishForm() {
  const categories = ['starter', 'main course', 'salad', 'dessert'] as const
  const [selectedCategory, setSelectedCategory] = useState('Select Course')
  const [showDropdown, setShowDropdown] = useState(false)
  const [courseName, setCourseName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const router = useRouter()
  const { addFoodItem } = useFoodStore()

  const handleAddDish = () => {
    // Validation
    if (!courseName.trim()) {
      alert('Please enter a dish name')
      return
    }
    if (!description.trim()) {
      alert('Please enter a description')
      return
    }
    if (selectedCategory === 'Select Course') {
      alert('Please select a course category')
      return
    }
    if (!price.trim()) {
      alert('Please enter a price')
      return
    }
    
    const priceNumber = parseFloat(price)
    if (isNaN(priceNumber) || priceNumber <= 0) {
      alert('Please enter a valid price')
      return
    }

    // Create new food item
    const newFoodItem: FoodItem = {
      id: Date.now().toString(),
      courseName: courseName.trim(),
      description: description.trim(),
      price: priceNumber,
      category: selectedCategory as 'starter' | 'main course' | 'salad' | 'dessert',
      image: image.trim() || 'https://images.unsplash.com/photo-1546554137-f86b9593a222?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000' // placeholder image
    }

    // Add to store
    addFoodItem(newFoodItem)

    // Clear form
    setCourseName('')
    setDescription('')
    setSelectedCategory('Select Course')
    setPrice('')
    setImage('')

    alert('Dish added successfully!')
  }

  return (
    <View style={styles.container}>
      {/* Create New Dish Section */}
      <View style={styles.createSection}>
        <Text style={styles.sectionTitle}>Create New Dish</Text>
        
        <TextInput style={styles.input} placeholder="Enter the dish name" placeholderTextColor="#A0A0A0" value={courseName} onChangeText={setCourseName} />
        <TextInput style={styles.input} placeholder="Enter the description" placeholderTextColor="#A0A0A0" value={description} onChangeText={setDescription} />
        
        <TouchableOpacity style={styles.dropdown} onPress={() => setShowDropdown(true)}>
          <Text style={selectedCategory === 'Select Course' ? styles.dropdownText : styles.dropdownTextSelected}>{selectedCategory}</Text>
          <Text style={styles.dropdownIcon}>▼</Text>
        </TouchableOpacity>
        
        <TextInput style={styles.input} placeholder="Enter the price" placeholderTextColor="#A0A0A0" value={price} onChangeText={setPrice} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Enter image URL (optional)" placeholderTextColor="#A0A0A0" value={image} onChangeText={setImage} />
      </View>

      <Pressable style={styles.addButton} onPress={handleAddDish}>
        <Text style={styles.addButtonText}>Add</Text>
      </Pressable>


      {/* Dropdown Modal */}
      <Modal visible={showDropdown} transparent animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setShowDropdown(false)}>
          <View style={styles.dropdownModal}>
            <Text style={styles.modalTitle}>Select Course</Text>
            {categories.map((category) => (
              <TouchableOpacity 
                key={category} 
                style={styles.dropdownOption}
                onPress={() => {
                  setSelectedCategory(category)
                  setShowDropdown(false)
                }}
              >
                <Text style={styles.dropdownOptionText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  createSection: {
    backgroundColor: "#333333",
    borderRadius: 12,
    padding: 20,
    width: "100%",
    marginBottom: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#2A2A2A",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: "white",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#555555",
    marginBottom: 16,
  },
  dropdown: {
    backgroundColor: "#2A2A2A",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#555555",
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    color: "#A0A0A0",
    fontSize: 16,
  },
  dropdownTextSelected: {
    color: "white",
    fontSize: 16,
  },
  dropdownIcon: {
    color: "#A0A0A0",
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownModal: {
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    maxWidth: 300,
  },
  modalTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  dropdownOption: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#555555",
  },
  dropdownOptionText: {
    color: "white",
    fontSize: 16,
  },
  addButton: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
})
