import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import './main-second-folder.scss'
const contact = [
  {
    id: "ashok",
    status:"online",
    name: "Sohan Lal Jat",
    image: "https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg",
  },
  {
    id: "kamlesh",
    name: "Manish Yadav",
    image: "https://scontent.fjai1-2.fna.fbcdn.net/v/t39.30808-1/450611951_2171870229856890_3184289842668234936_n.jpg?stp=dst-jpg_s480x480&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=xGHdB7jQtugQ7kNvgFGtq9c&_nc_ht=scontent.fjai1-2.fna&oh=00_AYA7wTZ_AfJpG3JB50GSpGOwrHst4NDX6HFivDZz3Tkvcg&oe=66DF4C99",
    status: "online",
    
  },
  {
    id: "akhilesh",
    name: "Akshya Kumar",
    status: "offline",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Akshay_Kumar.jpg",
  },
  {
    id: "vikram",
    name: "Salman Khan",
    status: "offline",
    image: "https://images.filmibeat.com/img/popcorn/profile_photos/salman-khan-20221126110012-15.jpg"
  },
  {
    id: "manoj",
    name: "Sahrrukh Khan",
    status: "online",
    image: "https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "Mahesh",
    name: "Kaitrina Kaif",
    status: "online",
    image: "https://variety.com/wp-content/uploads/2024/04/Katrina-Kaif.jpg?w=1000&h=667&crop=1",
  },
  {
    id: "sitaram",
    name: "Deepika Padukon",
    status: "offline",
    image: "https://images.news18.com/ibnlive/uploads/2021/01/1610175910_deepika-padukone-10.jpg",
  },
  {
    id: "rahul",
    name: "Sunny Leony",
    status: "offline",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sunny_Leone_promotes_Raees-2.jpg/220px-Sunny_Leone_promotes_Raees-2.jpg",
  },
  {
    id: "suresh",
    name: "Shurti Hasan",
    status: "online",
    image: "https://assets.thehansindia.com/h-upload/2023/01/19/1330618-shruti-haasan-biography-wiki-age.webp",
  },
  {
    id: "manish",
    name: "Madhuri Dixit",
    status: "offline",
    image: "https://static.toiimg.com/thumb/imgsize-23456,msid-112050888,width-600,resizemode-4/112050888.jpg",
  },
  {
    id: "ayush",
    status:"online",
    name: "Kalu Ram",
    image: "https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg",
  },
  {
    id: "nilam",
    status:"online",
    name: "Neelam",
    image: "https://mrwallpaper.com/images/thumbnail/cute-brunette-profile-picture-rawnnhmrk168c9zk.webp",
  },
  {
    id: "dipika",
    status:"offline",
    name: "Deepika",
    image: "https://cdn4.sharechat.com/compressed_gm_40_img_724387_d110bd8_1698681721588_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=588_sc.jpg",
  },
  {
    id: "prachi",
    status:"online",
    name: "Prachi",
    image: "https://cdn4.sharechat.com/img_1599842794_194217_9001cdd_1663260840440_sc.jpg?tenant=sc&referrer=feed-service&f=440_sc.jpg",
  },
];
const MainContact = () => {
  return (
    <div className="contact-section">
      <div className="fd-title">
        <h4>Friend Request</h4>
        <p>See all</p>
      </div>
      <div className="fd-request">
        <div className="pro-div">
          <img
            src="https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIDDNdtkdydGNodmgmCvGi4eVSufZWTburveYfejSged0&oe=66ED6391&_nc_sid=5e03e0&_nc_cat=104"
            alt="fd"
            className="user-img"
          />
          <div className="fd-name">
            <div className="fd-head">
              <h4>Sohan Lal Jat</h4>
              <p>
                <img
                  src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                  alt="ll"
                  className="mut-img"
                />
                <img src="https://sharedp.com/wp-content/uploads/2024/05/whatsapp-dp-for-boys-love-1024x1024.jpg" className="mut-img1" alt="kk"/> 5 mutual friends </p>
            </div>
            <p> 2w<GoDotFill className="p-icon" /></p>
          </div>
        </div>
        <div className="btn-div">
          <button type="submit" className="conf-btn">
            Confirm
          </button>
          <button type="submit" className="can-btn">
            Delete
          </button>
        </div>
      </div>
      <hr />
      <div className="birth-div">
        <h4>Birthdays</h4>
        <div className="birth-detail">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/704/175/small_2x/3d-illustration-icon-of-gift-box-with-heart-for-ui-ux-web-mobile-app-social-media-ads-png.png"
            alt="jj"
          />
          <p>
            <b>Sohan Lal Jat</b> and <b>Sonakshi Sinha</b> have birthdays today.
          </p>
        </div>
      </div>
      <hr />
      <div className="contact-head">
        <h4>Contacts</h4>
        <div className="fd-icon">
          <IoIosSearch />
          <BsThreeDots />
        </div>
      </div>
      <div className="contact-div">
        {contact.map((el) => (
             el.status==="online" ?(
          <li key={el.name}>
            <img src={el.image} alt="jjj" />
              <FaCircle className="status" /> 
            <p>{el.name}</p>               
          </li>
             ):el.status==="offline"? (
                <li key={el.name}>
                <img src={el.image} alt="jjj" />
                <p>{el.name}</p> </li>
             ):null
            )
        )
    }
      </div>
    </div>
  );
};
export default MainContact;