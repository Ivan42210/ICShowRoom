import PropTypes from 'prop-types';
import { useState } from 'react';

const DEFAULT_VALUE = "All";

export default function Filter({ valueArray }) {
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setValue] = useState(DEFAULT_VALUE);

  const handleValue = (value) => {
    setValue(value);
  };

  return (
    <>
      <section>
        <input type="button" value={inputValue} onClick={() => setOpen(!isOpen)} />
        {isOpen && (
          <div>
            {inputValue !== DEFAULT_VALUE && (
                <label key="default" style={{ display: "block" }} onClick={() => handleValue(DEFAULT_VALUE)}>
                    {DEFAULT_VALUE}
                </label>
             )}
            {valueArray.map((item) => (
                inputValue !== item && (
                    <label key={item} htmlFor={item} aria-label={item} style={{ display: "block" }} onClick={() => handleValue(item)}>
                        {item}
                    </label>
                )
            ))}
          </div>
        )}
        
      </section>
    </>
  );
}

Filter.propTypes = {
  valueArray: PropTypes.array.isRequired,
};

