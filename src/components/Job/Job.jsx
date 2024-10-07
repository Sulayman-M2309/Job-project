import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="mt-8 flex">
          <h2 className="flex mr-4">
            <IoLocationSharp className="text-2xl mr-2"></IoLocationSharp>{" "}
            {location}
          </h2>
          <h2 className="flex">
            {" "}
            <PiCurrencyCircleDollarFill className="text-2xl"></PiCurrencyCircleDollarFill>{" "}
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
