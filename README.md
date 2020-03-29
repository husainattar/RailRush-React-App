# RailRush-React-App
This repository consists code of the Server-side and client-side of Rail-Rush project.

For the backend computer-vision model check out this [repository](https://github.com/husainattar/Rail-Rush)

This application Shows the crowd in the **Mumbai local trains** and only western line is consider here.

### Tech-Stack
Server is built using MEN stack and client-side is built using React-Native.

Redis is also been used to cache the Number of people in the train for better performance.

Its a hybrid application which can run on both IOS & ANDROID.


### Server-Side
#### Features
* Backend server is used to receive the video from the **website/CCTV-Camera** and sends to **python CV Model** to process it.
* It receives the results from Model and stores in the **MongoDB database and Redis** and displays results to the **React app**.

#### Working folders
* Check out the controller folder for backend processing files listed below:
  - *pythonHandler.js* handles the python CV Model calls .
  - *crowdCount.js* gets the Crowd-Count sends to client-side.
  - *FileUpload.js*  handles the uploading the data file to the client.
  - *videoUploadHandler.js* handles uploading of video file to the Server using **Multer**

* *server.js* main server file.
 
### Database
* It stores the data of the train with fields like no. of people,Train-no.,dest and src and etc.
* We have used the Redis as caching system and MongoDB as the Major database
* check model >> *database.js* for working process

### Website/CCTV 
This component is the one whcih send the video to server for processing.

**Note** Here we have built a website for demonstration purpose but in real application this
logic would be implemented in the cctv camera of the platform.This camera would send the video to server to process 
and sends the results to the Client.

#### Working folders
* Check out the **public** folder for the website client logic.

### Client-Side (For the Users)
This is been built using ReactNative 

#### Features
* This will allow users to select where they want to go (dest)
* According on the choice of user's dest this will show the crowd in the trains.
* Eg if I select that I want to go to churchgate then it will show the train which is going towards churhgate with its current location and crowd.

#### Working folder
* Check out the **screen** for the design logic of each page/screen.
* Check out the **routes** for the navigation logic within the pages.
* App.js is the client-side main file.
