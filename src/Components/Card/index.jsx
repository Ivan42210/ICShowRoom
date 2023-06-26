import './Card.css'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const DEFAULT_CLASS_ARTICLE = 'card';
const DEFAULT_CLASS_LINK = 'card-link';
const DEFAULT_CLASS_IMG = 'card-thumbnail';
const DEFAULT_CLASS_BODY = 'card-body';
const DEFAULT_CLASS_TITLE = 'card-title';
const DEFAULT_CLASS_DESCRIPTION = 'card-description';
const DEFAULT_CLASS_DATE = 'card-date';
const DEFAULT_CLASS_AUTHOR = 'card-author';
const DEFAULT_CLASS_AUTHOR_PIC = 'card-author-pic';

function Card({ link, id, title, thumbnail, description, author, date, authorPic, classArticle = DEFAULT_CLASS_ARTICLE, classLink = DEFAULT_CLASS_LINK, classImg = DEFAULT_CLASS_IMG, classBody = DEFAULT_CLASS_BODY, classTitle = DEFAULT_CLASS_TITLE, classDescription = DEFAULT_CLASS_DESCRIPTION, classDate = DEFAULT_CLASS_DATE, classAuthor = DEFAULT_CLASS_AUTHOR, classAuthorPic = DEFAULT_CLASS_AUTHOR_PIC }) {
  return (
    <article className={classArticle}>
      <NavLink to={`${link}/${id}`} className={classLink}>
        <img src={thumbnail} alt="" className={classImg}/>
        <section className={classBody}>
          <h2 className={classTitle}>{title}</h2>
          <p className={classDescription}>{description}</p>
          <span className={classDate}>{author}</span>
          <span className={classAuthor}>{date}</span>
          <img src={authorPic} alt="" className={classAuthorPic}/>
        </section>
      </NavLink>
    </article>
  );
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  authorPic: PropTypes.string,
  yourClassName: PropTypes.string,
  height: PropTypes.number,
  classArticle: PropTypes.string,
  classLink: PropTypes.string,
  classImg: PropTypes.string,
  classTitle: PropTypes.string,
  classBody: PropTypes.string,
  classDescription: PropTypes.string,
  classCardDate: PropTypes.string,
  classAuthor: PropTypes.string,
  classAuthorPic: PropTypes.string,
  classDate: PropTypes.string,
};

export default Card;
