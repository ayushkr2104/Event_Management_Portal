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
       gap: 8px;
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

     const LinkText = styled.p`
       margin-top: 1rem;
       font-size: 0.875rem;
       color: #4b5563;
     `;

     const Link = styled.a`
       color: #2563eb;
       text-decoration: none;
       &:hover {
         text-decoration: underline;
       }
     `;

     function Login() {
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [error, setError] = useState('');
       const navigate = useNavigate();

       const handleSubmit = async (e) => {
         e.preventDefault();
         try {
           const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
           localStorage.setItem('token', response.data.token);
           navigate('/dashboard');
         } catch (err) {
           console.error('Login error:', err.response?.data);
           setError(err.response?.data?.error || 'Invalid credentials. Please try again.');
         }
       };

       return (
         <Container>
           <Title>Login</Title>
           {error && <ErrorMessage>{error}</ErrorMessage>}
           <Form onSubmit={handleSubmit}>
             <FormGroup>
               <Label>Email</Label>
               <Input
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
               />
             </FormGroup>
             <FormGroup>
               <Label>Password</Label>
               <Input
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required
               />
             </FormGroup>
             <Button type="submit">Login</Button>
           </Form>
           <LinkText>
             Don't have an account? <Link href="/register">Register</Link>
           </LinkText>
         </Container>
       );
     }

     export default Login;