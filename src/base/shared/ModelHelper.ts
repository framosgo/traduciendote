import { Map, List, Record } from 'immutable';

export const generateList = (data, Model): List<Record> => {
  return List<Record>(data.map(item => new Model(item)));
};
