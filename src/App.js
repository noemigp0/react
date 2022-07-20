import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./components/button";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import users from "./assets/mock_users";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-wrap">
        {users.map((user, index) => {
          const { gender, name, dob, picture } = user
          const { title, first, last } = name
           return <Card className = "female-color" color={`${gender === "male"? "primary": ""}`}
            style={{
              width: "18rem",              
            }}
          >
            <img alt="Card image" src={`${picture.medium}`} />
            <CardBody>
              <CardTitle tag="h5">{`${title} ${first} ${last}`}</CardTitle>
              <CardSubtitle className="mb-2" tag="h6" >
                {`${gender}`}
              </CardSubtitle>
              <CardText>
                {`Age: ${dob.age}`}
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>;
        })}
      </div>
    </div>
  );
}

export default App;
