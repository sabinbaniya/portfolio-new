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
    reset,
  } = useForm<FormInputs>();

  const [submissionState, setSubmissionState] =
    useState<SubmissionStates | null>();

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
        return;
      }
      setSubmissionState("error");
    } catch (error) {
      setSubmissionState("error");
    } finally {
      setTimeout(() => {
        reset();
        setSubmissionState(null);
      }, 5000);
    }
  };
  return (
    <section
      className="mx-auto scroll-mt-20 px-4 xs:max-w-[425px] sm:max-w-none xl:mx-auto xl:max-w-screen-xl"
      id="contact"
    >
      <SlidingHeading
        dataText="Let's Talk Let's Talk Let's Talk Let's Talk
        Let's Talk Let's Talk Let's Talk Let's Talk Let's Talk"
      >
        Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk
        Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk
        Let&apos;s Talk
      </SlidingHeading>
      <section className="mb-20 flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="hidden basis-1/2 sm:block">
          <div className="relative flex sm:w-full sm:justify-start sm:pt-10 lg:justify-center">
            <Image
              src="/hero2.png"
              height={438}
              width={300}
              className="max-h-[50vh] w-auto sm:max-h-[40vh] lg:max-h-[50vh] "
              alt=""
            />
            <div className="relative -mt-10 rounded-xl bg-[#162334] sm:absolute sm:top-0 sm:right-10 ">
              <div className="p-4 text-sm">
                Let&apos;s talk about your new idea 💡
              </div>
              <div className="absolute -bottom-4 left-4 h-0 w-0 border-x-[20px] border-t-[20px] border-x-transparent border-t-[#162334]"></div>
            </div>
          </div>
        </div>
        <div className="w-full basis-1/2">
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="max-w-md space-y-6"
          >
            <div className="relative flex flex-col justify-start space-y-2">
              <label
                htmlFor="name"
                className={`text-base font-semibold sm:text-lg ${
                  errors.name ? "form-error text-red-600" : ""
                }`}
              >
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Please fill in your name" })}
                className={`h-14 w-full rounded-xl border-[4px] border-[#272727] bg-background p-4 text-sm transition-all placeholder:font-semibold autofill:bg-background focus:outline-0 active:outline-0  sm:h-16 sm:border-[6px]  sm:text-base ${
                  errors.name
                    ? "form-error border-red-600 placeholder:text-red-800"
                    : "focus:border-[#3d3d3d]"
                }`}
                placeholder="Your Name"
              />
            </div>
            <div className="relative flex flex-col justify-start space-y-2">
              <label
                htmlFor="email"
                className={`text-base font-semibold sm:text-lg ${
                  errors.email ? "form-error text-red-600" : ""
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
                className={`h-14 w-full rounded-xl border-[4px] border-[#272727] bg-background p-4 text-sm transition-all placeholder:font-semibold autofill:bg-background focus:outline-0 active:outline-0 sm:h-16 sm:border-[6px] sm:text-base ${
                  errors.email
                    ? "form-error border-red-600 text-red-600 placeholder:text-red-800"
                    : "focus:border-[#3d3d3d]"
                }`}
              />
              {errors.email?.type === "pattern" && (
                <span className="absolute right-4 -bottom-6 text-xs font-medium text-red-600">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-start space-y-2">
              <label
                htmlFor="message"
                className={`text-base font-semibold sm:text-lg ${
                  errors.message ? "form-error text-red-600" : ""
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: "Please fill in your messaage",
                })}
                className={`h-32 w-full resize-none rounded-xl border-[4px] border-[#272727] bg-background p-4 text-sm transition-all placeholder:font-semibold autofill:bg-background focus:outline-0 active:outline-0 sm:border-[6px] lg:h-40 ${
                  errors.message
                    ? "form-error border-red-600 placeholder:text-red-800"
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
                extraClasses={`w-full flex justify-center items-center  ${
                  submissionState === "loading"
                    ? "bg-primary-blue  opacity-50 pointer-events-none"
                    : submissionState === "submitted"
                    ? "bg-green-600  opacity-50 pointer-events-none"
                    : submissionState === "error"
                    ? "bg-red-500  opacity-50 pointer-events-none"
                    : "bg-primary-blue"
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
