import {React, useRef} from "react";
import { CounterData } from "./counterData";
import "./style.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  const SensRef = useRef(null)
  return (
    <div className="counter-section">
      <div className="container">
        <div className="row">
          {CounterData.map((data) => (
            <div className="col-lg-3 col-sm-6 " key={data.id}>
              <div className="icon-box">
                <div
                  className="icon-box-icon"
                  style={{ backgroundColor: data.background }}
                >
                  <i className={data.icon}></i>
                </div>
                <div className="icon-box-content">
                  <VisibilitySensor sensRef={SensRef}>
                    {({ isVisible }) => (
                      <>
                        <h2 className="title">Project Completed</h2>
                        {isVisible ? (
                          <CountUp
                            className="counter"
                            start={0}
                            end={data.count}
                            duration={1.5}
                          />
                        ) : null}
                      </>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;
