# Music Share

Inspired by Soundcloud, Music Share is a music streaming and sharing platform. Upload your own, or listen to songs posted by your friends!  

Check it out!  
https://music-share-cyli.onrender.com  


## Technologies Used

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />

## Splash Page

<img width="1470" alt="Screenshot 2023-06-20 at 4 02 47 PM" src="https://github.com/samhovie/music-share/assets/33816775/02b4eb96-f040-43ab-a146-f14bd25c30ba">

## Playlists

<img width="1470" alt="Screenshot 2023-06-20 at 3 59 23 PM" src="https://github.com/samhovie/music-share/assets/33816775/99793b50-1d9a-4c07-a465-1dfa9e86ad5a">

## Feed 

<img width="1470" alt="Screenshot 2023-06-20 at 4 00 49 PM" src="https://github.com/samhovie/music-share/assets/33816775/efbcd318-db5c-43e0-8d8a-b180433b78d7">

## Getting started
1. Clone this repository (only this branch)

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


## Find us on Socials!
https://www.linkedin.com/in/samhovie/  
https://www.linkedin.com/in/efrenlcruzada/  
https://www.linkedin.com/in/katie-geyer-087a21169/  
https://github.com/codenamejetro




