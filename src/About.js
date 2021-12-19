import { useLocation } from "react-router";

export default function AboutUs(props) {
    const location = useLocation();
    return (
      <>
        <h3> About Us Component </h3>
        <button onClick={() => props.history.goBack()}>Go Back</button> &nbsp;
        <button onClick={() => props.history.goForward()}>Go Forward</button>
      </>
    );
  }
  