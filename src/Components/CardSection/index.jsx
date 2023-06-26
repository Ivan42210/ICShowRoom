import './CardSection.css'
import PropTypes from 'prop-types';

function CardSection({yourClassName, numberOfColumns, content}) {







  return (
    <>
      <section className={`col-${numberOfColumns} ${yourClassName}-card-section`}>
        {content}
      </section>
    </>
  );
}

CardSection.propTypes = {
  gap: PropTypes.string,
  width: PropTypes.number,
  yourClassName: PropTypes.string,
  numberOfColumns: PropTypes.number,
  content: PropTypes.node.isRequired,
};

export default CardSection;


