import { useTheme } from 'native-base'
import { 
  createBottomTabNavigator, 
  BottomTabNavigationProp 
} from '@react-navigation/bottom-tabs'

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

import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'

export function AppRoutes() {
  const { sizes } = useTheme()

  const iconSize = sizes[10]

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen 
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen 
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />

      <Screen 
        name="exercise"
        component={Exercise}
        options={{
          
        }}
      />
    </Navigator>
  )
}