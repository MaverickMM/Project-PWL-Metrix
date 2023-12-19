const express = require('express');
const fileUpload = require('express-fileupload');
const axios = require('axios');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Use express-fileupload middleware
app.use(cors());
app.use(fileUpload());

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle audio file upload
app.post('/upload', async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      console.error('No file uploaded.');
      return res.status(400).send('No file uploaded.');
    }

    const audioFile = req.files.audio;
    const rawFilePath = __dirname + '/uploaded.raw';

    // Save the raw file
    await audioFile.mv(rawFilePath);

    console.log('Raw file saved successfully.');

    // Read the raw file as a byte array
    const rawBuffer = fs.readFileSync(rawFilePath);

    // Convert the byte array to base64
    const base64Data = rawBuffer.toString('base64');

    // Now, you can proceed to make the Shazam API call using the base64 data
    const shazamOptions = {
      method: 'POST',
      url: 'https://shazam.p.rapidapi.com/songs/v2/detect',
      params: {
        timezone: 'America/Chicago',
        locale: 'en-US',
      },
      headers: {
        'content-type': 'text/plain',
        'X-RapidAPI-Key': '5a1efbbdf3mshb7909fe3d931d6ap17410fjsn9540b090d835', // Replace with your actual key
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
      },
      data: base64Data, // Send the base64 data directly
    };

    // Make the Shazam API call
    const shazamResponse = await axios.request(shazamOptions);

    // Process the Shazam API response
    console.log('Shazam API Response:', shazamResponse.data);
    
    // Optionally, you can delete the raw file after processing
    fs.unlinkSync(rawFilePath);

    res.json(shazamResponse.data);
  } catch (error) {
    console.error('Error processing audio data:', error);
    res.status(500).send('Internal server error.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
