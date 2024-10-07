const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 items-center mb-3">
      <div>
        <h1 className="font-extrabold font-mono  text-black text-[80px] ">
          One Step Closer To Your <br />{" "}
          <span className="text-[#7E90FE]"> Dream Job</span>
        </h1>
        <p className="font-medium text-[18px] text-[#757575] mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="bg-[#9873FF] px-6 py-4 rounded-xl text-white font-extrabold"> Get Started</button>
      </div>
      <div>
        <img src="sulayman.png" alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
