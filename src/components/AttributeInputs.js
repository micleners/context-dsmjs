import React from 'react';

export default function AttributeInputs({ values, handleChange }) {
  return (
    <div className="input-group">
      <h3>name</h3>
      <input
        type="text"
        name="name"
        // required
        value={values.name}
        onChange={handleChange}
      />

      <h3>player</h3>
      <input
        type="text"
        name="player"
        // required
        value={values.player}
        onChange={handleChange}
      />

      <h3>background</h3>
      <textarea
        type="text"
        name="background"
        // required
        value={values.background}
        onChange={handleChange}
      />

      <h3>race</h3>
      <textarea
        type="text"
        name="race"
        // required
        value={values.race}
        onChange={handleChange}
      />

      <h3>alignment</h3>
      <textarea
        type="text"
        name="alignment"
        // required
        value={values.alignment}
        onChange={handleChange}
      />
    </div>
  );
}
