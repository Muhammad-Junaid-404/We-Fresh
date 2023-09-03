import React from "react";
import { useForm } from "react-hook-form";

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="searchSection flexBetween p-12">
      <div className="content">
        <h1>
          Find us in these <span>Area</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
          <input
            {...register("Area", {
              required: true,
            })}
            type="text"
            placeholder="Enter your area"
            required
          />
          <button type="submit">Search</button>
          {/* {errors.Area && <p>This field is required</p>} */}
        </form>
      </div>
      <div className="image flexCenter">
        <img src="/img/search.png" alt="bg" />
        <img src="/img/searchbg1.png" alt="bg" className="searchbg1" />
        <img src="/img/searchbg2.png" alt="bg" className="searchbg2" />
      </div>
    </div>
  );
};

export default Search;
