import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
    const isExternalLink = props.path.startsWith('http');
    
    const CardContent = (
      <figure className='cards__item__pic-wrap'>
        {props.videoUrl ? (
          <iframe
            className='cards__item__video'
            src={props.videoUrl}
            title={props.text}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img
            className='cards__item__img'
            alt={props.text}
            src={props.src}
          />
        )}
      </figure>
    );

    return (
      <>
        <li className='cards__item'>
          {isExternalLink ? (
            <a className='cards__item__link' href={props.path} target="_blank" rel="noreferrer">
              {CardContent}
              <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
              </div>
            </a>
          ) : (
            <Link className='cards__item__link' to={props.path}>
              {CardContent}
              <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
              </div>
            </Link>
          )}
        </li>
      </>
    );
}

export default CardItem;
