import React from "react";
import "./Profiletop.css";

const Profiletop = () => {
  return (
    <>
      <div className="container">
        <div className="card card1">
          <div className="cardhead">Personal Information</div>
          <div className="text-inputs">
            <div className="leftcardtopics">Location</div>
            <div className="inputbox">
              <input required="required" type="text" />
              <span>Street</span>
              <i></i>
            </div>
            <div className="pi-grid-container">
              <div className="inputbox pi-grid-item leftgrid">
                <input required="required" type="text" />
                <span>City</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item">
                <input required="required" type="text" />
                <span>State</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item leftgrid">
                <input required="required" type="text" />
                <span>Country</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item">
                <input required="required" type="text" />
                <span>ZIP code</span>
                <i></i>
              </div>
            </div>
            <div className="pi-clear-float"></div>
            <div className="leftcardtopics">Parent's Information</div>
            <div className="inputbox">
              <input required="required" type="text" />
              <span>Father's Occupation</span>
              <i className="inputriser"></i>
            </div>
            <div className="inputbox">
              <input required="required" type="text" />
              <span>Mother's Occupation</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input required="required" type="text" />
              <span>Father's Education Level</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input required="required" type="text" />
              <span>Mother's Education Level</span>
              <i></i>
            </div>
            <div className="leftcardtopics">User's Information</div>
            <div className="inputbox">
              <input required="required" type="text" />
              <span>High School Name</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input required="required" type="text" />
              <span>Grade</span>
              <i></i>
            </div>

            <div className="inputbox">
              <input required="required" type="text" />
              <span>High School Curriculum</span>
              <i></i>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="cardhead">Areas of Interest</div>
          <div className="text-inputs">
            <div className="leftcardtopics">What is/are your passion(s)?</div>
            <div className="textarea-topic">
              Describe what keeps you engaged outside of academics? eg. Watching{" "}
              <br /> Basketball to playing Baseball, learning drop-shipping to
              cutting hair. BE UNIQUE
            </div>
            <textarea rows="5" className="ai-text-area" />
            <div className="inputbox">
              <input required="required" type="text" />
              <span>Your dream college</span>
              <i></i>
            </div>
            <div className="inputbox">
              <input required="required" type="text" />
              <span>What’s your intended major(s) / favorite subject(s)</span>
              <i></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
        <div className="cardhead">Academic Details</div>
        <div className="text-inputs">
            <div className="leftcardtopics">High School Grades</div>
            
            <div className="pi-grid-container">
              <div className="inputbox pi-grid-item leftgrid">
                <input required="required" type="text" />
                <span>Grade 9 GPA / Percentage</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item">
                <input required="required" type="text" />
                <span>Grade 10 GPA</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item leftgrid">
                <input required="required" type="text" />
                <span>Grade 11 GPA</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item">
                <input required="required" type="text" />
                <span>Grade 12 GPA</span>
                <i></i>
              </div>
            </div>
            <div className="inputbox">
              <input required="required" type="text" />
              <span>Cumulative GPA</span>
              <i></i>
            </div>
            <div className="pi-clear-float"></div>
            <div className="leftcardtopics">Test Scores</div>
            <div className="pi-grid-container">
              <div className="inputbox pi-grid-item leftgrid">
                <input required="required" type="text" />
                <span>SAT English</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item">
                <input required="required" type="text" />
                <span>SAT Maths</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item leftgrid">
                <input required="required" type="text" />
                <span>ACT English</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item">
                <input required="required" type="text" />
                <span>ACT Maths</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item leftgrid">
                <input required="required" type="text" />
                <span>ACT Maths</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item">
                <input required="required" type="text" />
                <span>ACT Maths</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item leftgrid">
                <input required="required" type="text" />
                <span>TOEFL Score</span>
                <i></i>
              </div>
              <div className="inputbox pi-grid-item">
                <input required="required" type="text" />
                <span>IELTS Score</span>
                <i></i>
              </div>
            </div>
            <div className="pi-clear-float"></div>
            <div className="leftcardtopics">Extracurricular Activities / Awards & Honors / Courses & Certificates</div>
            <textarea rows="5" className="ai-text-area" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiletop;
