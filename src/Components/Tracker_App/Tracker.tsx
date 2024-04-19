import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../Button/Button.module.css";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  desc: z.string().min(2),
  price: z.number().min(1),
});

type FormData = z.infer<typeof schema>;

const Tracker = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="desc" className="form-lable">
          Description
        </label>
        <input
          {...register("desc")}
          id="desc"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-lable">
          Price
        </label>
        <input
          {...register("price")}
          id="price"
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <select   name="list" id="list" className="form-control">
          <option className="form-control" value="Abood">
            All Catogries
          </option>
          <option value="Joe">Joe</option>
          <option value="Hegzo">Hegzo</option>
        </select>
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Sumbit
      </button>
    </form>
  );
};

export default Tracker;
