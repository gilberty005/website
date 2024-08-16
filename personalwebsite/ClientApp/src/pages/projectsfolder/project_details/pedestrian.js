import React from "react";
import uwb from "./../../../assets/uwb.png"
import "./project.css"

export function Pedestrian() {
  return (
    <div className="Blog">
      <div className="header-image">
        <img
          src={uwb}
          alt="Qorvo's DWM3001CDK Chip"
        />
      </div>
      <div className="gradient__text">
        <h1 className="title_blog">Developing a Pedestrian Safety System</h1>
      </div>
      <div className="blog_content">
        <h2 className="subtitle">Motive</h2>
        In the US, 18% of all crash fatalities involve pedestrians, with 7,522 pedestrian deaths occurring in 2022 alone.<sup><a href="#footnote1">1</a></sup> This alarming statistic highlights the need for effective solutions. This project demonstrates a proof of concept for a potential safety system. By analyzing a live camera feed of an intersection, Kalman filtering is used to define a ‘danger zone’ in front of each moving vehicle. This danger zone is determined by factors such as the current traffic light status, the vehicle’s direction, and its speed. If a pedestrian enters this danger zone, a notification is sent to their phone (or any wearable technology) to warn them of imminent danger. 
        <h2 className="subtitle">Overview</h2>
        This project focused on the intersection at 120th Street and Amsterdam Avenue, where a live camera was set up for monitoring. I contributed as a student researcher under the guidance of Professor Sharon Di and PhD candidate Yongjie Fu. My primary responsibility was developing the app component from scratch. I ensured that the Swift app was seamlessly connected to an MQTT broker to continuously access and update the danger zone area. Additionally, I developed the localization software to pinpoint the location of pedestrians using UWB technology.
        <h2 className="subtitle">Difficulities</h2>
        <ul className="difficulties-list">
          <li>
            Due to the premise of this project, the system must have as low latency as possible. To facilitate this, I used MQTT for its lightweight communication protocol, ensuring rapid and efficient data transmission between the app and the server, allowing real-time updates to the danger zone and timely notifications to pedestrians.
          </li>
          <li>
            The location of each pedestrian within the intersection must be known to incredible precision. The GPS coordinates from a regular phone simple won't suffice here with its ±5m accuracy. As such, I looked into UWB technology which can pinpoint the exact distance between two chips with ±10cm accuracy. To convert this into a usable location measurement of the user, I set up a system of 4 anchors to triangulate the precise location of the pedestrian through using a least squares algorithm. 
          </li>
        </ul>
      </div>
      <div className="blog_footnote">
        <hr />
        <p id="footnote1">
          1 <a href="https://www.iihs.org/topics/fatality-statistics/detail/pedestrians#:~:text=Posted%20June%202024.-,Trends,their%20lowest%20point%20in%202009." target="_blank" rel="noopener noreferrer">IIHS Pedestrian Fatality Statistics</a>
        </p>
      </div>
    </div>
  );
}

export default Pedestrian;