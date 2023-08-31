import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"

const Filtered = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      Filtered
    </Container>
  )
}

const Container = styled.div`
  padding: 0px;
`

export default Filtered