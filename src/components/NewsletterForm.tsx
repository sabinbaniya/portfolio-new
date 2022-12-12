import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ScaleLoader } from "react-spinners";
import { SubmissionStates } from "./ContactSection";
import PrimaryButton from "./PrimaryButton";
import FormSubmittedAnimation from "./FormSubmittedAnimation";
import FormFailureAnimation from "./FormFailureAnimation";

interface InputTypes {
  email: string;
}

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();
  const [apiStatus, setApiStatus] = useState({
    success: false,
    message: "",
    loading: false,
  });
  const [submissionState, setSubmissionState] =
    useState<SubmissionStates | null>();

  const onsubmit: SubmitHandler<InputTypes> = async ({ email }) => {
    setSubmissionState("loading");
    // setApiStatus({
    //   success: false,
    //   message: "",
    //   loading: true,
    // });
    try {
      // console.log("hi");
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (json.success) return setSubmissionState("submitted");
      return setSubmissionState("error");
      // setApiStatus({
      //   ...json,
      //   loading: false,
      // });
    } catch (error) {
      setSubmissionState("error");
      console.error(error);
      setApiStatus({
        success: false,
        message: "Unknown Error Occured",
        loading: false,
      });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="space-y-4 flex flex-col w-full items-end"
      >
        <input
          {...register("email", {
            required: "Please provide your email",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
          className={`bg-background text-sm border-[4px] sm:border-[6px] sm:text-base rounded-xl p-4 border-[#272727] h-14 w-full focus:outline-0 active:outline-0  autofill:bg-background transition-all  placeholder:font-semibold ${
            errors.email
              ? "border-red-600 placeholder:text-red-800 form-error"
              : "focus:border-[#3d3d3d]"
          }`}
          placeholder="Your Email"
        />
        <PrimaryButton
          renderAs="btn"
          // extraClasses="md:w-min w-full"
          text={
            submissionState === "loading" ? (
              <ScaleLoader color="#fff" height={22} />
            ) : submissionState === "submitted" ? (
              <FormSubmittedAnimation text="Subscribed successfully :)" />
            ) : submissionState === "error" ? (
              <FormFailureAnimation text="Couldn't subscribe :(" />
            ) : (
              "Subscribe"
            )
          }
          extraClasses={`w-full md:w-min ${
            submissionState === "loading"
              ? "opacity-50 pointer-events-none flex justify-center items-center bg-primary-blue"
              : submissionState === "submitted"
              ? "opacity-80 pointer-events-none flex justify-center items-center bg-green-600"
              : submissionState === "error"
              ? "opacity-80 pointer-events-none flex justify-center items-center bg-red-500"
              : "bg-primary-blue"
          }`}
        />
      </form>
    </>
  );
};

export default NewsletterForm;
