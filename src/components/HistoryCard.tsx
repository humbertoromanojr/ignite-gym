import { HStack, VStack, Heading, Text } from 'native-base'

export function HistoryCard() {
  return (
    <HStack 
      bg="gray.600" w="full" 
      alignContent="center"
      rounded="md"
      px={5} py={4} mb={3}
    >
      <VStack flex={1} mr={5}>
        <Heading fontSize="md" color="white" textTransform="capitalize" fontFamily="heading">
          Costas
        </Heading>

        <Text color="gray.200" fontSize="lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="sm">
        10:41
      </Text>
    </HStack>
  )
}