import Image from "next/image";
import Typed from "typed.js";
import { useRef, useEffect, useState } from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validate from "../services/validation";

export default function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  const [contactData, setContactData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const options = {
      strings: ["Software Engineer", "Web Developer", "Web Designer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
      autoInsertCss: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setContactData({ ...contactData, [name]: value });
    const errorList = validate(name, value, errors);
    console.log(errorList, "rrr");
    setErrors(errorList);
  }

  function handleSubmit() {
    let errors = {};
    errors = validate("name", contactData.name, errors);
    errors = validate("email", contactData.email, errors);
    errors = validate("subject", contactData.subject, errors);
    errors = validate("message", contactData.message, errors);
    console.log(errors, "err");
    setErrors({ ...errors });
    if (Object.keys(errors).length) return;

    let data = {
      name: contactData.name,
      email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
    };
    console.log(data, "data");

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res, "Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        toast.success("Message send successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }

  return (
    <>
      <div className="hero-section" id="home">
        <div className="container flex flex-wrap pt-40">
          <div className="w-full md:w-3/5 mt-4 py-16">
            <div className="p-3 bg-white w-1/3 border border-gray-200 rounded-3xl text-sm text-center">
              Looking for a Developer !
            </div>
            <div className="flex mt-5">
              <h2 className="text-3xl md:text-5xl pr-4 font-bold">I Am</h2>
              <h2 className="text-3xl md:text-5xl text-blue-500 font-bold" ref={el} />
            </div>
            <p className="mt-4 text-gray-400">
              Obviously I am a Web Designer. Web Developer with over 3 years of
              experience. Experienced with all stages of the development
            </p>
            <div className="mt-7 flex space-x-6">
              <button
                type="button"
                className="px-8 py-2 bg-blue-500 rounded-xl text-white"
              >
                Hire Me
              </button>
              <a
                href="/assets/Ahata Sham Ul Haque Tushar.pdf"
                download
                className="flex items-center space-x-2 border border-blue-500 px-7 rounded-xl text-blue-500"
              >
                Download CV <FiDownload />
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 -z-10">
            <Image
              src="/assets/tushar.png"
              alt="home"
              layout="responsive"
              width={1512}
              height={2255}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#f8f9fa] h-34 block mt-[280px] md:t-0 md:absolute w-full">
        <div className="container block -mt-32">
          <div className="bg-white border flex flex-wrap p-5 rounded-xl">
            <div className="p-5 bg-[#f8f9fa] rounded-xl w-full md:w-1/4">
              <h2 className="border-b-2 border-dashed border-gray-300 pb-3">
                Personal Details
              </h2>
              <div className="mt-3 text-sm">
                <p className="mb-2">
                  Email:{" "}
                  <span className="text-gray-500">mtushar53@gmail.com</span>
                </p>
                <p className="mb-2">
                  Language: <span className="text-gray-500">English</span>
                </p>
                <p className="mb-2">
                  Email:{" "}
                  <span className="text-gray-500">mtushar53@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="px-5 w-full md:w-3/4">
              <h4 className="text-2xl leading-normal mb-2 pt-3">I Am</h4>
              <p className="text-sm text-gray-500 mb-3">
                Obviously I am a Web Designer. Web Developer with over 3 years
                of experience. Experienced with all stages of the development
                cycle for dynamic web projects. The as opposed to using Content
                here, content here, making it look like readable English.
              </p>
              <Image
                src="/assets/signature.png"
                alt="signature"
                width={300}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f8f9fa] pt-40 pb-20" id="services">
        <div className="container">
          <div className="text-center pb-12">
            <h2 className="text-3xl mb-5">Awesome Service</h2>
            <p className="max-w-xl mx-auto text-sm text-gray-500">
              Obviously I am a Web Designer. Experienced with all stages of the
              development cycle for dynamic web projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
            <div className="p-10 bg-white rounded-xl">
              <h2 className="text-xl mb-4">Web Development</h2>
              <p className="text-sm text-gray-500">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-32" id="resume">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/3 p-3">
            <h1 className="text-3xl mb-5">Work Participation</h1>
            <p className="text-gray-500 text-sm pr-4">
              Obviously I am a Web Designer. Experienced with all stages of the
              development cycle for dynamic web projects.
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex w-4/5 mr-auto border border-dashed p-5 pl-32 mb-16 rounded-tl-full">
              <div className="w-[75%]">
                <h2 className="mb-2">Software Engineer</h2>
                <p className="mb-2">Shajgoj Limited</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer males uada tellus lorem, et condimentum
                </p>
              </div>
              <p>2022 - Present</p>
            </div>
            <div className="flex w-4/5 ml-auto border border-dashed p-5 mb-16 rounded-br-full">
              <div className="w-[75%]">
                <h2 className="mb-2">Software Engineer</h2>
                <p className="mb-2">Augnitive</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer males uada tellus lorem, et condimentum
                </p>
              </div>
              <p>2020 - 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 text-center">
          <div className="p-20 bg-white my-5 md:my-24 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold">90%</h2>
            <p className="text-xl mt-2">Happy Client</p>
          </div>
          <div className="p-20 bg-white my-5 md:my-24 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold">90%</h2>
            <p className="text-xl mt-2">Happy Client</p>
          </div>
          <div className="p-20 bg-white mb-5 md:mb-0 md:my-24 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold">90%</h2>
            <p className="text-xl mt-2">Happy Client</p>
          </div>
          <div className="p-20 bg-white mb-5 md:mb-0 md:my-24 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold">90%</h2>
            <p className="text-xl mt-2">Happy Client</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-3">
            <Image
              src="/assets/tushar.png"
              alt="home"
              layout="responsive"
              width={1512}
              height={2255}
            />
          </div>
          <div className="w-full md:w-2/3 pt-28 mb-10 text-center">
            <h2 className="text-2xl font-medium">Work Expertise</h2>
            <p className="w-2/3 mx-auto mt-5 text-gray-500">
              Obviously I am a Web Designer. Experienced with all stages of the
              development cycle for dynamic web projects.
            </p>
            <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-16 mt-20">
              <div className="w-[80px] h-[80px] mx-auto rounded-full flex justify-center items-center full-shadow relative">
                <Image
                  src="/assets/bootstrap.svg"
                  width={35}
                  height={35}
                  alt="bootstrap"
                />
                <span className="absolute bg-blue-100 text-blue-500 font-bold rounded-sm text-xs -top-1 -right-1 px-1">
                  70%
                </span>
              </div>
              <div className="w-[80px] h-[80px] mx-auto rounded-full flex justify-center items-center full-shadow relative">
                <Image
                  src="/assets/nodejs-icon.svg"
                  width={35}
                  height={35}
                  alt="bootstrap"
                />
                <span className="absolute bg-blue-100 text-blue-500 font-bold rounded-sm text-xs -top-1 -right-1 px-1">
                  70%
                </span>
              </div>
              <div className="w-[80px] h-[80px] mx-auto rounded-full flex justify-center items-center full-shadow relative">
                <Image
                  src="/assets/react.svg"
                  width={35}
                  height={35}
                  alt="bootstrap"
                />
                <span className="absolute bg-blue-100 text-blue-500 font-bold rounded-sm text-xs -top-1 -right-1 px-1">
                  70%
                </span>
              </div>
              <div className="w-[80px] h-[80px] mx-auto rounded-full flex justify-center items-center full-shadow relative">
                <Image
                  src="/assets/post_gray_sql.svg"
                  width={35}
                  height={35}
                  alt="bootstrap"
                />
                <span className="absolute bg-blue-100 text-blue-500 font-bold rounded-sm text-xs -top-1 -right-1 px-1">
                  70%
                </span>
              </div>
              <div className="w-[80px] h-[80px] mx-auto rounded-full flex justify-center items-center full-shadow relative">
                <Image
                  src="/assets/amazons3.svg"
                  width={35}
                  height={35}
                  alt="bootstrap"
                />
                <span className="absolute bg-blue-100 text-blue-500 font-bold rounded-sm text-xs -top-1 -right-1 px-1">
                  70%
                </span>
              </div>
              <div className="w-[80px] h-[80px] mx-auto rounded-full flex justify-center items-center full-shadow relative">
                <Image
                  src="/assets/android.svg"
                  width={35}
                  height={35}
                  alt="bootstrap"
                />
                <span className="absolute bg-blue-100 text-blue-500 font-bold rounded-sm text-xs -top-1 -right-1 px-1">
                  70%
                </span>
              </div>
              <div className="w-[80px] h-[80px] mx-auto rounded-full flex justify-center items-center full-shadow relative">
                <Image
                  src="/assets/Angular.svg"
                  width={35}
                  height={35}
                  alt="bootstrap"
                />
                <span className="absolute bg-blue-100 text-blue-500 font-bold rounded-sm text-xs -top-1 -right-1 px-1">
                  70%
                </span>
              </div>
              <div className="w-[80px] h-[80px] mx-auto rounded-full flex justify-center items-center full-shadow relative">
                <Image
                  src="/assets/mongodb.svg"
                  width={35}
                  height={35}
                  alt="bootstrap"
                />
                <span className="absolute bg-blue-100 text-blue-500 font-bold rounded-sm text-xs -top-1 -right-1 px-1">
                  70%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f9fa] pb-20" id="projects">
        <div className="container">
          <h2 className="text-3xl text-center pt-24 font-medium">
            My Work & Portfolio
          </h2>
          <p className="text-center w-1/2 mx-auto mt-6 text-gray-500">
            Obviously I am a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
            <div className=" ">
              <Image
                className="rounded-xl full-shadow"
                src="/assets/1.jpg"
                alt="portfolio"
                width={416}
                height={312}
              />
            </div>
            <div className=" ">
              <Image
                className="rounded-xl full-shadow"
                src="/assets/2.jpg"
                alt="portfolio"
                width={416}
                height={312}
              />
            </div>
            <div className=" ">
              <Image
                className="rounded-xl full-shadow"
                src="/assets/3.jpg"
                alt="portfolio"
                width={416}
                height={312}
              />
            </div>
            <div className=" ">
              <Image
                className="rounded-xl full-shadow"
                src="/assets/1.jpg"
                alt="portfolio"
                width={416}
                height={312}
              />
            </div>
            <div className=" ">
              <Image
                className="rounded-xl full-shadow"
                src="/assets/2.jpg"
                alt="portfolio"
                width={416}
                height={312}
              />
            </div>
            <div className=" ">
              <Image
                className="rounded-xl full-shadow"
                src="/assets/3.jpg"
                alt="portfolio"
                width={416}
                height={312}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20" id="contact">
        <div className="container">
          <h2 className="text-3xl text-center pt-24 font-medium">Contact Me</h2>
          <p className="text-center w-1/2 mx-auto mt-6 text-gray-500">
            Obviously I am a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
            <div className="flex flex-col items-center text-center">
              <BsTelephone size={30} />
              <h4 className="text-xl font-medium my-5">Phone</h4>
              <p className="text-sm text-gray-500 mb-5">
                Promising development turmoil inclusive education transformative
                community
              </p>
              <a
                href="tel:+8801521324263"
                className="text-blue-500 font-medium tracking-wide"
              >
                +8801521324263
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <FiMail size={30} />
              <h4 className="text-xl font-medium my-5">Email</h4>
              <p className="text-sm text-gray-500 mb-5">
                Promising development turmoil inclusive education transformative
                community
              </p>
              <a
                href="mail:mtushar53@gmail.com"
                className="text-blue-500 font-medium tracking-wide"
              >
                mtushar53@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <GrLocation size={30} />
              <h4 className="text-xl font-medium my-5">Location</h4>
              <p className="text-sm text-gray-500 mb-5">
                Promising development turmoil inclusive education transformative
                community
              </p>
              <a href="#" className="text-blue-500 font-medium tracking-wide">
                View on Google map
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            <div className="">
              <input
                type="text"
                className="w-full outline-0 border border-gray-300 px-3 py-2 rounded-lg mb-[1.9rem]"
                placeholder="First Name"
                name="name"
                value={contactData.name}
                onChange={(event) => handleChange(event)}
              />
              {errors.name && (
                <span className="text-sm ml-2 text-sg-pink">{errors.name}</span>
              )}
              <input
                type="email"
                className="w-full outline-0 border border-gray-300 px-3 py-2 rounded-lg mb-[1.9rem]"
                placeholder="Your Email"
                name="email"
                value={contactData.email}
                onChange={(event) => handleChange(event)}
              />
              {errors.email && (
                <span className="text-sm ml-2 text-sg-pink">
                  {errors.email}
                </span>
              )}
              <input
                type="text"
                className="w-full outline-0 border border-gray-300 px-3 py-2 rounded-lg mb-[1.9rem]"
                placeholder="Your Subject"
                name="subject"
                value={contactData.subject}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="text-right">
              <textarea
                placeholder="Your Message"
                rows={7}
                className="w-full outline-0 border border-gray-300 px-3 py-2 rounded-lg mb-6"
                name="message"
                value={contactData.message}
                onChange={(event) => handleChange(event)}
              />
              <button
                type="button"
                className="px-8 py-2 bg-blue-500 rounded-xl text-white"
                onClick={() => handleSubmit()}
              >
                Send Message
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
