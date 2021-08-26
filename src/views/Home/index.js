import React from 'react';
import CalendarPicker from '../../components/CalendarPicker';
import Container from '../../components/Container';
import Images from '../../components/ImageList';
const Home = () => {
  return (
    <Container>
      <CalendarPicker />
      <Images />
    </Container>
  )
}

export default Home;