import './main-story-cont.scss'
const storyData = [
    {
      username: "Add your story",
      userprofilepic:"https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-1/450611951_2171870229856890_3184289842668234936_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=xGHdB7jQtugQ7kNvgFGtq9c&_nc_ht=scontent.fjai1-2.fna&oh=00_AYA7wTZ_AfJpG3JB50GSpGOwrHst4NDX6HFivDZz3Tkvcg&oe=66DF4C99",
      storytype: "image",
      storyurl:"https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-1/450611951_2171870229856890_3184289842668234936_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=xGHdB7jQtugQ7kNvgFGtq9c&_nc_ht=scontent.fjai1-2.fna&oh=00_AYA7wTZ_AfJpG3JB50GSpGOwrHst4NDX6HFivDZz3Tkvcg&oe=66DF4C99",
    },
    {
      username: "Khatu Shyam",
      userprofilepic:"https://upload.wikimedia.org/wikipedia/commons/9/91/Khatu_Shyam_Temple.jpg",
      storytype: "video",
      storyurl: "https://www.bhajansangrah.in/apps/krishna/uploads/videos/1679921522_Khatu_Shyam_Reel_1_(11).mp4",
    },
    {
      username: "Love",
      userprofilepic:"https://wallpapers.com/images/hd/heart-touching-pictures-3flkqo2ve9ijlku8.jpg",
      storytype: "image",
      storyurl: "https://w0.peakpx.com/wallpaper/237/78/HD-wallpaper-heart-touching-white-marble-stone-creative-art-sea-waves-love.jpg",
    },
    {
      username: "Prince",
      userprofilepic:"https://howtodrawforkids.com/wp-content/uploads/2022/10/how-to-draw-a-prince.jpg",
      storytype: "video",
      storyurl:"https://videos.pexels.com/video-files/15465878/15465878-hd_1080_1920_30fps.mp4",
    },
    {
      username: "Manvay Singh",
      userprofilepic:"https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?cs=srgb&dl=pexels-pixabay-36029.jpg&fm=jpg",
      storytype: "image",
      storyurl:"https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288883.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726012800&semt=ais_hybrid",
    },
    {
        username: "Doggy",
        userprofilepic:"https://m.media-amazon.com/images/I/61N4Vb291QL._AC_UF894,1000_QL80_.jpg",
        storytype: "image",
        storyurl:"https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/german-shepherd-dog-breed-info.jpeg",
      },
  ];

const MainStory=()=>{
    return (
        <div className="story-section">
        {storyData.map((ele) => {
          return ele.storytype === "image" ? (
            
            <div className="story-card" key={ele.username}>
              <img src={ele.storyurl} alt="name" className="story-img" />
              <p className="span-name">{ele.username}</p>
              <img src={ele.userprofilepic} alt="profle" className="profile-pic" />
            </div>
          ) : ele.storytype === "video" ? (
            <div className="story-card" key={ele.username}>
              <video width="120" height="180" autoPlay muted loop>
                <source src={ele.storyurl} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
              <p className="span-name">{ele.username}</p>
              <img src={ele.userprofilepic} alt="profle" className="profile-pic" />
            </div>
          ) : null;
        })}
      </div>
    )
}
export default MainStory;