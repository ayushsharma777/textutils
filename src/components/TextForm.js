import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const alternateText = () => {
    var alternateCase = function (s) {
      var chars = s.toLowerCase().split("");
      for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
      }
      return chars.join("");
    };

    var txt = text;
    setText(alternateCase(txt));
    props.showAlert("Converted to alternate text", "success");
  };

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Text is reversed", "success");
  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text is capitalized", "success");
  };

  const sentenceCase = () => {
    function convertToSentenceCase(paragraph) {
      const sentences = paragraph.split(". ");

      const sentenceCaseSentences = sentences.map((sentence) => {
        return (
          sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
        );
      });

      const sentenceCaseParagraph = sentenceCaseSentences.join(". ");

      return sentenceCaseParagraph;
    }
    const inputParagraph = text;
    const convertedParagraph = convertToSentenceCase(inputParagraph);
    setText(convertedParagraph);
    props.showAlert("Converted to sentence case", "success");
  };

  const rmExtraSpaces = () => {
    setText(text.replace(/ +(?= )/g, ""));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error("failed to copy the text: " + err));
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };

  const readTxt = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
      setText(event.target.result);
    };
    reader.readAsText(file);
  };

  const clearText = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  return (
    <>
      <div className="container">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h2>
        <input
          type="file"
          className="btn btn-secondary"
          accept="text/plain"
          onChange={readTxt}
        />
        <div className="form-group">
          {/* <label for="exampleFormControlTextarea1">{props.heading}</label> */}
          <textarea
            className="form-control my-2"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            placeholder="Enter text here"
            onChange={handleOnChange}
            id="txtArea"
            rows="6"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={alternateText}
        >
          AlTeRnAtInG CaSe
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleReverse}
        >
          Reverse Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleCapitalize}
        >
          Capitalize Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={sentenceCase}
        >
          Sentence Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={rmExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger my-1 mx-1"
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-1"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length} words and {text.length} characters</p> */}
        <p style={{ color: "gray" }}>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        {/* <p>{0.008 * (text.split(" ")[text.split(" ").length - 1] === "" ? text.split(" ").length - 1 : text.split(" ").length)} minutes read</p> */}
        <p style={{ color: "gray" }}>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </p>
        <h2>Preview</h2>
        <p style={{ color: "gray" }}>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
