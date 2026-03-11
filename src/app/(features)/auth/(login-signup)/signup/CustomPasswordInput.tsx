import { Input, Text } from "@mantine/core";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CustomPasswordInput({
  form,
  label,
  identifier,
}: {
  form: any;
  label?: string;
  identifier: string;
}) {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <label htmlFor={identifier}>{label || "Password"}</label>

        <button
          type="button"
          className="cursor-pointer flex items-center gap-2 text-sm text-[#6B7280]"
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? (
            <>
              <FaRegEyeSlash size={14} color="#6B7280" />{" "}
              <Text fz={14} c={"#6B7280"}>
                Hide
              </Text>
            </>
          ) : (
            <>
              <FaRegEye size={14} color="#6B7280" />{" "}
              <Text fz={14} c={"#6B7280"}>
                Show
              </Text>
            </>
          )}
        </button>
      </div>
      <Input
        type={isShow ? "text" : identifier}
        label={label}
        id={identifier}
        required
        key={form.key(identifier)}
        {...form.getInputProps(identifier)}
      />
    </>
  );
}
