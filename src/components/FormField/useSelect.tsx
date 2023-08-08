import { SelectContext } from "@/components/FormField/SelectContext";
import { useContext } from "react";

export const useSelect = () => {
  const result = useContext(SelectContext);
  if (!result) {
    throw new Error("Context used outside of its Provider!");
  }
  return result;
};