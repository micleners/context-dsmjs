import { useFormikContext } from 'formik';
import React from 'react';

export default function AbilityInput({ name }) {
  const { values, handleChange } = useFormikContext();
  return (
    <>
      <h3>{name}</h3>
      <input
        type="number"
        name={name}
        min="0"
        max="100"
        value={values[name]}
        onChange={handleChange}
      />
    </>
  );
}
