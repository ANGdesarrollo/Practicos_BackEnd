import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark">
                <Container className="d-flex justify-content-start w-100 m-0">
                    <Navbar.Brand href="#home">
                        <img
                            src="https://res.cloudinary.com/dwz16rstr/image/upload/v1671852586/react-js-weather/react_gs1igi.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}
