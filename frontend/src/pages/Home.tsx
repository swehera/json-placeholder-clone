const Home = () => {
  const headtitle = "{JSON} Placeholder";
  return (
    <div className=" px-48 py-5 mt-28">
      <p className=" text-6xl text-gray-700">{headtitle}</p>
      <div className=" mt-12 flex flex-col gap-3">
        <p className=" text-2xl text-gray-700">
          Free fake API for testing and prototyping.
        </p>
        <p className=" text-2xl text-gray-700">Created by Lutfor Rahman Hira</p>
        <p className=" font-bold text-gray-700 mt-5">
          Serving ~2 billion requests each month.
        </p>
      </div>
    </div>
  );
};

export default Home;
