import HomeImage from '../assets/home.png';

export default function Home() {
  return (
    <div id="home">
      <img src={HomeImage} alt="Home" />
      <div className="cta animate-charcter">a shop made for you</div>
    </div>
  );
}
