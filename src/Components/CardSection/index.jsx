import './CardSection.css'
import PropTypes from 'prop-types';

const DEFAULT_STYLE = true
const DEFAULT_COL = 3
const DEFAULT_WIDTH = '100%'
const DEFAULT_GAP = '20px'

export default function CardSection({ customClassSection, colNumber = DEFAULT_COL, children, enableDefaultStyle = DEFAULT_STYLE, yourGap = DEFAULT_GAP, yourWidth = DEFAULT_WIDTH }) {

  const sectionStyle = enableDefaultStyle ? ({ width: yourWidth, display: 'grid', gridTemplateColumns: `repeat(${colNumber}, 1fr)`, gap: yourGap, }) : null;

  const classSection = customClassSection ? customClassSection : null;

  return (
    <section className={classSection} style={sectionStyle}>
      {children}

    </section>
  )
}

CardSection.propTypes = {
  customClassSection: PropTypes.string,
  colNumber: PropTypes.number,
  children: PropTypes.node.isRequired,
  enableDefaultStyle: PropTypes.bool,
  yourGap: PropTypes.string,
  yourWidth: PropTypes.string,
};


