import { useLoaderData, useParams } from "react-router-dom";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";




const JobDetails = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    const job=jobs.find(job=>job.id==idInt);
    console.log(job);
    const handleApplyJob=()=> {
        saveJobApplication(idInt)
        toast('your apply successfully')
    }
    return (
       

    
        <div>
            <h1 className=" text-cyan-300 font-extrabold text-center text-4xl mt-7 mb-8">Job Details:</h1>
        <div className="grid gap-4 md:grid-cols-4 ">
            <div className="border md:col-span-3 p-5 mb-6 ">
                <h2 className="text-xl font-extrabold font-mono"> Job Description:<span className="font-medium text-[16px] font-sans text-[#757575]">{job.job_description}</span></h2>
                <h2 className="text-xl mt-10 font-extrabold font-mono"> Job Responsibility:<span className="font-medium text-[16px] text-[#757575]  font-sans">{job.job_responsibility}</span></h2>
                <h2 className="text-xl mt-10 font-extrabold font-mono">Educational Requirements:</h2>
                <p className="font-medium text-[16px] text-[#757575] mt-4 font-sans">{job.educational_requirements}</p>
                <h2 className="text-xl mt-10 font-extrabold font-mono">Educational Experiences:</h2>
                <p className="font-medium text-[16px] text-[#757575] mt-4 font-sans">{job.experiences}</p>
               
            </div>
            <div className="border p-8 mb-6">
                <h2 className="text-2xl  font-extrabold font-mono">Job Details:</h2>
                <div className="w-full bg-[#9873FF] h-1 mt-5 mb-6"></div>
                <div className="flex items-center gap-3">
                   <PiCurrencyCircleDollarFill  className="text-2xl"></PiCurrencyCircleDollarFill>
                    <h2 className="font-bold font-mono text-xl">Salary: <span className="font-medium font-sans text-[16px]  text-[#757575]">{job.salary}</span></h2>
                </div>
                <div className="flex items-center mt-5 gap-3">
                   <RiContactsBook2Fill className="text-4xl"></RiContactsBook2Fill>
                    <h2 className="font-bold font-mono text-xl">Job Title: <span className="font-medium font-sans text-[16px]  text-[#757575]">{job.job_title}</span></h2>
                </div>
                <h2 className="font-extrablod font-mono text-xl mt-6">Contact Information</h2>
                <div className="w-full bg-[#9873FF] h-1 mt-2"></div>
                <div className="flex items-center mt-5">
                    <FaPhone className="flex"></FaPhone>
                  <h3 className="font-bold font-mono text-xl ml-3">Phone: <span className="font-medium font-sans text-[16px]  text-[#757575]">  {job.contact_information.phone}</span></h3>
                </div>
                <div className="flex items-center mt-2">
                    <MdOutlineEmail className="text-3xl"></MdOutlineEmail>
                  <h3 className="font-bold font-mono text-xl ml-3">Email: <span className="font-medium font-sans text-[16px]  text-[#757575]">  {job.contact_information.email}</span></h3>
                </div>
                <div className="flex items-center mt-2">
                    <IoLocationSharp className="text-3xl"></IoLocationSharp>
                  <h3 className="font-bold font-mono text-xl ml-3">Address: <span className="font-medium font-sans text-[16px]  text-[#757575]">  {job.contact_information.address}</span></h3>
                </div>
            
                <button onClick={handleApplyJob} className="btn btn-primary w-full mt-5">Apply Now</button>
            </div>
        </div>
        <ToastContainer />
    </div>
    );
};

export default JobDetails;