import React from "react";
import fakeData from "../FakedData/FakeData";
import Course from "../Course/Course";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-header">
        <h1>Chose Your Course</h1>
      </div>
      <div className="container-fluid">
        <div className="row row-cols-md-3 gy-4 mt-5">
          {fakeData.map((data) => {
            return (
              <Course
                key={data.id}
                title={data.title}
                price={data.price}
                des={data.details}
                img={data.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
