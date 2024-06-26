import React, { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number({invalid_type_error : ' Age field is required.'}).min(3),
});
type FormData = z.infer<typeof schema>;
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors , isValid }
  } = useForm<FormData>({ resolver:  zodResolver(schema)});
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mp-3">
        <label htmlFor="name" className="form-lable">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && (
          <p className="text-danger">The name field is required</p>
        )}
      </div>
      <div className="mp-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...(register("age"), { valueAsNumber : true})}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      {errors.age && (
          <p className="text-danger">The name field is required</p>
        )}

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
