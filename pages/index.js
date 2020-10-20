import Head from 'next/head';
import Link from 'next/link';
import data from '../data/data.json';
import React, { useState, useEffect } from 'react';
import useEventListener from '@use-it/event-listener';
import Lightbox from 'react-awesome-lightbox';
// You need to import the CSS only once

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const INITIAL_ALBUM = 'home';
const INITIAL_ALBUM_IMAGES = data.albums[0].photos;

export default function Home() {
  const [currentSection, setCurrentSection] = useState(INITIAL_ALBUM);
  const [images, setImages] = useState(INITIAL_ALBUM_IMAGES);
  const [showThumnails, setShowThumbnails] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isLightBoxOpen, setLightBox] = useState(false);

  const closedLightBox = () => {
    setLightBox(false);
  };

  const openLightBox = () => {
    setLightBox(true);
  };

  useEffect(() => {
    const currentAlbum = data.albums.find((album) => {
      return album.category === currentSection;
    });

    if (currentAlbum) {
      setImages(currentAlbum.photos);
    } else {
      // Search in travel album subcategory
      const travelAlbum = data.albums.find((album) => {
        return album.category === 'travel';
      });
      const currentAlbum = travelAlbum.subcategory.find((album) => {
        return album.name === currentSection;
      });
      if (currentAlbum) {
        setImages(currentAlbum.photos);
      }
    }
  }, [currentSection]);

  function handler({ key }) {
    console.log('downHandler - imageIndex', imageIndex);
    if (key === 'ArrowLeft') {
      previousImage();
    }
    if (key === 'ArrowRight') {
      nextImage();
    }
  }

  // https://stackoverflow.com/questions/29069639/listen-to-keypress-for-document-in-reactjs
  useEventListener('keydown', handler);

  const onImageClick = (index) => {
    if (index) {
      setImageIndex(index);
    } else if (index === 0) {
      setImageIndex(0);
    }
    setShowThumbnails(!showThumnails);
  };

  const onToggleThumbnailsView = () => {
    setShowThumbnails(!showThumnails);
  };

  const setCurrentSectionImages = (sectionName) => {
    setImageIndex(0);
    setCurrentSection(sectionName);
  };

  const listElement = (sectionName, index) => {
    return (
      <li
        className={'navigationElement'}
        key={index}
        onClick={(e) => {
          // console.log(e.target.innerText);
          setCurrentSectionImages(e.target.innerText.toLowerCase());
        }}
      >
        {currentSection === sectionName ? <b>{capitalize(sectionName)}</b> : <span>{capitalize(sectionName)}</span>}
      </li>
    );
  };

  const imagesList = images.map((image, index) => {
    return (
      <>
        <img
          onClick={() => {
            onImageClick(index);
          }}
          key={index}
          className="photo-image thumbnails"
          alt={image.caption ? image.caption : ''}
          src={image.src}
        />
      </>
    );
  });

  const previousImage = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      const newIndex = imageIndex - 1;
      setImageIndex(newIndex);
    }
  };

  const nextImage = () => {
    const newIndex = imageIndex + 1;
    if (newIndex <= images.length - 1) {
      setImageIndex(newIndex);
      console.log('newIndex', newIndex);
    } else {
      setImageIndex(0);
    }
  };

  const imagesForLightbox = images.map((image) => {
    return { url: image.src, title: image.caption };
  });

  return (
    <>
      <Head>
        <title>{data.page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          // background-color: ${showThumnails ? 'white' : '#C0C0C0'};
        }
        .title {
          color: #404040;
        }

        .main-wrapper {
          display: flex;
        }

        /*
        * Tablet
        * Medium devices (tablets) 
        */
        @media (max-width: 1024.98px) {
          /*    ...  */
          .main-wrapper {
            padding: 1em;
            flex-direction: column;
          }
          .photo-image {
            width: 100% !important;
          }

          .title {
            margin: 0px;
          }

          /*  ul.list > li {
            display: inline-block;
          }
          li {
            margin-left: 1em;
          }*/

          .footer {
            padding-left: 1em !important;
          }
        }

        /**
         *  Desktop
         */
        @media (min-width: 1024.99px) {
          // TODO: do, responsive view for mobile...
          .main-wrapper {
            padding: 3em;
            flex-direction: row;
            justify-content: flex-start;
          }

          .list.contacts {
            margin-top: 3em;
          }
          .title {
            width: 5em;
            word-wrap: break-word;
          }
        }

        .main-container {
          display: flex;
          flex-direction: column;
          // min-height: 90vh;
          max-height: 90vh;
        }

        .footer {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          // background-color: red;
          // color: white;
          text-align: left;
          padding-left: 3em;
          background-color: white;
        }

        .side-bar {
          /*  background-color: green;*/
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          // position: fixed;
          padding-right: 1em;
        }

        .main-canvas {
          /* background-color: blue;*/
          flex-grow: 8;
          overflow: scroll;
          max-height: 90vh;
          background-color: white;
        }

        .list {
          list-style-type: none;
          padding-left: 0px;
          cursor: pointer;
        }

        .nested-list {
          list-style-type: none;
          cursor: pointer;
          font-size: small;
        }

        li {
          padding-bottom: 0.1em;
        }

        .cursor-pointer {
          cursor: pointer;
        }

        .list.contacts {
          font-size: small;
        }

        /* TODO: do this for various break points */
        .photo-image {
          max-height: 90%;
          width: auto;
          min-height: 80%;
          height: auto;
          /* center */
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .images-list-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: baseline;
          align-items: flex-start;
        }
        .thumbnails {
          width: 30%;
          padding: 1em;
        }

        .image-caption {
          text-align: center;
          font-size: small;
        }

        .link {
          text-decoration: none;
          color: black;
        }

        /*lightbox override background color*/
        .lb-container {
          background-color: black !important;
        }

        .lb-container .lb-header {
          // background: white;
          // box-shadow: none;
          // color: black;
        }
        // TODO: need different CSS for portrait and landscape orientation?
      `}</style>
      <div className="main-container">
        <div className="main-wrapper">
          <div className="side-bar">
            <h1 className={'title'}>
              {data.page.author.name} {data.page.author.lastname}
            </h1>
            <div className="menu">
              <ul className="list navigation">
                {data.albums.map((album) => {
                  if (album.subcategory) {
                    const result = album.subcategory.map((subcategoryAlbum) => {
                      return listElement(subcategoryAlbum.name);
                    });

                    return (
                      <>
                        <li className={'navigationElement'}>{capitalize(album.category)}</li>
                        <ul className="nested-list">{result}</ul>
                      </>
                    );
                  } else {
                    return listElement(album.category);
                  }
                })}
              </ul>
              <ul className="list contacts">
                <Link href="https://pietropassarelli.com">
                  <a className={'link'} target="_blank" rel="noopener noreferrer">
                    About{' '}
                  </a>
                </Link>
              </ul>
            </div>
          </div>
          <div className="main-canvas">
            {!showThumnails ? (
              <>
                <img onClick={onImageClick} className="photo-image" alt="Responsive image" src={images[imageIndex].src}></img>
                <p className={'image-caption'}> {images[imageIndex].caption ? images[imageIndex].caption : <div>&nbsp;</div>}</p>
              </>
            ) : (
              <>
                <div className={'images-list-container'}>{imagesList} </div>
              </>
            )}
          </div>
        </div>
        <div className="footer">
          <p className="thumnail-toggle">
            {isLightBoxOpen ? (
              <Lightbox startIndex={imageIndex} images={imagesForLightbox} onClose={closedLightBox} allowZoom={false} allowRotate={false} />
            ) : (
              <small onClick={openLightBox}>⤢ |</small>
            )}
            <span className={'cursor-pointer'} onClick={onToggleThumbnailsView}>
              <small> {showThumnails ? ' HIDE THUMBNAILS' : 'SHOW THUMBNAILS'}</small>
            </span>
            {!showThumnails ? (
              <>
                {' '}
                <span> {`| ${imageIndex + 1}/${images.length}`}</span>
                <span>
                  {' | '}
                  <small>
                    <span className={'cursor-pointer'} onClick={previousImage}>
                      {'←'}
                    </span>{' '}
                    /{' '}
                    <span className={'cursor-pointer'} onClick={nextImage}>
                      {` →`}
                    </span>
                  </small>
                </span>
              </>
            ) : null}
          </p>
        </div>
      </div>
    </>
  );
}
