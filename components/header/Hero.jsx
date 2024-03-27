const Hero = ({ title, subTitle }) => {
  return (
    <header className="h-[500px] bg-center flex flex-col-reverse  bg-cover w-full bg-[url('/header.webp')]">
      <div className="bg-[rgba(0,0,0,0.7)] h-[500px] flex items-center">
        <div className="mb-5 w-10/12 max-w-7xl text-white mx-auto ">
          <h1 className="text-2xl lg:text-3xl font-serif">{title}</h1>
          <p>{subTitle}</p>
          <button className="bg-[#ffd160] hover:bg-[#e4be60] border border-black w-60 mt-2 py-3 rounded-full text-center text-black">
            Get the Weekly Kit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
