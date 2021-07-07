import Modal from "./modal";
import { Component } from "react";

const subscription_url = "http://localhost:3000/api/v1/subscriptions";

class EditEvent extends Component {

    state = {
        subscription: []
    }
  
    render() {
    return (
      <div>
        <Link to={`${this.props.match.subscription_url}/edit`}>Edit Profile</Link>

        <Route
          path={`${this.props.match.subscription_url}/edit`}
          render={() => {
            return (
              <Modal
                onClick={() => {
                  this.props.history.push(this.props.match.subscription_url);
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  Edit this Event
                </div>
              </Modal>
            );
          }}
        />
      </div>
    );
  }
}

export default EditEvent; 