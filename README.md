# CSSFLEX

### HEADER

HTML

    <!DOCTYPE html>
    <html>
    <head>
      <title>JFS</title>
    </head>
    <body>
      <header>
      <div class="logo">
        <h1>JFS</h1>
      </div>
      <nav class="navbar">
        <ul>
          <li><a routerLink="homepage">Home</a></li>
          <li><a routerLink="artist">Artists</a></li>
          <li><a routerLink="album">Albums</a></li>
          <li><a routerLink="shows">Shows</a></li>
          <li><a routerLink="social">Social Medias</a></li>
        </ul>
      </nav>
    </header>
    </body>
    <router-outlet></router-outlet>
    </html>

CSS

    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
      outline: none;
      border:none;
      text-decoration: none;
      font-family: "Georgia", serif;
    }
    
    body {
      background-color: #f4f4f4;
    }
    
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
      background-color: #333;
      color: white;
    }
    
    .logo {
      display: flex;
      align-items: center;
    }
    
    .logo h1 {
      font-size: 23px;
      font-weight: bold;
      color: #3498db;
    }
    
    .navbar ul {
      list-style: none;
      display: flex;
      gap: 25px;
    }
    
    .navbar ul li a {
      text-decoration: none;
      color: white;
      font-size: 18px;
    }
    
    .navbar ul li a:hover {
      color: #3498db;
    }

## HOMEPAGE

HTML

    <!DOCTYPE html>
    <html>
    <head>
      <title>Home</title>
    </head>
    <body>
      <div class="container">
        <header>
          <h2>Welcome to My <br> Music Portal</h2>
          <p>My journey through sound starts here!</p>
        </header>
      </div>
    </body>
    </html>

CSS

    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
      outline: none;
      border:none;
      text-decoration: none;
      font-family: "Georgia", serif;
    }
    
    body {
      background: url(https://img.freepik.com/premium-photo/three-colorful-cassette-tapes-arranged-diagonally-pastel-background_14117-1073526.jpg?w=900) no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 89.5vh;
      text-align: center;
    }
    
    .container  h2{
      font-size: 3rem;
      color:var(--white);
    }
    
    .container p{
      font-size: 1.8rem;
      color:var(--light-white);
      padding:1rem 0;
      line-height: 1.5;
    }

![Screenshot (5785)](https://github.com/user-attachments/assets/aeb9c764-7d3b-4eab-a0d5-86a8522bf209)

## ARTISTS PAGE

HTML

    <!DOCTYPE html>
    <html>
    <head>
      <title>Artist</title>
    </head>
    <body>
      <div class="container">
        <h2>My Favorite Artists</h2>
        <div class="grid">
          <div class="card">
            <img src="https://pbs.twimg.com/media/F8w0rvVXkAAcjAh?format=jpg&name=4096x4096">
            <h3>Taylor Swift</h3>
          </div>
          <div class="card">
            <img src="https://pbs.twimg.com/media/B66oS3kCIAAzmx0?format=jpg&name=small">
            <h3>One Direction</h3>
          </div>
          <div class="card">
            <img src="https://i.pinimg.com/564x/09/d7/d2/09d7d21db6fd39f660469ae938c5c9ec.jpg">
            <h3>Exo</h3>
          </div>
          <div class="card">
            <img src="https://i.pinimg.com/736x/b1/73/92/b17392bda201abaaf5d3cfc3b084a93e.jpg">
            <h3>Seventeen</h3>
          </div>
          <div class="card">
            <img src="https://i.pinimg.com/control/564x/ad/6b/2a/ad6b2a422ab3e64ddb498951cd8ee970.jpg">
            <h3>Stray Kids</h3>
          </div>
        </div>
      </div>
    </body>
    </html>

CSS

    *{
      margin:0;
      padding:0;
      outline: none;
      border:none;
      text-decoration: none;
      font-family: "Georgia", serif;
    }
    
    .container {
      background-color: #b4c8ea;
      text-align: center;
      padding: 15px;
      height: auto;
    }
    
    h2{
      padding: 10px;
      font-size: 3rem;
    }
    
    h3{
      padding: 15px;
    }
    
    .grid {
      display: flex;
      justify-content: space-around;
      padding: 10px;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .card {
      flex: 1 1 calc(33% - 50px);
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #ddd;
      padding: 15px;
      background-color: #ffdcdb;
    }
    
    .card img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

![Screenshot (5786)](https://github.com/user-attachments/assets/1ad3fe55-f459-4c80-8383-89af2a19790f)

## ALBUMS PAGE

HTML

    <!DOCTYPE html>
    <html>
    <head>
      <title>Album</title>
    </head>
    <body>
      <div class="container">
        <h2>Albums I Love</h2>
        <div class="grid">
          <div class="card">
            <img src="https://pbs.twimg.com/media/GFgdxxSbcAAudI3?format=jpg&name=large">
            <h3>reputation</h3>
          </div>
          <div class="card">
            <img src="https://pbs.twimg.com/media/D8-LieAWsAAaiTS?format=jpg&name=large">
            <h3>Lover</h3>
          </div>
          <div class="card">
            <img src="https://pbs.twimg.com/media/Edm_3QqWkAE4mfb?format=jpg&name=large">
            <h3>Folklore</h3>
          </div>
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/One_Direction_-_Four.png">
            <h3>Four</h3>
          </div>
          <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/2/28/One_Direction_Midnight_Memories_%28Official_Album_Cover%29.png">
            <h3>Midnight Memories</h3>
          </div>
          <div class="card">
            <img src="https://thebiaslist.com/wp-content/uploads/2021/06/exo-dont-fight-the-feeling.jpg">
            <h3>Don't Fight the Feeling</h3>
          </div>
          <div class="card">
            <img src="https://i.scdn.co/image/ab67616d0000b2730fe2deadb7db9b91d1c30fac">
            <h3>Noeasy</h3>
          </div>
          <div class="card">
            <img src="https://i.scdn.co/image/ab67616d0000b273decd839dd4fef3faf64c5fd5">
            <h3>Face the Sun</h3>
          </div>
          <div class="card">
            <img src="https://cdns-images.dzcdn.net/images/cover/1c10c0aab6317c66b76d8962bc32c39e/500x500.jpg">
            <h3>Maniac</h3>
          </div>
        </div>
      </div>
    </body>
    </html>

CSS

    *{
      margin:0;
      padding:0;
      outline: none;
      border:none;
      text-decoration: none;
      font-family: "Georgia", serif;
    }
    
    .container {
      background-color: #b4c8ea;
      text-align: center;
      padding: 15px;
      height: auto;
    }
    
    h2{
      padding: 10px;
      font-size: 3rem;
    }
    
    h3{
      padding: 15px;
    }
    
    .grid {
      display: flex;
      justify-content: space-around;
      padding: 10px;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .card {
      flex: 1 1 calc(33% - 50px);
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #ddd;
      padding: 15px;
      background-color: #ffdcdb;
    }
    
    .card img {
      width: 150px;
      height: 150px;
    }

![Screenshot (5787)](https://github.com/user-attachments/assets/81551873-a541-470a-a32a-d8e7636d4b30)

## SHOWS PAGE

HTML

    <!DOCTYPE html>
    <html>
    <head>
      <title>Shows</title>
    </head>
    <body>
      <div class="container">
        <h2>All Time Favorite Shows</h2>
        <div class="grid">
          <div class="card">
            <img src="https://cdn.gencraft.com/prod/user/024b67dd-d5ff-4103-9495-ce5dfc139ac3/57c62703-0fc4-4d40-b8e7-c33571f37cf1/image/image1_0.jpg?Expires=1729685179&Signature=NkcE5erjCksKyw6QyCTIYykvZ~X3Hpz24dLcB3sE-WYnIK9kEv7wc1jUhGEGdKFQOpCrR4wPAQlg1kp3UNyIgw7PsqEp4UUnFx-8XI7PVyjl~~KrziahcsbqJd9Zl2yvBwi4BK3Cut4uqebRxQAh-BD1gJ68JE76oAc-D8Hve8tJAThVtb1jQ1cr3TVRXUb2Ar-4TKr7JB0Lu7rlVk5mrCPVxx-6uhvGxro5f6PTJlx1fE7oTT4mEb6HVkHhplCGLJPOCU0rgDvOKE9X2ExGA0BLrNSpCQYG3xq1cyiciyCgQcY84pyKk68savivk8giSS0ylLQLdL6Vz~Q6Awib-A__&Key-Pair-Id=K3RDDB1TZ8BHT8">
            <a class="button" href="https://www.viki.com/tv/40093c-exos-travel-the-world-on-a-ladder-in-geojetongyeong"> Exo Ladder </a>
            <p>EXO's travel variety show features the members embarking on fun adventures, with their decisions determined by the ladder game. This twist leads to humorous situations while showcasing their personalities, teamwork, and playful interactions as they explore new places and tackle challenges.</p>
          </div>
          <div class="card">
            <img src="https://ih1.redbubble.net/image.1387172621.9311/tst,small,507x507-pad,600x600,f8f8f8.jpg">
           <a class="button" href="https://www.youtube.com/playlist?list=PLlPEnFOHdW53iPYEK3UGzl8PKrQHt2khR"> Going Seventeen </a>
            <p>SEVENTEEN's variety show features the members engaging in activities based on a specific concept. From games and challenges to skits and get-togethers, the show highlights their chemistry and teamwork, giving fans an entertaining glimpse into their lives.</p>
          </div>
          <div class="card">
            <img src="https://i.etsystatic.com/33946475/r/il/d6f0f5/4072975048/il_300x300.4072975048_jtfm.jpg">
            <a class="button" href="https://www.youtube.com/playlist?list=PL2HLJ87twWI1DhyFxYbQRB4_JLKPIYXli"> SKZ Code </a>
            <p>Stray Kids variety show where the members engage in fun activities based on a theme. From missions and puzzles to role-playing, the show highlights their teamwork and playful dynamics, offering fans a closer look at their personalities and chemistry.</p>
          </div>
        </div>
      </div>
    </body>
    </html>

CSS

    *{
      margin:0;
      padding:0;
      outline: none;
      border:none;
      text-decoration: none;
      font-family: "Georgia", serif;
    }
    
    .container {
      background-color: #b4c8ea;
      text-align: center;
      padding: 15px;
      height: 85vh;
    }
    
    h2{
      padding: 10px;
      font-size: 3rem;
    }
    
    a{
      display: inline-block;
      margin: 10px;
      padding:10px 20px;
      cursor: pointer;
      color:black;
      background-color: #E4B1F0;
      font-size: 18px;
      border-radius: 5px;
    }
    
    .grid {
      display: flex;
      justify-content: space-around;
      padding: 10px;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .card {
      flex: 1 1 calc(33% - 50px);
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #ddd;
      padding: 15px;
      background-color: #ffdcdb;
    }
    
    .card img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

![Screenshot (5789)](https://github.com/user-attachments/assets/07a73bfb-0e93-4b90-b606-39a301fe7464)

## SOCIAL MEDIAS PAGE

HTML

    <!DOCTYPE html>
    <html>
    <head>
      <title>Social Medias</title>
    </head>
    <body>
      <div class="container">
        <h2>Social Medias</h2>
        <div class="grid">
          <div class="card">
              <img src="https://cdn-icons-png.freepik.com/256/15707/15707884.png?semt=ais_hybrid">
              <h3>Facebook</h3>
              <ul>
                <li><a href="https://www.facebook.com/TaylorSwift/">Taylor Swift</a></li>
                <li><a href="https://www.facebook.com/onedirectionmusic/">One Direction</a></li>
                <li><a href="https://www.facebook.com/weareoneEXO/">Exo</a></li>
                <li><a href="https://www.facebook.com/seventeennews/">Seventeen</a></li>
                <li><a href="https://www.facebook.com/JYPEStrayKids/">Stray Kids</a></li>
              </ul>
          </div>
          <div class="card">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png">
              <h3>Twitter</h3>
              <ul>
                <li><a href="https://x.com/taylorswift13">Taylor Swift</a></li>
                <li><a href="https://x.com/onedirection">One Direction</a></li>
                <li><a href="https://x.com/weareoneexo">Exo</a></li>
                <li><a href="https://x.com/pledis_17">Seventeen</a></li>
                <li><a href="https://x.com/Stray_Kids">Stray Kids</a></li>
              </ul>
          </div>
          <div class="card">
              <img src="https://cdn-icons-png.freepik.com/256/15707/15707869.png?semt=ais_hybrid">
              <h3>Instagram</h3>
              <ul>
                <li><a href="https://www.instagram.com/taylorswift/">Taylor Swift</a></li>
                <li><a href="https://www.instagram.com/onedirection/">One Direction</a></li>
                <li><a href="https://www.instagram.com/weareone.exo/">Exo</a></li>
                <li><a href="https://www.instagram.com/saythename_17/">Seventeen</a></li>
                <li><a href="https://www.instagram.com/realstraykids/">Stray Kids</a></li>
              </ul>
          </div>
          <div class="card">
            <img src="https://cdn-icons-png.freepik.com/256/15707/15707874.png?semt=ais_hybrid">
            <h3>Youtube</h3>
            <ul>
              <li><a href="https://www.youtube.com/@TaylorSwift">Taylor Swift</a></li>
              <li><a href="https://www.youtube.com/@onedirectionchannel">One Direction</a></li>
              <li><a href="https://www.youtube.com/@weareoneEXO">Exo</a></li>
              <li><a href="https://www.youtube.com/@pledis17">Seventeen</a></li>
              <li><a href="https://www.youtube.com/@StrayKids">Stray Kids</a></li>
            </ul>
        </div>
        <div class="card">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green-300x300.png">
          <h3>Spotify</h3>
          <ul>
            <li><a href="https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02">Taylor Swift</a></li>
            <li><a href="https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq">One Direction</a></li>
            <li><a href="https://open.spotify.com/artist/3cjEqqelV9zb4BYE3qDQ4O">Exo</a></li>
            <li><a href="https://open.spotify.com/artist/7nqOGRxlXj7N2JYbgNEjYH">Seventeen</a></li>
            <li><a href="https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE">Stray Kids</a></li>
          </ul>
      </div>
        </div>
      </div>
    </body>
    </html>

CSS

    *{
      margin:0;
      padding:0;
      outline: none;
      border:none;
      text-decoration: none;
      font-family: "Georgia", serif;
    }
    
    .container {
      background-color: #b4c8ea;
      text-align: center;
      padding: 15px;
      height: 85vh;
    }
    
    h2{
      padding: 10px;
      font-size: 3rem;
    }
    
    h3{
      padding: 15px;
    }
    
    .grid {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .card {
      flex: 1 1 calc(33% - 40px);
      text-align: center;
      padding: 15px;
    }
    
    .card img {
      width: 50px;
      height: 50px;
      margin-bottom: 10px;
    }
    
    .card ul {
      list-style: none;
    }
    
    .card ul li a {
      text-decoration: none;
      font-size: 18px;
    }

![Screenshot (5790)](https://github.com/user-attachments/assets/b67d97e4-d9a7-4a21-930a-51da7d36d85e)



