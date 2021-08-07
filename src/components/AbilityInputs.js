import React from 'react';
import AbilityInput from './AbilityInput';

export default function AbilityInputs() {
  return (
    <div className="input-group">
      <AbilityInput name="str" />
      <AbilityInput name="dex" />
      <AbilityInput name="con" />
      <AbilityInput name="int" />
      <AbilityInput name="wis" />
      <AbilityInput name="cha" />
    </div>
  );
}
