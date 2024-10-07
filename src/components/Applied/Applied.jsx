
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import { IoLocationSharp } from "react-icons/io5";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {


            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            <div className="">
                {
                    // displayJobs.map(job => <li key={job.id}>
                    //     <span>{job.job_title} {job.company_name}: {job.remote_or_onsite} </span>
                    // </li>)
                    displayJobs.map(job=> <div className="w-full  " key={job.id}>
                    <div className="grid grid-cols-3 items-center">
                    <div>
                      <img src={job.logo}alt="" />
                      </div>
                        <div className="mt-4">
                        <h2 className="font-extrabold text-2xl">{job.job_title}</h2>
                        <p className="font-medium text-[16px] text-[#757575]">{job.company_name}</p>
                        <div className="">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job.remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job.job_type}
          </button>
        </div>
        <div className="mt-3 mb-10 flex">
          <h2 className="flex mr-4">
            <IoLocationSharp className="text-2xl mr-2"></IoLocationSharp>{" "}
            {job.location}
          </h2>
          <h2 className="flex">
            {" "}
            <PiCurrencyCircleDollarFill className="text-2xl"></PiCurrencyCircleDollarFill>{" "}
            {job.salary}
          </h2>
        </div>
                        </div>
             
      
       <Link> <button className="btn btn-primary w-52 mt-5  mb-10">View Details</button></Link>
                    </div>


                    </div>)

                }
            </div>
        </div>
    );
};

export default AppliedJobs;