import React from "react";
interface Props {
  error: Error;
  resetError: () => void;
}

const ErrorFallback = ({ error, resetError }: Props) => (
  <div style={{ textAlign: "center", padding: "10vw 10vh" }}>
    <h2>You have encountered an error!</h2>
    <h2>エラーが発生しました！</h2>
    <div>{error.toString()}</div>
    <div style={{ textAlign: "left" }}>
      <p>
        Please send an email to bugs@wasedatime.com and describe how the bugs
        happened.
      </p>
      <p>
        お手数ですが、エラー発生の前に行われた操作をメールに述べ、
        bugs@wasedatime.com へ送っていただければ助かります。
      </p>
      <p>We appreciate your help!</p>
      <p>ご協力ありがとうございます！</p>
    </div>
    <button onClick={resetError}>Click here to reset!</button>
  </div>
);

export default ErrorFallback;
