const serializerArrayOfObjects = (arrayOfObjects) => {
  let serializedArrayOfObjects = '';
  arrayOfObjects.map((object) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Object.entries(object).forEach(([key, value]) => {
      serializedArrayOfObjects += `${key} - ${value}\n`;
    }),
  );

  return serializedArrayOfObjects;
};

module.exports = serializerArrayOfObjects;
