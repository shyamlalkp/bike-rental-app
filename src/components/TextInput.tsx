export const TextInput = ({
  type,
  label,
  placeholder,
}: {
  type: "email" | "password" | "text";
  label: string;
  placeholder: string;
}) => {
  return (
    <div className="p-2">
      <label className="block mb-2 text-sm font-medium text-white ">
        {label}
      </label>
      <input
        type={type}
        id="first_name"
        className="bg-black border border-gray-300"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
