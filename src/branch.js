import { useParams } from "react-router";

export default function Branches(props){
    const urlparams = useParams();
   return (
     <>
       <h3>Branches</h3>
       <button onClick={() => props.history.goBack()}>Go Back</button> &nbsp;
       <button onClick={() => props.history.goForward()}>Go Forward</button>
     </>
   );
   }