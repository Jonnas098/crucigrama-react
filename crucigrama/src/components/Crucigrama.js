import React from 'react';

import Crossword from '@jaredreisinger/react-crossword';

const data = {
    across: {
      1: {
        clue: 'One plus one',
        answer: 'TWO',
        row: 0,
        col: 0,
      },
      3: {
        clue: 'Antonym of slow',
        answer: 'SPEED',
        row: 2,
        col: 0,
      }
    },
    down: {
      2: {
        clue: 'Three minus two',
        answer: 'ONE',
        row: 0,
        col: 2,
      },
      4: {
        clue: 'It can be a dog or a cat',
        answer: 'PET',
        row: 2,
        col: 1,
      },

    },
  }

export default function Crucigrama(){
    return (
        <div style={{ width: '25em', display: 'flex' }}>
            <Crossword data={data} />
        </div>
    )
}