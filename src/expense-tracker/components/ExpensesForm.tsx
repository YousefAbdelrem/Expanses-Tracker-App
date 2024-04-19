import React from "react";
import { date, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  Description: z.string().min(3, {message : 'Description should be at least 3 characters.'}).max(50),
  Amount: z.number({ invalid_type_error : 'Amount is required'}).min(0.01).max(100_000),
  Category: z.enum(categories, {
    errorMap: () => ({message : 'Category is required'})
  })
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit : (data : ExpenseFormData) => void;
}

function ExpensesForm({onSubmit} : Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema)});

  return (
    <form onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
    })}>
      <div className="mb-3">
        <label htmlFor="Description" className="form-lable">
          Description
        </label>
        <input
          {...register("Description")}
          id="Description"
          type="text"
          className="form-control"
        />
        {errors.Description && (
          <p className="text-danger">{errors.Description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          {...register("Amount", { valueAsNumber : true})}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.Amount && (
          <p className="text-danger">{errors.Amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("Category")} id="Category" className="form-select">
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.Category && (
          <p className="text-danger">{errors.Category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ExpensesForm;
