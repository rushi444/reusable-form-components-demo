import { useForm } from "react-hook-form";
import { InputField } from "./inputField";

function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Form Submitted", { values });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        name="name"
        label="Name: "
        control={control}
        rules={{ required: "Please enter your name" }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
