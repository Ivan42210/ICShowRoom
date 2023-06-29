/**
 * Composant de section de cartes avec styles réactifs.
 *
 * @component
 * @param {Object} props - Les props du composant.
 * @param {string} [props.customClassSection] - Classe personnalisée pour la section de cartes.
 * @param {Object} [props.customStyle] - Styles personnalisés à appliquer à la section de cartes.
 * @param {number} [props.colNumber=3] - Nombre de colonnes pour les cartes.
 * @param {React.ReactNode} props.children - Contenu à afficher à l'intérieur de la section de cartes.
 * @param {string} [props.gap='20px'] - Espacement entre les cartes.
 * @param {boolean} [props.defaultStyle=true] - Indique si les styles par défaut doivent être appliqués.
 * @param {number} [props.responsiveCols=2] - Nombre de colonnes réactives pour les résolutions spécifiques.
 * @returns {JSX.Element} Composant CardSection.
 */

import './CardSection.css'
import { useEffect } from 'react';
import PropTypes from 'prop-types';


const DEFAULT_COL = 3
const DEFAULT_GAP = '20px';
const ENABLE_DEFAULT_STYLE = true
const RESPONSIVE_COLUMNS = 2



export default function CardSection({ customClassSection,customStyle, colNumber = DEFAULT_COL, children, gap=DEFAULT_GAP, defaultStyle=ENABLE_DEFAULT_STYLE, responsiveCols=RESPONSIVE_COLUMNS }) {

  const defaultClass = `mbi-grid-gap`;
  const defaultMediaQuery = `
  @media (min-width: 601px) and (max-width: 767px) {
    .mbi-grid-gap {
      gap: ${gap};
    }
  }

    @media (min-width: 601px) and (max-width: 767px) {
      .mbi-grid-gap {
        gap: ${gap};
        grid-template-columns: repeat(${responsiveCols}, 1fr);
      }
    }
    @media (min-width: 768px) and (max-width: 991px) {
      .mbi-grid-gap {
        gap: ${gap};
        grid-template-columns: repeat(${responsiveCols}, 1fr);
      }
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      .mbi-grid-gap {
        gap: ${gap};
        grid-template-columns: repeat(${colNumber > 3 ? 3 : (responsiveCols ? responsiveCols : 3)}, 1fr);
      }
    }
    @media (min-width: 1200px) {
      .mbi-grid-gap {
        gap: ${gap};
        grid-template-columns: repeat(${colNumber}, 1fr);
      }
    }
  `;

  useEffect(() => {
    if (defaultStyle) {
      const styleTag = document.createElement('style');
      styleTag.innerHTML = defaultMediaQuery;
      document.head.appendChild(styleTag);
    }
  }, []);


  const componentClass = customClassSection ? customClassSection : defaultClass

  return (
    <section className={componentClass} style={customStyle}>
      {children}

    </section>
  )
}

CardSection.propTypes = {
  customClassSection: PropTypes.string,
  colNumber: PropTypes.number,
  children: PropTypes.node.isRequired,
  defaultStyle: PropTypes.bool,
  gap: PropTypes.string,
  customStyle: PropTypes.node,
  responsiveCols: PropTypes.number
};


