import { Button, Card, Col } from 'react-bootstrap'

const Link = ({ image, headline, buttonLaunch }) => {
    return (
        <Col className='p-3'>
            <Card style={{ width: '18rem' }} className='h-100'>
                <Card.Title>{headline}</Card.Title>
                <a href={buttonLaunch.url} target='_blank' rel='noreferrer'><Card.Img variant='top' src={image} /></a>
                <Card.Body className='right-element'>
                    <Button variant='secondary' href={buttonLaunch.url} target='_blank'>{buttonLaunch.label}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Link