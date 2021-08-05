import React from 'react';
import AbilityInput from './AbilityInput';

export default function Abilities({ values, handleChange }) {
  return (
    <div className="input-group">
      <AbilityInput values={values} handleChange={handleChange} name="str" />
      <AbilityInput values={values} handleChange={handleChange} name="dex" />
      <AbilityInput values={values} handleChange={handleChange} name="con" />
      <AbilityInput values={values} handleChange={handleChange} name="int" />
      <AbilityInput values={values} handleChange={handleChange} name="wis" />
      <AbilityInput values={values} handleChange={handleChange} name="cha" />
    </div>
  );
}
