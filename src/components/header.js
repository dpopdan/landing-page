import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import AboutUsModal from './aboutUsModal'

const Header = ({ title, image, aboutUsEnabled, aboutUsTitle, aboutUsText }) => {

    const [aboutUsModalShow, setAboutUsModalShow] = useState(false);

    return (
        <>
            <Navbar bg="dark" variant='dark' fixed="top">
                <Container>
                    <Navbar.Brand><img src={process.env.PUBLIC_URL + '/' + image} className='navbar-image' />{title}</Navbar.Brand>
                    {aboutUsEnabled && (
                        <Nav>
                            <Nav.Link href="" onClick={() => setAboutUsModalShow(true)}>About Us</Nav.Link>
                        </Nav>
                    )}
                </Container>
            </Navbar>
            <AboutUsModal
                show={aboutUsModalShow}
                onHide={() => setAboutUsModalShow(false)}
                title={aboutUsTitle}
                text={aboutUsText}
            />
        </>
    )
}

export default Header