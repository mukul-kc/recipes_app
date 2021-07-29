import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

// Categories, meals in Categories and meal details all form part of one stack 

// All components in navigator automatically get a special prop passed to them

// NOTE: diff between push and navigate
// If you try to add the current screen to the stack, it will not work with navigate
// While you can do it with push

// Why push the same screen? Some apps like GDrive, you go from one folder to another, Screen is the SAME, just the content has changed


// pop() is also used when you want to do some stuff in a screen and upon completing/saving move away from the screen. that's where you use pop()
// goBack() is an alternative

// But pop() is only available in stack navigator

// Additionally popToTop() takes us back to the root screen

// replace() replaces the screen completely. Example use : When user logins you don't want the user to go back to login screen.


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoriesMealsScreen,
    MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);