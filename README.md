# RailRush-React-App
This repository consists code of the Server-side and client-side of Rail-Rush project.

For the backend computer-vision model check out this [repository](https://github.com/husainattar/Rail-Rush)

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

