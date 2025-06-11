import { useState, useEffect } from 'react';
     import { Link, useNavigate } from 'react-router-dom';
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

     const Subtitle = styled.p`
       margin-bottom: 1rem;
     `;

     const ErrorMessage = styled.p`
       color: #ef4444;
       margin-bottom: 1rem;
     `;

     const Grid = styled.div`
       display: grid;
       grid-template-columns: 1fr;
       gap: 1rem;
       @media (min-width: 768px) {
         grid-template-columns: 1fr 1fr;
       }
     `;

     const Card = styled.div`
       background-color: #f3f4f6;
       padding: 1rem;
       border-radius: 0.25rem;
       box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
     `;

     const CardTitle = styled.h3`
       font-size: 1.125rem;
       font-weight: 600;
       margin-bottom: 0.5rem;
     `;

     const CardText = styled.p`
       color: #4b5563;
     `;

     const Button = styled(Link)`
       display: inline-block;
       margin-top: 1rem;
       background-color: #2563eb;
       color: white;
       padding: 0.5rem 1rem;
       border-radius: 0.25rem;
       text-decoration: none;
       &:hover {
         background-color: #1d4ed8;
       }
     `;

     function Dashboard() {
       const [upcomingEvents, setUpcomingEvents] = useState(0);
       const [totalEvents, setTotalEvents] = useState(0);
       const [error, setError] = useState('');
       const navigate = useNavigate();

       useEffect(() => {
         const fetchEventStats = async () => {
           try {
             const response = await axios.get('http://localhost:8080/api/events', {
               headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
             });
             const events = response.data;
             setTotalEvents(events.length);
             const today = new Date().toISOString().split('T')[0];
             const upcoming = events.filter((event) => event.date >= today).length;
             setUpcomingEvents(upcoming);
           } catch (err) {
             if (err.response?.status === 401) {
               localStorage.removeItem('token');
               navigate('/login');
             } else {
               setError('Failed to load event stats.');
             }
           }
         };
         fetchEventStats();
       }, [navigate]);

       return (
         <Container>
           <Title>Dashboard</Title>
           {error && <ErrorMessage>{error}</ErrorMessage>}
           <Subtitle>Welcome back! Here's an overview of your events.</Subtitle>
           <Grid>
             <Card>
               <CardTitle>Upcoming Events</CardTitle>
               <CardText>{upcomingEvents} events scheduled this month.</CardText>
             </Card>
             <Card>
               <CardTitle>Total Events</CardTitle>
               <CardText>You've created {totalEvents} events.</CardText>
             </Card>
           </Grid>
           <Button to="/create-event">Create New Event</Button>
         </Container>
       );
     }

     export default Dashboard;