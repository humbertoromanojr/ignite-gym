import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { Home } from '@screens/Home'
import { History } from '@screens/History'
import { Profile } from '@screens/Profile'
import { Exercise } from '@screens/Exercise'

type AppRoutes = {
  Home: undefined
  Profile: undefined
  History: undefined
  exercise: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="history"
        component={History}
      />

      <Screen 
        name="profile"
        component={Profile}
      />

      <Screen 
        name="exercise"
        component={Exercise}
      />
    </Navigator>
  )
}