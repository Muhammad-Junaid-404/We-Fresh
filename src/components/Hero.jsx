import React from "react";
import { useForm } from "react-hook-form";
const Hero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="herosection flexBetween p-12">
      <div className="content">
        <h1>
          The smarter way <br />
          <span>to order your food</span>
        </h1>
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
        <h5>Avaliable on</h5>
        <div className="store">
          <img src="/img/Apple.png" alt="logo" />
          <img src="/img/Googleplay.png" alt="logo" />
        </div>
      </div>
      <div className="image">
        <img src="img/mobilebg1.png" alt="bg" className="mobilebg" />
        <img src="img/iPhone.png" alt="bg" className="mobile" />
      </div>
    </div>
  );
};

export default Hero;
