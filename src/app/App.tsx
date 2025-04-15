import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';
import JuiciestPage from '~/pages/JuiciestPage';
import MainPage from '~/pages/MainPage';
import VeganCuisinePage from '~/pages/VeganCuisinePage';

const App = () => (
    <Box>
        <Header />
        <Navbar />
        <Sidebar />
        <Footer />
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/vegan-cuisine' element={<VeganCuisinePage />} />
            <Route path='/juiciest' element={<JuiciestPage />} />
        </Routes>
    </Box>
);

export default App;
