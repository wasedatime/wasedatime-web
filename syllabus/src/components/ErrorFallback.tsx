import React from "react";

interface Props {
  error: Error;
  resetError: () => void;
}

const ErrorFallback = ({ error }: Props) => (
  <div style={{ textAlign: "center", padding: "10vw 10vh" }}>
    <h2>You have encountered an error!</h2>
    <h2>エラーが発生しました！</h2>
    <br />
    <div>{error.toString()}</div>
    <br />
    <div style={{ textAlign: "left" }}>
      <p>
        Please send an email to bugs@wasedatime.com and describe how the bugs
        happened.
      </p>
      <p>
        お手数ですが、エラー発生の前に行われた操作をメールに述べ、
        bugs@wasedatime.com へ送っていただければ助かります。
      </p>
      <br />
      <p>We appreciate your help!</p>
      <p>ご協力ありがとうございます！</p>
    </div>
  </div>
);
export default ErrorFallback;