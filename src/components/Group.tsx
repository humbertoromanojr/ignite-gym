import { Text } from 'native-base'

type Props = {
  name: string;
}

export function Group({ name }: Props) {
  return (
    <Text>{name}</Text>
  )
}