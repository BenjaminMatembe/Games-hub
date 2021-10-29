import { Container, Row, Col, Button } from "react-bootstrap";

const ImageGrid = () => {
    return ( 
       
            <div className="main">
        <Container fluid>
          <Row>
            <Col xs ={6}>
              
                <div className="heading2">
                  <h2>Real Gaming <br /> Takes the stage.</h2>
                </div>
                <div className="paragraph">
                  <p>
                    Evolve your gaming experience here at DrKim Gamers Hub, with
                    the latest released Games, battle it out with other gamers
                    to claim the top ranks in the Leaderboard, A more goal
                    oriented gaming experience takes the stage. Happy Gaming!{" "}
                  </p>
                  
                </div>
              
            </Col>
          </Row>
          <div className = "start"><Button variant="danger">Danger</Button></div>
        </Container>

        


      </div>
            
        
     );
}
 
export default ImageGrid;