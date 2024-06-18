import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useGetCharacters } from '../hooks/useGetCharacters';
import { SEARCH_TITLE } from '../utils/constants';
import { sortCharacters } from '../../prop-drilling-finish/utils/sortCharacters';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');
  const characters = useGetCharacters(name, gender);

  const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title={SEARCH_TITLE} />
      <div className="pt-8" />
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
