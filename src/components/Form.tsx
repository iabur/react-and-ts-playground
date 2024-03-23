import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .int()
    .positive(),
});

type FormDate = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormDate>({ resolver: zodResolver(schema) });

  const printData = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(printData)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && (
          <div className="text-danger">{errors.name?.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <div className="text-danger">{errors.age?.message}</div>}
      </div>

      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
