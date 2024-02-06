import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //     color: 'black',
  //     backgroundColor: 'white'

  // })

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };
  // const [btnText, setBtnText] = useState('Enable Dark Mode')

  return (
    <div className="container my-5" style={myStyle}>
      <h2>Hey there,</h2>
      <div className="accordion my-2" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About TextUtils
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Welcome to Text Utils, where precision meets convenience in text
              formatting. Our platform empowers users to effortlessly transform
              their text with a range of powerful tools. Whether you need to
              convert text to uppercase or lowercase, apply sentence case,
              alternate case, capitalize words, reverse text, or eliminate extra
              spaces, Text Utils has you covered. With an intuitive interface,
              you can easily paste your text into the designated area and watch
              as it undergoes seamless transformations. Explore the
              possibilities of efficient text manipulation with Text Utils –
              your go-to destination for elevating the presentation of your
              textual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to Use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              At Text Utils, we believe in democratizing the power of text
              formatting. Our mission is to provide a versatile and accessible
              platform for everyone. We take pride in offering a free-to-use
              service, allowing users from all walks of life to enhance the
              readability and aesthetics of their text without any barriers.
              Join our community of content creators, students, professionals,
              and enthusiasts who leverage Text Utils to make their text stand
              out. Elevate your writing experience without any cost – because
              impactful text formatting should be within reach for all.
            </div>
          </div>
        </div>
        <h6 style={{ textAlign: "center", marginTop: "30px" }}>
          Developed by Ayush{" "}
        </h6>
      </div>
      {/* <div className="container my-2">
            <button type='button' onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div> */}
    </div>
  );
}
