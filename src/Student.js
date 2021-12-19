export default function StudentLogin(props) {
    return (
      <>
        <h3> Student Login </h3>
        <button onClick={() => props.history.goBack()}>Go Back</button> &nbsp;
        <button onClick={() => props.history.goForward()}>Go Forward</button>
      </>
    );
  }