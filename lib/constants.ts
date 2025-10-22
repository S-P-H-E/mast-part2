export type FoodItem = {
  id: string
  courseName: string
  description: string
  price: number
  category: 'starter' | 'main course' | 'salad' | 'dessert'
  image: any
}

export const foodItems: FoodItem[] = [
  {
    id: '1',
    courseName: 'Bruschetta',
    description: 'Grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.',
    price: 500,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1742'
  },
  {
    id: '2',
    courseName: 'Stuffed Mushrooms',
    description: 'Mushrooms stuffed with cheese, herbs, and breadcrumbs, baked to perfection.',
    price: 500,
    category: 'starter',
    image: 'https://images.unsplash.com/photo-1622268805718-ca073548d4ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1905'
  },
  {
    id: '3',
    courseName: 'Grilled Chicken',
    description: 'Juicy grilled chicken served with a side of roasted vegetables and herbs.',
    price: 1700,
    category: 'main course',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1738'
  },
  {
    id: '4',
    courseName: 'Beef Lasagna',
    description: 'Layers of pasta with rich beef sauce, creamy béchamel, and melted cheese.',
    price: 1700,
    category: 'main course',
    image: 'https://images.unsplash.com/photo-1709429790175-b02bb1b19207?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932'
  },
  {
    id: '5',
    courseName: 'Caesar Salad',
    description: 'Crisp romaine lettuce with parmesan, croutons, and classic Caesar dressing.',
    price: 300,
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1605291535065-e1d52d2b264a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'
  },
  {
    id: '6',
    courseName: 'Greek Salad',
    description: 'Fresh cucumbers, tomatoes, olives, and feta cheese drizzled with olive oil.',
    price: 300,
    category: 'salad',
    image: 'https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1358'
  },
  {
    id: '7',
    courseName: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
    price: 400,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'
  },
  {
    id: '8',
    courseName: 'Fruit Tart',
    description: 'Crispy tart shell filled with custard and topped with fresh seasonal fruits.',
    price: 400,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1570145820404-cf22b115b06f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674'
  },
]

import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useFoodStore = create(
  combine({ foodItems: foodItems }, (set) => ({
    addFoodItem: (item: FoodItem) => set((state) => ({ 
      foodItems: [...state.foodItems, item] 
    })),
  })),
)