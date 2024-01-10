import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import "../App.css";
// import { Button } from "react-bootstrap";
import { analyze } from "../utils";

function Chatbot() {
  const [message, setMessage] = useState([
    {
      message: "Hi, May i have your name?",
    },
  ]);

  const [text, setText] = useState("");

  const onSend = () => {
    let list = [...message, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: `Hi , ${text}`,
        },
        {
          message: "How can i help you?",
        },
      ];
    }
    setMessage(list);
    setText("");
    setTimeout(() => {
      document.querySelector("#copyright").scrollIntoView();
    }, 1);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <img
          src="data:image/png;base64,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"
          alt="logo"
          height={150}
          width={150}
        />
        <h2 className="text-primary">ChatBot</h2>
      </div>

      <div className="chat-message">
        {message.length > 0 && message.map((data) => <ChatMessage {...data} />)}
        <div className="d-flex mt-2">
          <input
            type="text"
            className="from-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* <button type="primary" className="ms-3" onClick={onSend}> */}

          {/* </button> */}
          <button
            type="button"
            className="btn btn-primary ms-3 my-2"
            onClick={onSend}
          >
            Send
          </button>
        </div>
        <div id="copyright" className="mt-3">
          Copyrights code..
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
