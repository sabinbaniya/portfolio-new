import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import FormSubmittedAnimation from "./FormSubmittedAnimation";
import FormFailureAnimation from "./FormFailureAnimation";
import Image from "next/image";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

type SubmissionStates = "loading" | "submitted" | "error";

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
    <section className="scroll-mt-20" id="contact">
      <motion.p
        // style={{ translateX: -translateVal + 100 }}
        data-text="Let's Talk"
        className="secondary_heading_style"
      >
        Let&apos;s Talk
      </motion.p>
      <section className="flex mb-20">
        <div className="basis-1/2">
          <Image
            src="/hero2.png"
            height={438}
            width={300}
            className="max-h-[50vh] w-auto"
            alt=""
          />
        </div>
        <div className="basis-1/2">
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="space-y-6 max-w-lg"
          >
            <div className="flex flex-col justify-start space-y-2">
              <label
                htmlFor="name"
                className={`text-lg font-semibold ${
                  errors.name ? "text-red-600 form-error" : ""
                }`}
              >
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Please fill in your name" })}
                className={`bg-background border-[6px] rounded-xl p-4 border-[#272727] h-16 w-full focus:outline-0 active:outline-0  autofill:bg-background transition-all  placeholder:font-semibold ${
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
                className={`text-lg font-semibold ${
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
                className={`bg-background border-[6px] rounded-xl p-4 border-[#272727] h-16 w-full focus:outline-0 active:outline-0 autofill:bg-background transition-all placeholder:font-semibold ${
                  errors.email
                    ? "border-red-600 placeholder:text-red-800 text-red-600 form-error"
                    : "focus:border-[#3d3d3d]"
                }`}
              />
            </div>
            <div className="flex flex-col justify-start space-y-2">
              <label
                htmlFor="message"
                className={`text-lg font-semibold ${
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
                rows={7}
                className={`bg-background border-[6px] rounded-xl p-4 border-[#272727] w-full resize-none focus:outline-0 active:outline-0 autofill:bg-background transition-all placeholder:font-semibold ${
                  errors.message
                    ? "border-red-600 placeholder:text-red-800 form-error"
                    : "focus:border-[#3d3d3d]"
                }`}
                placeholder="I'd like to talk to you about..."
              />
            </div>
            <div>
              <PrimaryButton
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
