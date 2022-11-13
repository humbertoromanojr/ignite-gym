import { Spinner, Center } from 'native-base'

export function Loading() {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner size="lg" color="green.500" />
    </Center>
  )
}