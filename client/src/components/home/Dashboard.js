import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Drawer, Button, Radio } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

import { Carousel } from "antd";

const RadioGroup = Radio.Group;

class Dashboard extends React.Component {
  state = { visible: true, placement: "left" };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Carousel autoplay style={{ width: 300 }}>
          <div>
            <img class="card-img-top" src="dctb.png" />{" "}
          </div>
          <div>
            <img class="card-img-top" src="logo192.png" />{" "}
          </div>
          <div>
            <img class="card-img-top" src="logo512.png" />{" "}
          </div>
          <div>
            <img class="card-img-top" src="Profile.png" />{" "}
          </div>
        </Carousel>

        {/* <RadioGroup
          style={{ marginRight: 8 }}
          defaultValue={this.state.placement}
          onChange={this.onChange}
        >
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </RadioGroup> */}
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Dashboard"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {/* <p>Profile</p>{" "} */}
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <img class="card-img-top" src="Profile.png" />{" "}
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  {/* <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p> */}
                  {/* <a href="#" class="btn btn-primary">
                    See Profile
                  </a> */}
                  <Link class="btn btn-primary" to="/profile">
                    See Profile
                  </Link>
                </div>
              </div>
              <p>
                <Link>Share App</Link>
              </p>
              <p>
                <Link to="/contact-us">Contact Us</Link>
              </p>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Dashboard;
