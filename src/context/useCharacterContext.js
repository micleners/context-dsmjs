import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = (props) => {
  const [character, setCharacter] = useState({
    name: '',
    player: '',
    background: '',
    race: '',
    alignment: '',
    str: '',
    dex: '',
    con: '',
    int: '',
    wis: '',
    cha: '',
  });

  return (
    <CharacterContext.Provider value={[character, setCharacter]} {...props} />
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error('useCharacter must be used within the CharacterProvider');
  }

  return context;
};
