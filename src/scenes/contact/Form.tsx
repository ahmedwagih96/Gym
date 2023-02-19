import { useForm } from "react-hook-form";

function Form() {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white outline-none`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <form
      action="https://formsubmit.co/dd37aab76abaa3eb5a1701516652eb5a"
      target="_blank"
      onSubmit={handleSubmit}
      method="POST"
      className=""
    >
      <input
        type="text"
        className={inputStyles}
        placeholder="NAME"
        {...register("name", {
          required: true,
          maxLength: 100,
        })}
      />
      {errors.name && (
        <p className="mt-1 text-primary-500">
          {errors.name.type === "required" && "This field is required"}
          {errors.name.type === "maxLength" && "Max length is 100 char."}
        </p>
      )}
      <input
        type="text"
        className={inputStyles}
        placeholder="EMAIL"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      {errors.email && (
        <p className="mt-1 text-primary-500">
          {errors.email.type === "required" && "This field is required"}
          {errors.email.type === "pattern" && "Invalid email address"}
        </p>
      )}
      <textarea
        rows={4}
        cols={50}
        className={inputStyles}
        placeholder="MESSAGE"
        {...register("message", {
          required: true,
          maxLength: 2000,
        })}
      />
      {errors.message && (
        <p className="mt-1 text-primary-500">
          {errors.message.type === "required" && "This field is required"}
          {errors.message.type === "maxLength" && "Max length is 2000 char."}
        </p>
      )}
      <button
        type="submit"
        className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
