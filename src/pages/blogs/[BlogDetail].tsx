import GeneralHeading from "@/components/Heading/GeneralHeading";
import { BLOGS_DATA } from "@/sections/blogs/blog/BlogData";
import ApplyJobForm from "@/sections/careers/Jobs/ApplyJobForm";
import Image from "next/image";
// import { JOBS_DATA } from "@/sections/careers/Jobs/jobsData";
import { useRouter } from "next/router";

export default function BlogDetail() {
    const router = useRouter();
    const { BlogDetail } = router.query;
    const blog = BLOGS_DATA.find((blog) => blog?.id === Number(BlogDetail));
    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className="container">
            <div className="mb-[200px]  mt-[80px]">
                     <div className="relative w-full h-[600px]">
                     <Image src={blog.image} alt={""}   fill sizes="100vw" objectFit="cover" className="rounded-3xl"/>
                     </div>
                  
                    <GeneralHeading className={"text-left mt-[60px]"} heading={blog.title} />         
                    <h2 className="text-2xl font-poppins font-semibold mb-[12px] mt-[60px]">Responsibilities</h2>
                    <ul className="font-poppins text-lg text-grey">
                        <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                        <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                        <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                        <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                        <li>Vulputate placerat amet pulvinar lorem nisl.</li>{" "}
                        <li>Vulputate placerat amet pulvinar lorem nisl.</li>{" "}
                        <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                    </ul>
                    <h2 className="text-2xl font-poppins font-semibold mb-[12px] mt-[60px]">Benefits</h2>
                    <ul className="font-poppins text-lg text-grey">
                        <li>Dui, lectus at dui magna vitae vitae egestas sed.</li>
                        <li>Dui, lectus at dui magna vitae vitae egestas sed.</li>
                        <li>Dui, lectus at dui magna vitae vitae egestas sed.</li>
                        <li>Dui, lectus at dui magna vitae vitae egestas sed.</li>
                        <li>Dui, lectus at dui magna vitae vitae egestas sed.</li>{" "}
                        <li>Dui, lectus at dui magna vitae vitae egestas sed.</li>{" "}
                        <li>Dui, lectus at dui magna vitae vitae egestas sed.</li>
                    </ul>
                    <h2 className="text-2xl font-poppins font-semibold mb-[12px] mt-[60px]">What you can expect from us after applying</h2>
                    <p className="font-poppins text-lg text-grey">Once you've applied, sit back and relax while we get to work on our side! You can expect to hear back from us within 3 working days. Our recruitment team will call you up on the provided contact number for initial screening. Good luck!</p>
            </div>
        </div>


    );
}
