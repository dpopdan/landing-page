import { Button, Modal } from 'react-bootstrap'

const UserGroupsModal = (props) => {
    return (
        <Modal
            {...props}
            size='med'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>Your Group Membership</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.groups.length > 0 ?
                    <ul>
                        {props.groups.sort().map((group, index) => (
                            <li key={index}>{group}</li>
                        ))}
                    </ul>
                    :
                    <p>You are not a member of any groups.</p>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UserGroupsModal