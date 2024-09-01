import { Container } from "./styles"

export function Textarea({ value, ...nest }) {
  return (
    <Container {...nest}>
      {value}
    </Container>
  )
}