const padID = (id: number): string => {
  let _id = String(id);
  return _id.length === 1 ? '00' + _id : _id.length === 2 ? '0' + _id : _id;
};

export { padID };
