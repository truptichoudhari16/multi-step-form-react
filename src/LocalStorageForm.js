// LocalStorageForm.js
import { useState } from "react";

const useFormWithLocalStorage = (localStorageKey) => {
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || {}
  );

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useFormWithLocalStorage;
