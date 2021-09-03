
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const textChange = (e) => {
    setText(e.target.value);
  };
  const clickChange = () => {
    // let newText=text.toUpperCase();
    setText(text.toUpperCase());
    props.showalert("text to upper case","success");
  
  };
  const clickChangel = () => {
    setText(text.toLowerCase());
  };
  const clickChangecl = () => {
    setText("");
  };
  const words=(t)=>{
    let a=t.split(" ");
    let cnt=0;
    for (let i = 0; i< a.length; i++) {
    if(a[i].length>0)
    {
      cnt++;
    }
    
    }

    return cnt;

  }
  const bcolor=()=>{
    if(props.btcolor==="white")
    {
      console.log(props.btcolor);
      return "primary";
    }
    if(props.btcolor==="grey")
    {
      return "dark";
    }
    if(props.btcolor==="red")
    {
      return "danger";
    }
    if(props.btcolor==="green")
    {
      return "success";
    }
  }
  return (
    <>
      <div className="mb-3 my-3">
        <h1
          className="my-3"
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {props.heading}{" "}
        </h1>
        <textarea
          className="form-control my-3"
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.btcolor 
          }}
          value={text}
          onChange={textChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className={`btn btn-${bcolor()} mx-2`} onClick={clickChange}>
          change to Uppercase
        </button>
        <button className={`btn btn-${bcolor()} mx-2`} onClick={clickChangel}>
          change to Lowercase
        </button>
        <button className={`btn btn-${bcolor()} mx-2`} onClick={clickChangecl}>
          clear
        </button>
      </div>
      <div>
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          SUMMARY
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.length} characters
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {words(text)} words
        </p>
        <h3 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Preview
        </h3>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.length > 0 ? text : "enter some text in text area"}
        </p>
      </div>
    </>
  );
}
