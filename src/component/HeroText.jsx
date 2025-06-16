import mainphoto from '../assets/mainphoto.jpeg';

function HeroText() {
  return (
    <div
      className="mb-6 py-12 md:py-16 max-w-screen mx-auto text-center"
      style={{
        // background: 'linear-gradient(135deg, #e6ffe6 0%, #f0fff4 100%)',
      }}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
        <span
          style={{
            color: '#008000',
            textShadow: '0 2px 16px #bfffc6',
            transition: 'color 0.3s',
            display: 'inline-block',
          }}
        >
          The
        </span>
        &nbsp;
        <span
          style={{
            color: '#34a853', // secondary green
            textShadow: '0 2px 16px #e6ffe6',
            transition: 'color 0.3s',
            display: 'inline-block',
          }}
        >
          Taste
        </span>
        &nbsp;
        <span
          style={{
            color: '#014421', // dark green for contrast
            textShadow: '0 2px 16px #bfffc6',
            transition: 'color 0.3s',
            display: 'inline-block',
          }}
        >
          Of
        </span>
        &nbsp;
        <span
          style={{
            background: 'linear-gradient(90deg,#008000,#34a853,#bfffc6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 900,
            textShadow: '0 2px 16px #e6ffe6',
            display: 'inline-block',
          }}
        >
          Punjab
        </span>
      </h1>
      <img
        src={mainphoto}
        alt="Taste of Punjab"
        className="mt-6 mx-auto rounded-lg shadow-lg max-w-5xl w-full md:w-4/5 lg:w-3/5"
        style={{
          border: '4px solid #008000',
          boxShadow: '0 6px 32px 0 #00800055',
        }}
      />
    </div>
  );
}

export default HeroText;