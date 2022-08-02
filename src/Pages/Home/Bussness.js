import React from "react";
import {
  TeamOutlined,
  SmileOutlined,
  FolderOpenOutlined,
  LikeOutlined
} from "@ant-design/icons";
const Bussness = () => {
  return (
    <div>
      <section>
        <div class="container">
          <div class="heading_info">
            <h2>Millions business Trust us</h2>
            <p>Try to understand users expectation</p>
            <div class="border">
              <span></span> <span></span> <span></span>
            </div>
          </div>
          <div class="d-flex">
            <div class="item">
              <TeamOutlined />
              <h4>72</h4>
              <p>Countries</p>
            </div>
            <div class="item">
              <FolderOpenOutlined />
              <h4>
                535 <span>+</span>
              </h4>
              <p>Complete Projects</p>
            </div>
            <div class="item">
              <SmileOutlined />
              <h4>
                273 <span>+</span>
              </h4>
              <p>Happy Clients</p>
            </div>
            <div class="item">
            <LikeOutlined />
              <h4>
                432 <span>+</span>
              </h4>
              <p>Feedback</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bussness;
