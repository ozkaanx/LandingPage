import React, { useState } from "react";
import "./style.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { ProjectData } from "./projectdata";
const Projects = () => {
  const [filterItem, setfilterItem] = useState(ProjectData);

  const filterButton = (categeItem) => {
    const updateItems = ProjectData.filter((element) => {
      return element.category === categeItem;
    });
    
    setfilterItem(updateItems);
  };
  return (
    <div className="project-section">
      <div className="container">
        <div className="gallery-head">
          <a href="/" className="head-title">Projects</a>
          <h3>Take A Look At Our Latest Portfolio</h3>
        </div>
        <div className="gallery-filter">
          <button onClick={() => setfilterItem(ProjectData)}>All</button>
          <button onClick={() => filterButton("WebDesign")}>Web Design</button>
          <button onClick={() => filterButton("WebDevelopment")}>
            Web Development
          </button>
          <button onClick={() => filterButton("MobileApp")}>Mobile App</button>
        </div>
        <div className="row mt-4">
          {filterItem.map((data) => (
            <div className="col-lg-4 col-md-6 col-sm-6 " key={data.id}>
              <div className="gallery-card">
                <Zoom zoomMargin={100} wrapElement={"zoomcomp"}>
                  <img
                    className="zoom-img"
                    alt =""
                    src={data.img}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "700",
                    }}
                  ></img>
                </Zoom>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
