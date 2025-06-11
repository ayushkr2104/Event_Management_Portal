import { useState } from 'react';
     import { useNavigate } from 'react-router-dom';
     import axios from 'axios';
     import styled from 'styled-components';

     const Container = styled.div`
       max-width: 28rem;
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

     const Form = styled.form`
       display: flex;
       flex-direction: column;
       gap: 1rem;
     `;

     const FormGroup = styled.div`
       display: flex;
       flex-direction: column;
     `;

     const Label = styled.label`
       font-size: 0.875rem;
       font-weight: 500;
       margin-bottom: 0.25rem;
     `;

     const Input = styled.input`
       width: 100%;
       padding: 0.5rem;
       border: 1px solid #d1d5db;
       border-radius: 0.25rem;
       &:focus {
         outline: none;
         border-color: #2563eb;
         box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
       }
     `;

     const Textarea = styled.textarea`
       width: 100%;
       padding: 0.5rem;
       border: 1px solid #d1d5db;
       border-radius: 0.25rem;
       resize: vertical;
       &:focus {
         outline: none;
         border-color: #2563eb;
         box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
       }
     `;

     const Button = styled.button`
       width: 100%;
       background-color: #2563eb;
       color: white;
       padding: 0.5rem;
       border-radius: 0.25rem;
       font-weight: 500;
       cursor: pointer;
       &:hover {
         background-color: #1d4ed8;
       }
     `;

     function CreateEvent() {
       const [title, setTitle] = useState('');
       const [description, setDescription] = useState('');
       const [date, setDate] = useState('');
       const [location, setLocation] = useState('');
       const [error, setError] = useState('');
       const navigate = useNavigate();

       const handleSubmit = async (e) => {
         e.preventDefault();
         try {
           await axios.post(
             'http://localhost:8080/api/events',
             { title, description, date, location },
             {
               headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
             }
           );
           navigate('/events');
         } catch (err) {
           if (err.response?.status === 401) {
             localStorage.removeItem('token');
             navigate('/login');
           } else {
             setError(err.response?.data?.message || 'Failed to create event. Please try again.');
           }
         }
       };

       return (
         <Container>
           <Title>Create Event</Title>
           {error && <ErrorMessage>{error}</ErrorMessage>}
           <Form onSubmit={handleSubmit}>
             <FormGroup>
               <Label>Title</Label>
               <Input
                 type="text"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 required
               />
             </FormGroup>
             <FormGroup>
               <Label>Description</Label>
               <Textarea
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
               />
             </FormGroup>
             <FormGroup>
               <Label>Date</Label>
               <Input
                 type="date"
                 value={date}
                 onChange={(e) => setDate(e.target.value)}
                 required
               />
             </FormGroup>
             <FormGroup>
               <Label>Location</Label>
               <Input
                 type="text"
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
               />
             </FormGroup>
             <Button type="submit">Create Event</Button>
           </Form>
         </Container>
       );
     }

     export default CreateEvent;