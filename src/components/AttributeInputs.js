import { useFormikContext } from 'formik';
import React from 'react';

export default function AttributeInputs() {
  const { values, handleChange } = useFormikContext();

  return (
    <div className="input-group">
      <h3>name</h3>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />

      <h3>player</h3>
      <input
        type="text"
        name="player"
        value={values.player}
        onChange={handleChange}
      />

      <h3>background</h3>
      <textarea
        type="text"
        name="background"
        value={values.background}
        onChange={handleChange}
      />

      <h3>race</h3>
      <textarea
        type="text"
        name="race"
        value={values.race}
        onChange={handleChange}
      />

      <h3>alignment</h3>
      <textarea
        type="text"
        name="alignment"
        value={values.alignment}
        onChange={handleChange}
      />
    </div>
  );
}
