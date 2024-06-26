import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import { painState } from '../../store/atom/currentpain';

export default function Rootpain() {

const setCurrentType=useSetRecoilState(painState);
const navigate=useNavigate();


    return (
      <div>
        <h1 style={{ marginTop: "2rem", textAlign: "center" }}>
          Select Your Area Of Discomfort
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "4rem",
          }}>
         
          <div className="backpain">
            <div
              className="card"
              style={{ width: "20rem", height: "35rem", marginRight: "2rem" }}
            >
              <img
                src="https://www.materprivate.ie/images/default-source/medical-conditions/back-pain.jpg?sfvrsn=61827d16_1"
                className="card-img-top"
                alt="..."
                style={{ width: "20rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">Back Pain</h5>
                <p className="card-text">
                  Discover soothing yoga poses to alleviate and prevent back
                  pain. Explore gentle stretches and strengthening exercises to
                  promote a healthy and pain-free spine.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ color: "black" ,marginTop:"2.7rem"}}
                  onClick={() => {
                    setCurrentType({
                      currentType: "BackPain",
                      poseList: [
                         "Tree",
                         "Crescent",
                         "Sphinx",
                      ],
                    });
                    navigate("/keypain");
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          

          
          <div className="Kneepain">
            <div
              className="card"
              style={{ width: "20rem", height: "35rem", marginRight: "2rem" }}
            >
              <img
                src="https://www.advancedsportsandspine.com/wp-content/uploads/2020/03/Causes-of-knee-pain.png"
                className="card-img-top"
                alt="..."
                style={{ width: "20rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">Knee Pain</h5>
                <p className="card-text">
                  Experience relief from knee discomfort with our specialized
                  yoga poses. Strengthen and nurture your knees with targeted
                  exercises designed to enhance flexibility and reduce pain,
                  fostering a path towards improved mobility
                </p>
                <button
                  className="btn btn-primary"
                  style={{ color: "black" , marginTop:"1.3rem"}}
                  onClick={() => {
                    setCurrentType({
                      currentType: "KneePain",
                      poseList: [
                        "Warrior",
                        "Chair",
                        "Camel",
                      ],
                    });
                    navigate("/keypain");
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          

         
          <div className="NeckPain">
            <div
              className="card"
              style={{ width: "20rem", height: "35rem", marginRight: "2rem" }}
            >
              <img
                src="https://prairiespine.com/wp-content/uploads/2019/10/Neck-and-Shoulder-Pain-1.jpg"
                className="card-img-top"
                alt="..."
                style={{ width: "20rem", height: "15rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">Shoulder Neck Pain</h5>
                <p className="card-text">
                  Ease tension and find relief for your shoulder and neck pain
                  through purposeful yoga poses. Discover movements that promote
                  relaxation and alleviate discomfort, guiding you towards a
                  more comfortable and pain-free upper body.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ color: "black" , marginTop:""}}
                  onClick={() => {
                    setCurrentType({
                      currentType: "NeckShoulderPain",
                      poseList: [
                        "Triangle",
                        "Camel",
                        "Sphinx",
                      ],
                    });
                    navigate("/keypain");
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          

          
          {/* <div className="HipPain">
            <div
              className="card"
              style={{ width: "18rem", height: "35rem", marginRight: "2rem" }}
            >
              <img
                src="https://www.recoverphysiohastings.co.uk/wp-content/uploads/2021/04/human-hip-1024x626.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title">Hip Pain</h5>
                <p className="card-text">
                  Transform your hip discomfort with our curated yoga poses.
                  Cultivate strength, flexibility, and balance to ease hip pain.
                  Embrace a holistic approach to wellness, restoring harmony and
                  comfort to your hips through mindful yoga practices.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ color: "black" }}
                  onClick={() => {
                    setCurrentType({
                      currentType: "HipPain",
                      poseList: [
                        "BoundAngle",
                        "Garland",
                        "Triangle",
                        "Warrior",
                      ],
                    });
                    navigate("/keypain");
                  }}
                >
                  Go somewhere
                </button>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    );
}