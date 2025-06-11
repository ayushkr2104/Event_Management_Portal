import styled from 'styled-components';
     import { Link } from 'react-router-dom';

     const Container = styled.div`
       max-width: 1200px;
       margin: 0 auto;
       padding: 1rem;
       text-align: center;
     `;

     const Title = styled.h1`
       font-size: 2.25rem;
       font-weight: bold;
       margin-bottom: 1rem;
     `;

     const Subtitle = styled.p`
       font-size: 1.125rem;
       margin-bottom: 1.5rem;
       color: #4b5563;
     `;

     const Button = styled(Link)`
       background-color: #2563eb;
       color: white;
       padding: 0.5rem 1rem;
       border-radius: 0.25rem;
       text-decoration: none;
       &:hover {
         background-color: #1d4ed8;
       }
     `;

     function Home() {
       return (
         <Container>
           <Title>Welcome to EventSync</Title>
           <Subtitle>Manage your events seamlessly with our platform.</Subtitle>
           <Button to="/events">Explore Events</Button>
         </Container>
       );
     }

     export default Home;