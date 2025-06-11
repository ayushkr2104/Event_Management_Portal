import { Routes, Route } from 'react-router-dom';
     import styled from 'styled-components';
     import Navbar from './components/Navbar';
     import Footer from './components/Footer';
     import Home from './pages/Home';
     import Login from './pages/Login';
     import Register from './pages/Register';
     import Dashboard from './pages/Dashboard';
     import CreateEvent from './pages/CreateEvent';
     import EventList from './pages/EventList';

     const Container = styled.div`
       min-height: 100vh;
       display: flex;
       flex-direction: column;
     `;

     const Main = styled.main`
       flex-grow: 1;
     `;

     function App() {
       return (
         <Container>
           <Navbar />
           <Main>
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/create-event" element={<CreateEvent />} />
               <Route path="/events" element={<EventList />} />
             </Routes>
           </Main>
           <Footer />
         </Container>
       );
     }

     export default App;