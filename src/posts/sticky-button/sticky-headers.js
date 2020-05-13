import React from 'react';
import styled from '@emotion/styled';

const characters = [
  'Aunt May',
  'Black Cat',
  'Charles Standish',
  'Doctor Octopus',
  'Electro',
  'Hammerhead',
  'Harry Osborn',
  'Isaac Delaney',
  'J. Jonah Jameson',
  'Jefferson Davis',
  'Kingpin',
  'Mary Jane Watson',
  'Miles Morales',
  'Mister Negative',
  'Morgan Michaels',
  'Norman Osborn',
  'Peter Parker',
  'Rhino',
  'Rio Morales',
  'Scorpion',
  'Screwball',
  'Shocker',
  'Short Order Cook',
  'Silver Sable',
  'Taskmaster',
  'Tombstone',
  'Uncle Ben',
  'Vulture',
  'Walter Hardy',
  'Yuriko Watanabe',
];

const Dt = styled.dt`
  padding: 6px 16px;
  position: sticky;
  top: 0;
  background: #666666;
  color: #fff;

  /* don't have a border for the first item in the section */
  + dd {
    border-top: 0;
  }
`;
const Dd = styled.dd`
  margin: 0 0 0 16px;
  padding: 10px 0;
  border-top: 1px solid #ccc;
`;

const sectionList = characters.reduce(
  (list, character) => {
    const letter = character.charAt(0);

    if (list.letter !== letter) {
      list.letter = letter;
      list.data.push(<Dt key={letter}>{letter}</Dt>);
    }

    list.data.push(<Dd key={character}>{character}</Dd>);
    return list;
  },
  { letter: '', data: [] }
);

export default function StickyHeaders() {
  return (
    <div>
      <h2>Spider-Man Characters 🕷</h2>
      <div
        css={{
          height: 300,
          marginBottom: '0.5rem',
          overflow: 'scroll',
          border: '1px solid var(--gold)',
        }}
      >
        <dl css={{ margin: 0 }}>{sectionList.data.map((item) => item)}</dl>
      </div>
    </div>
  );
}
