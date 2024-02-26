import logo from './logo.svg';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const data = [
  {
    id: 1,
    name: '테스트1',
    contents: '테스트입니다.'
  },
  {
    id: 2,
    name: '테스트2',
    contents: '테스트입니다'
  },
  {
    id: 3,
    name: '테스트3',
    contents: '테스트입니다'
  },
]

const Body = Accordion;

function App() {
  return (
    <div className='App'>
      {
        data.map((e, i) => (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={i}>
              <Card>
                <Accordion.Header>
                  <Card.Header>
                  {e.name}
                  </Card.Header>
                </Accordion.Header>
              </Card>

              <Body>
                <Card.Body>
                  {e.contents}
                </Card.Body>
              </Body>
            </Accordion.Item>
        </Accordion>
        ))
      }
    </div>
  );
}

export default App;
