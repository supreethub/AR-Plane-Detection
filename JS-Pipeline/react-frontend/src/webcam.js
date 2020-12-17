import {useCallback, useRef, useState} from 'react'
import Webcam from 'react-webcam'

export const WebcamCapture = (props) => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
  
    const capture = useCallback(() => {
        
        setInterval(()=>{
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc)
            props.client.send(imageSrc)
        },80)
            
        
    }, [webcamRef, setImgSrc]);


    const stop = () => {
       window.location.reload()
    }
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>Start Streaming</button>
        <button onClick={stop}>Stop Streaming</button>
      </>
    );
  };
  
  
  