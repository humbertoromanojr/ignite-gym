import { useTheme } from 'native-base'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { colors } = useTheme()
  
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700]
  
  return (
    <NavigationContainer theme={theme}>
      <AuthRoutes />
    </NavigationContainer>
  )
}