import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="contactSection flexCenter p-12">
      <h1>
        <span>WeFresh</span> for business
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("Phone", {
            required: true,
            pattern: "^(?:(\\+92)|(0092))?-?03[0-9]{2}-?[0-9]{7}$",
          })}
          type="text"
          placeholder="Enter phone number"
        />
        <button type="submit">Send</button>
        {errors.Phone && <p>This field is required</p>}
      </form>
    </div>
  );
};

export default Contact;
