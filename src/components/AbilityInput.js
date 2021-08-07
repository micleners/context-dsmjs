import React from 'react';

export default function AbilityInput({ values, handleChange, name }) {
  return (
    <>
      <h3>{name}</h3>
      <input
        type="number"
        name={name}
        min="0"
        // required
        max="100"
        value={values[name]}
        onChange={handleChange}
      />
    </>
  );
}
