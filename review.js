const $input = $('#input');
const $button = $('#input-button');
const $results = $('#results');

$button.on('click', searchDictionary);

function searchDictionary() {
  $.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + $input.val()).done(generateDefinitions);
}

function generateDefinitions(data) {
  for (let i = 0; i < data[0].meanings[0].definitions.length; i++) {
    let $result = $(`
  <div class="definition-card">
    <div class="definition-text">${data[0].meanings[0].definitions[i].definition}</div>
  </div>
  `);
    $results.append($result);
  }
}

let bananasTest = [
  {
    word: 'bananas',
    phonetic: '/bəˈnɑːnəz/',
    phonetics: [
      { text: '/bəˈnɑːnəz/', audio: '' },
      { text: '/bəˈnænəz/', audio: '' },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition: 'An elongated curved tropical fruit that grows in bunches and has a creamy flesh and a smooth skin.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              'The tropical tree-like plant which bears clusters of bananas. The plant, usually of the genus Musa but sometimes also including plants from Ensete, has large, elongated leaves and is related to the plantain.',
            synonyms: [],
            antonyms: [],
          },
          { definition: "A yellow colour, like that of a banana's skin.", synonyms: [], antonyms: [] },
          {
            definition:
              '(mildly) A person of Asian descent, especially a Chinese American, who has assimilated into Western culture or married a Caucasian (from the "yellow" outside and "white" inside). Compare coconut or Oreo.',
            synonyms: [],
            antonyms: [],
          },
          { definition: 'A banana equivalent dose.', synonyms: [], antonyms: [] },
          { definition: 'A catamorphism (from the use of banana brackets in the notation).', synonyms: [], antonyms: [] },
          { definition: 'The penis.', synonyms: [], antonyms: [] },
          { definition: 'A banana kick.', synonyms: [], antonyms: [] },
        ],
        synonyms: ['Twinkie', 'jook-sing'],
        antonyms: ['egg'],
      },
      { partOfSpeech: 'adjective', definitions: [{ definition: 'Crazy, mad, nuts.', synonyms: [], antonyms: [] }], synonyms: [], antonyms: [] },
    ],
    license: { name: 'CC BY-SA 3.0', url: 'https://creativecommons.org/licenses/by-sa/3.0' },
    sourceUrls: ['https://en.wiktionary.org/wiki/banana', 'https://en.wiktionary.org/wiki/bananas'],
  },
];
