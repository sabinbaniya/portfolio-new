import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import FormSubmittedAnimation from "./FormSubmittedAnimation";
import FormFailureAnimation from "./FormFailureAnimation";
import Image from "next/image";
import SlidingHeading from "./SlidingHeading";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export type SubmissionStates = "loading" | "submitted" | "error";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [submissionState, setSubmissionState] =
    useState<SubmissionStates | null>(null);

  const onsubmit: SubmitHandler<FormInputs> = async (data) => {
    setSubmissionState("loading");
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/a215a74b9b8c580a5a95a80e27bd57a3",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "omit",
          body: JSON.stringify({
            ...data,
          }),
        }
      );
      const json = await res.json();
      if (json.success === "true") {
        setSubmissionState("submitted");
        setTimeout(() => {
          setSubmissionState(null);
        }, 5000);
        return;
      }
      setSubmissionState("error");
    } catch (error) {
      setSubmissionState("error");
    }
  };
  return (
    <section
      className="scroll-mt-20 px-4 xs:max-w-[425px] mx-auto sm:max-w-none xl:max-w-screen-xl xl:mx-auto"
      id="contact"
    >
      <SlidingHeading
        dataText="Let's Talk Let's Talk Let's Talk Let's Talk
        Let's TalkLet's TalkLet's TalkLet's TalkLet's
        Talk"
      >
        Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk
        Let&apos;s TalkLet&apos;s TalkLet&apos;s TalkLet&apos;s TalkLet&apos;s
        Talk
      </SlidingHeading>
      <section className="flex flex-col sm:justify-between sm:flex-row mb-20 items-center">
        <div className="hidden basis-1/2 sm:block">
          <div className="relative flex sm:justify-start sm:w-full sm:pt-10 lg:justify-center">
            <Image
              src="/hero2.png"
              height={438}
              width={300}
              className="max-h-[50vh] w-auto sm:max-h-[40vh] lg:max-h-[50vh]"
              alt=""
            />
            <div className="bg-[#162334] rounded-xl relative -mt-10 sm:absolute sm:top-0 sm:right-10 ">
              <div className="p-4 text-sm">
                Let&apos;s talk about your new idea 💡
              </div>
              <div className="border-x-[20px] border-t-[20px] border-x-transparent border-t-[#162334] h-0 w-0 absolute -bottom-4 left-4"></div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 w-full">
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="space-y-6 max-w-md"
          >
            <div className="flex flex-col justify-start space-y-2">
              <label
                htmlFor="name"
                className={`text-base sm:text-lg font-semibold ${
                  errors.name ? "text-red-600 form-error" : ""
                }`}
              >
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Please fill in your name" })}
                className={`bg-background text-sm border-[4px] sm:border-[6px] sm:text-base rounded-xl p-4 border-[#272727] h-14 sm:h-16 w-full focus:outline-0 active:outline-0  autofill:bg-background transition-all  placeholder:font-semibold ${
                  errors.name
                    ? "border-red-600 placeholder:text-red-800 form-error"
                    : "focus:border-[#3d3d3d]"
                }`}
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col justify-start space-y-2">
              <label
                htmlFor="email"
                className={`text-base sm:text-lg font-semibold ${
                  errors.email ? "text-red-600 form-error" : ""
                }`}
              >
                Contact Email
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "Please fill in your email",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="Your Email"
                className={`bg-background text-sm border-[4px] sm:border-[6px] sm:text-base rounded-xl p-4 border-[#272727] h-14 sm:h-16 w-full focus:outline-0 active:outline-0 autofill:bg-background transition-all placeholder:font-semibold ${
                  errors.email
                    ? "border-red-600 placeholder:text-red-800 text-red-600 form-error"
                    : "focus:border-[#3d3d3d]"
                }`}
              />
            </div>
            <div className="flex flex-col justify-start space-y-2">
              <label
                htmlFor="message"
                className={`text-base sm:text-lg font-semibold ${
                  errors.message ? "text-red-600 form-error" : ""
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: "Please fill in your messaage",
                })}
                className={`bg-background h-32 lg:h-40 text-sm border-[4px] sm:border-[6px] rounded-xl p-4 border-[#272727] w-full resize-none focus:outline-0 active:outline-0 autofill:bg-background transition-all placeholder:font-semibold ${
                  errors.message
                    ? "border-red-600 placeholder:text-red-800 form-error"
                    : "focus:border-[#3d3d3d]"
                }`}
                placeholder="I'd like to talk to you about..."
              />
            </div>
            <div>
              <PrimaryButton
                renderAs="btn"
                text={
                  submissionState === "loading" ? (
                    <ScaleLoader color="#fff" height={22} />
                  ) : submissionState === "submitted" ? (
                    <FormSubmittedAnimation />
                  ) : submissionState === "error" ? (
                    <FormFailureAnimation />
                  ) : (
                    "Send Message"
                  )
                }
                extraClasses={`w-full ${
                  submissionState === "loading"
                    ? "opacity-50 pointer-events-none flex justify-center items-center"
                    : submissionState === "submitted"
                    ? "opacity-80 pointer-events-none flex justify-center items-center bg-green-600"
                    : submissionState === "error"
                    ? "opacity-80 pointer-events-none flex justify-center items-center bg-red-500"
                    : ""
                }`}
              />
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
