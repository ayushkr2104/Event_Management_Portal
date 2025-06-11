import { Link, useNavigate } from 'react-router-dom';
     import styled from 'styled-components';

     const Nav = styled.nav`
       background-color: #2563eb;
       padding: 1rem;
     `;

     const Container = styled.div`
       max-width: 1200px;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;
       align-items: center;
     `;

     const Logo = styled(Link)`
       color: white;
       font-size: 1.5rem;
       font-weight: bold;
       text-decoration: none;
     `;

     const NavLinks = styled.div`
       display: flex;
       gap: 1rem;
     `;

     const NavLink = styled(Link)`
       color: white;
       text-decoration: none;
       &:hover {
         text-decoration: underline;
       }
     `;

     const Button = styled.button`
       background: none;
       border: none;
       color: white;
       cursor: pointer;
       &:hover {
         text-decoration: underline;
       }
     `;

     function Navbar() {
       const navigate = useNavigate();
       const token = localStorage.getItem('token');

       const handleLogout = () => {
         localStorage.removeItem('token');
         navigate('/login');
       };

       return (
         <Nav>
           <Container>
             <Logo to="/">EventSync</Logo>
             <NavLinks>
               {token ? (
                 <>
                   <NavLink to="/dashboard">Dashboard</NavLink>
                   <NavLink to="/events">Events</NavLink>
                   <NavLink to="/create-event">Create Event</NavLink>
                   <Button onClick={handleLogout}>Logout</Button>
                 </>
               ) : (
                 <>
                   <NavLink to="/login">Login</NavLink>
                   <NavLink to="/register">Register</NavLink>
                 </>
               )}
             </NavLinks>
           </Container>
         </Nav>
       );
     }

     export default Navbar;