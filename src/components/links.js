import Link from './link'
import { Container, Row } from 'react-bootstrap'

const Links = ({ tiles }) => {
  return (
    <Container>
      <Row className='row-cols-xl-3  row-cols-xxl-4'>
        {tiles.map((tile, index) => (
          <Link
            key={index}
            image={tile.image}
            headline={tile.headline}
            buttonLaunch={tile.buttonLaunch}
          />
        ))}
      </Row>
    </Container>
  )
}

export default Links