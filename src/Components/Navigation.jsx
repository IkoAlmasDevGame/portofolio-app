import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';

const NavigationBar = () => {
    return(
        <Navbar variant='white' expand='sm' className='navbar' id='scrollUp'>
            <Container>
                <NavbarBrand>Portofolio Iko Almas</NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav>
                            <Nav.Link href='#home' className='homes'>Home</Nav.Link>
                            <Nav.Link href='#about' className='abouts'>About</Nav.Link>
                            <Nav.Link href='#skill' className='skills'>Skill</Nav.Link>
                            <Nav.Link href='#contact' className='contacts'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar