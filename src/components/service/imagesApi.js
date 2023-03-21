import axios from 'axios';

export const fetchImages = async (query, page) => {
  return await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=33197930-0348e44db3821c8c552d6d0a0&image_type=photo&orientation=horizontal&per_page=12&`
  );
};
