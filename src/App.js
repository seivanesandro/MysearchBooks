import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

//import styled from 'styled-components';
import Pages from './pages/Pages';
//import Main from './components/main/Main';

function App() {
    return (
        <div className="App">
            <NavbarMenu />

            <Pages />
            <Footer />
        </div>
    );
}

export default App;
