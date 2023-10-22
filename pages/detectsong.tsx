import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import '../styles/global.css';
import styles from './DetectSong.module.css';

interface ReactMicProps {
 record:boolean,
 className?:string,
 onStop?:(recordedBlob:any) => void,
 onData?:(recordedBlob:any) => void,
 strokeColor?:string,
 backgroundColor?:string
}

// Dynamically import React-Mic with defined types.
const ReactMic = dynamic(() =>
 import('react-mic').then((mod) => mod.ReactMic as React.ComponentType<ReactMicProps>),
 { ssr:false }
);

const DetectSong = () => {
 const [audioFile, setAudioFile] = useState<File | null>(null);
 const [isRecording, setIsRecording] = useState(false);
 const fileInputRef = useRef<HTMLInputElement>(null);

 const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
     const file=event.target.files?.[0];
     if(file){
       setAudioFile(file);
     }
 };

 const handleSelectClick=()=>{
     // Simulate a click on the hidden file input element
     fileInputRef.current?.click();
 };

	const toggleRecording=()=>{
		setIsRecording(!isRecording);
	};

	const onDataRecorded=(recordedBlob:any)=>{
        console.log('chunk of real-time data is:', recordedBlob);
	};
	
	const onStopRecorded=(recordedBlob:any)=>{
        console.log('record blob is:', recordedBlob)
        setAudioFile(recordedBlob.blob)
        setIsRecording(false)
	};
  	
	return (
	    <div>
	        <Header />
	        <div className={styles.container}>
	            <h1 className={`${styles.title} ${styles.spacing}`}>To get the song that you wanted</h1>
	            {/* The actual mic component */}
                <div style={{ height:'0', overflow:'hidden' }}>
                    {isRecording && (
                        <ReactMic 
                            record={true}
                            className="sound-wave"
                            onStop={onStopRecorded}
                            onData={onDataRecorded}
                            strokeColor="#000000"
                            backgroundColor="#FF4081" 
                        />
                    )}
                </div>

                {/* Dropzone */}
                <div className={`${styles.dropzone}`}>
                  {/* Single button to start/stop recording */}
                  <button onClick={toggleRecording} 
                          className={`${styles.buttonBase} ${styles.detectButton}`} 
                          style={{backgroundColor: isRecording ? "darkgrey" : "lightgrey"}}>
                      {/* Use SVG as an image source instead of importing it as a component */}
                      <img src="/Images/recording.svg" alt="Recording Icon" className={styles.recordingIcon} />
                  </button>

                  {/* Text Element */}
                  <p className={styles.orText}>or</p>

                  {/* Select File Button and Hidden Input Field */}
                  <button onClick={handleSelectClick} className={`${styles.buttonBase} ${styles.selectButton}`}>
                      Select File
                  </button>
                  
                  <input 
                    type="file" 
                    accept="audio/*" 
                    onChange={handleFileChange} 
                    ref={fileInputRef}
                    style={{ display:'none' }} // Hide the default input field
                  />
                 </div>
	         </div>
	     </div>);
};

export default DetectSong;
