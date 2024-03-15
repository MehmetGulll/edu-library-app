export const lccLookup = {
  A: 'General Works',
  B: 'Philosophy, Psychology, Religion',
  C: 'Auxiliary Sciences of History',
  D: 'World History and History of Europe, Asia, Africa, Australia, New Zealand, etc.',
  E: 'History of America',
  F: 'History of the Americas',
  G: 'Geography, Anthropology, and Recreation',
  H: 'Social Sciences',
  J: 'Political Science',
  K: 'Law',
  L: 'Education',
  M: 'Music',
  N: 'Fine Arts',
  P: 'Language and Literature',
  Q: 'Science',
  R: 'Medicine',
  S: 'Agriculture',
  T: 'Technology',
  U: 'Military Science',
  V: 'Naval Science',
  Z: 'Bibliography, Library Science, and General Information Resources',
};

export const deweyLookup = {
  '0': 'Computer science, information & general works',
  '1': 'Philosophy & psychology',
  '2': 'Religion',
  '3': 'Social sciences',
  '4': 'Language',
  '5': 'Science',
  '6': 'Technology',
  '7': 'Arts & recreation',
  '8': 'Literature',
  '9': 'History & geography',
};

export const convertShelfNumberToCategory = (shelfNumber: string) => {
  const firstChar = shelfNumber.charAt(0);
  return (
    lccLookup[firstChar as keyof typeof lccLookup] ??
    deweyLookup[firstChar as keyof typeof deweyLookup] ??
    'Unknown'
  );
};
