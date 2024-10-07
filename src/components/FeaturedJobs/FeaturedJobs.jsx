import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  //  show all data
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="mt-10">
      <div className="text-center bg-slate-100 shadow-xl py-4">
        <h1 className="font-mono font-extrabold text-5xl text-black">
        Featured Jobs{" "}
        </h1>
        <p className="font-mono font-medium text-[#757575] text-xl mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary mt-8 mb-8 items-center ml-[47%]"
        >
          See All jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
