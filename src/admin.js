export default function AdminLogin(props) {
    return (
      <>
        <h3> Admin Login </h3>
        <button onClick={() => props.history.goBack()}>Go Back</button> &nbsp;
        <button onClick={() => props.history.goForward()}>Go Forward</button>
      </>
    );
  }