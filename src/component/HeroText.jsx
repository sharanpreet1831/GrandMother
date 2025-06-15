import mainphoto from '../assets/mainphoto.jpeg'
function HeroText() {
  return (
    <div className="mb-6 py-12 md:py-16 max-w-screen mx-auto text-center">
      <h1 className="text-3xl md:text-4xl lg:text-4.5xl font-extrabold text-gray-800 mb-4 leading-tight">
        The Taste Of Punjab&nbsp;
      </h1>
      <img
        src={mainphoto}
        alt="Taste of Punjab"
        className="mt-6 mx-auto rounded-lg shadow-lg max-w-5xl"
      /> 
    </div>
  );
}

export default HeroText;