import {useEffect,useState} from 'react'
import './App.css';
import { WebcamCapture } from './webcam';
import {Imagebox} from  './imagebox'
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:5000');


function App() {

  const [imgSrc, setImgSrc] = useState();

  useEffect(()=>{
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log("Recieved image",message);
      setImgSrc('data:image/png;base64,'+message.data)
    };
  },[])
  return (
    <div className="App">
      <WebcamCapture client={client}/>
      <Imagebox client={client} imgSrc={imgSrc}/>
    </div>
  );
}

export default App;
