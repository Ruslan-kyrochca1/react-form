import { useRef } from 'react';

export const useForm = <T extends object>(initialValues: T) => {
  const ref = useRef<T>(initialValues);
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    ref.current = {
      ...ref.current,
      [target.name]: target.value,
    };
  };
  const getValues = () => {
    return ref.current;
  };
  return { ref, handleChange, getValues };
};
