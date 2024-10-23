import GeneralHeading from "@/components/Heading/GeneralHeading";
import ApplyJobForm from "@/sections/careers/Jobs/ApplyJobForm";
import { JOBS_DATA } from "@/sections/careers/Jobs/jobsData";
import { useRouter } from "next/router";

export default function JobDetail() {
    const router = useRouter();
    const { JobDetail } = router.query;
    const job = JOBS_DATA.find((job) => job?.id === Number(JobDetail));

    console.log(job?.resonsibilities,"=====================================================================");
    if (!job) {
        return <div>Job not found</div>;
    }
    
    function handleItem(item:any){
        <p>{item.res}</p>
    }

    return (
        <div className="container">
            <div className="mb-[200px]  gap-[60px] mt-[80px]">
                <div className="">
                    <GeneralHeading className={"text-left"} heading={job.title} />
                    <h2 className="text-2xl font-poppins font-semibold mb-[12px] mt-[60px]">Overview</h2>
                    <p className="text-grey text-lg font-poppins">{job.description}</p>

                    <h2 className="text-2xl font-poppins font-semibold mb-[12px] mt-[60px]">Responsibilities</h2>
                   
                    <ul className="font-poppins text-lg text-grey" style={{listStyle: 'circle'}}>
                        {
                            job.resonsibilities.map((item,index):any => { return <li key={index}>{item.res}</li>}
                            )
                        }
                    </ul>               
 
                    <h2 className="text-2xl font-poppins font-semibold mb-[12px] mt-[60px]">Benefits</h2>
                    <ul className="font-poppins text-lg text-grey" style={{listStyle: 'circle'}}>
                        {
                            job.benefits.map((item,index):any => { return <li key={index}>{item.ben}</li>}
                            )
                        }
                    </ul>  
                 
                    <h2 className="text-2xl font-poppins font-semibold mb-[12px] mt-[60px]">What you can expect from us after applying</h2>
                    <p className="font-poppins text-lg text-grey">Once you've applied, sit back and relax while we get to work on our side! You can expect to hear back from us within 3 working days. Our recruitment team will call you up on the provided contact number for initial screening. Good luck!</p>
                </div>
                <div className=" mt-[80px]">
                    <ApplyJobForm />
                </div>

            </div>
        </div>


    );
}
