import styled from "styled-components"

const Container = styled.div`
  height: 32px;
  background-color: #eb8510;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Get Great Deals on all our properties worldwide
    </Container>
  )
}

export default Announcement