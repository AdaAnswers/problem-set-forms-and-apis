import { shape, string, number } from 'prop-types';

export const ResultType = shape({
  location: string.isRequired,
  latitude: number.isRequired,
  longitude: number.isRequired,
});
