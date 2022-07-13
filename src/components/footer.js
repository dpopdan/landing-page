import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import UserGroupsModal from './userGroupsModal'

const Footer = ({ groups }) => {

    const [userGroupsModalShow, setUserGroupsModalShow] = useState(false)

    return (
        <>
            <Navbar bg="dark" variant='dark' fixed="bottom">
                <Container className='justify-content-center'>
                    <Nav>
                        <Nav.Link href="" onClick={() => setUserGroupsModalShow(true)}>User Groups</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <UserGroupsModal
                show={userGroupsModalShow}
                onHide={() => setUserGroupsModalShow(false)}
                groups={groups}
            />
        </>
    )
}

export default Footer