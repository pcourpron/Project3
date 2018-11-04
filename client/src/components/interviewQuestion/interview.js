import FlashcardApp from 'react-flashcard-app';
import React from 'react';

const options =
{
  topControlBar: [ 'downRating', 'decrement', 'increment', 'upRating',
  ],
  bottomControlBar: [
    'flip', 'shuffle', 'reset', 'revert',
  ],
  buttonTexts: {
    shuffle: 'custom text here',
  },
};
  
const data = [
{
  id: 1,
  name: 'Example Deck',
  cards:
  [
    'Lorem', 'dolor',
    'sit', 'amet',
    'consetetur', 'sadipscing',
    'sed', 'diam',
  ]
}
];

<FlashcardApp data={data} options={options} />
