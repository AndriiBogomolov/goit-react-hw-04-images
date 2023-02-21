import React, { useState, useEffect } from 'react';
import { Button } from './components/Button/Button';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { fetchImages } from 'service/fetchImages';
import { Loader } from './components/Loader/Loader';
import { Container } from './App.styled';
import Notiflix from 'notiflix';

export function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImgs, setTotalImgs] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    const fetchImagesData = async () => {
      try {
        const resp = await fetchImages(query, page);
        console.log(resp);
        setImages(prevImages => [...prevImages, ...resp.hits]);
        setTotalImgs(resp.totalHits);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImagesData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = query => {
    // console.log(query);
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const totalPage = images.length / totalImgs;

  return (
    console.log(images, 'this console is in render'),
    (
      <Container>
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}

        {totalPage < 1 && !isLoading && <Button onClick={handleLoadMore} />}

        {error &&
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          )}
      </Container>
    )
  );
}
