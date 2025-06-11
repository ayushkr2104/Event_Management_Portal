import { useState, useEffect } from 'react';
     import { useNavigate } from 'react-router-dom';
     import axios from 'axios';
     import styled from 'styled-components';

     const Container = styled.div`
       max-width: 1200px;
       margin: 0 auto;
       padding: 1rem;
     `;

     const Title = styled.h2`
       font-size: 1.5rem;
       font-weight: bold;
       margin-bottom: 1rem;
     `;

     const ErrorMessage = styled.p`
       color: #ef4444;
       margin-bottom: 1rem;
     `;

     const NoEvents = styled.p`
       color: #4b5563;
     `;

     const Grid = styled.div`
       display: grid;
       grid-template-columns: 1fr;
       gap: 1rem;
       @media (min-width: 768px) {
         grid-template-columns: repeat(2, 1fr);
       }
       @media (min-width: 1024px) {
         grid-template-columns: repeat(3, 1fr);
       }
     `;

     const Card = styled.div`
       background-color: #f3f4f6;
       padding: 1rem;
       border-radius: 0.25rem;
     `;

     const CardTitle = styled.h3`
       font-size: 1.125rem;
       font-weight: 600;
       margin-bottom: 0.5rem;
     `;

     const CardText = styled.p`
       color: #4b5563;
       margin-bottom: 0.5rem;
     `;

     const CardMeta = styled.p`
       font-size: 0.875rem;
       color: #6b7280;
     `;

     function EventList() {
       const [events, setEvents] = useState([]);
       const [error, setError] = useState('');
       const navigate = useNavigate();

       useEffect(() => {
         const fetchEvents = async () => {
           try {
             const response = await axios.get('http://localhost:8080/api/events', {
               headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
             });
             setEvents(response.data);
           } catch (err) {
             if (err.response?.status === 401) {
               localStorage.removeItem('token');
               navigate('/login');
             } else {
               setError('Failed to load events. Please try again.');
             }
           }
         };
         fetchEvents();
       }, [navigate]);

       return (
         <Container>
           <Title>Events</Title>
           {error && <ErrorMessage>{error}</ErrorMessage>}
           {events.length === 0 ? (
             <NoEvents>No events found.</NoEvents>
           ) : (
             <Grid>
               {events.map((event) => (
                 <Card key={event.id}>
                   <CardTitle>{event.title}</CardTitle>
                   <CardText>{event.description}</CardText>
                   <CardMeta>Date: {event.date}</CardMeta>
                   <CardMeta>Location: {event.location}</CardMeta>
                 </Card>
               ))}
             </Grid>
           )}
         </Container>
       );
     }

     export default EventList;