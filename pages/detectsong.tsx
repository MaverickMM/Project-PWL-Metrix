import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card'; // Import the Card component
import '../styles/global.css';
import styles from './DetectSong.module.css';
import '../styles/cardDetect.css';

interface ReactMicProps {
  record: boolean;
  className?: string;
  onStop?: (recordedBlob: any) => void;
  onData?: (recordedBlob: any) => void;
  strokeColor?: string;
  backgroundColor?: string;
}

interface Song {
  track: any;
  title: string;
  subtitle: string;
  images: {
    coverart: string;
  };
}

const DetectSong = () => {
  // Assume shazamTopSongs is a single song object
  const [shazamTopSongs, setShazamTopSongs] = useState<Song | null>(null);

  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAudioFile(file);

      // Send the selected file to the server immediately
      await sendAudioToServer(file);
    }
  };

  const handleSelectClick = () => {
    // Simulate a click on the hidden file input element
    fileInputRef.current?.click();
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const onDataRecorded = (recordedBlob: any) => {
    console.log('chunk of real-time data is:', recordedBlob);
  };

  const onStopRecorded = (recordedBlob: any) => {
    console.log('record blob is:', recordedBlob);
    setAudioFile(recordedBlob.blob);
    setIsRecording(false);

    // Send the recorded audio to the server
    sendAudioToServer(recordedBlob.blob);
  };

  const sendAudioToServer = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('audio', file, file.name);

      const response = await axios.post('http://localhost:3001/upload', formData);

      console.log('Server response:', response.data);

      // Assuming response.data is a single song object
      setShazamTopSongs(response.data);
    } catch (error) {
      console.error('Error sending audio to server:', error);
    }
  };

  const ReactMic = dynamic(
    () => import('react-mic').then((mod) => mod.ReactMic as React.ComponentType<ReactMicProps>),
    { ssr: false }
  );

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={`${styles.title} ${styles.spacing}`}>To get the song that you wanted</h1>
        {/* The actual mic component */}
        <div style={{ height: '0', overflow: 'hidden' }}>
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
          <button
            onClick={toggleRecording}
            className={`${styles.buttonBase} ${styles.detectButton}`}
            style={{ backgroundColor: isRecording ? 'darkgrey' : 'lightgrey' }}
          >
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
            style={{ display: 'none' }} // Hide the default input field
          />
        </div>
      </div>

      {/* Display Shazam top song as a card */}
      {shazamTopSongs && (

        <div className="card-container">
          <Card
            title={shazamTopSongs.track.title}
            description={shazamTopSongs.track.subtitle}
            thumbnailUrl={shazamTopSongs.track.images.coverart}
          />
        </div>

      )}

      <Footer />
    </div>
  );
};

export default DetectSong;