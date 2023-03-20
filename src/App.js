import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [url, setUrl] = useState(null);
    const [showIFrame, setShowIFrame] = useState(false);

  return (
    <>
        {
            !showIFrame ? (
                <>
                    <input onChange={(e) => setUrl(e.target.value)} />
                    <button onClick={() => setShowIFrame(true)}>Submit</button>
                </>
            ) : (
                <iframe src={url} height={"500vh"} width={"100%"} allow="camera;fullscreen;accelerometer;gyroscope;magnetometer" allowFullScreen />
            )
        }
    </>
  );
}

export default App;
