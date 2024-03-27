const NotFond = () => {
  return (
    <div className=" w-full text-yellow-500 mt-8   absolute top-0 left-0 flex justify-center items-center flex-col">
      <h1 className="text-2xl">
        No Category product was available for the request{" "}
      </h1>
      <h2 className="text-xl">this is viewed as an error</h2>
      <p className="text-xl">Please Try again</p>
    </div>
  );
};

export default NotFond;
