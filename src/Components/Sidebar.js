import { Container, Row, Col} from "react-bootstrap";
const Side = () => {
  return (
    
      <div className="sidebar">
        <div className="heading">
          <h1>DrKim Gamers Hub</h1>
        </div>
        <Container>
          <Row>
            <Col >
              <ul>
                <li>
                  <button>Home</button>
                </li>
                <li>
                  <button>Booking</button>
                </li>
                <li>
                  <button>Booking</button>
                </li>
                <li>
                  <button>Booking</button>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      
      
    
  );
};

export default Side;
