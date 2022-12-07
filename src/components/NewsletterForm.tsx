import { SubmitHandler, useForm } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";

interface InputTypes {
  email: string;
}

const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();

  const onsubmit: SubmitHandler<InputTypes> = ({ email }) => {
    console.log(email);
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
          className={`bg-transparent border-4 rounded-lg w-full p-4 border-[#272727] h-14 focus:outline-0 active:outline-0 transition-all placeholder:font-semibold ${
            errors.email
              ? "border-red-600 placeholder:text-red-800"
              : "focus:border-[#3d3d3d]"
          }`}
          placeholder="john@gmail.com"
        />
        <PrimaryButton text="Subscribe" extraClasses="sm:w-min w-full" />
      </form>
    </>
  );
};

export default NewsletterForm;
