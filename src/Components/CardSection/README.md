# CardSection

A component for displaying a section of cards with responsive styles.

## Installation

```bash
npm install card-section
```

## Usage

```jsx
import CardSection from 'card-section';

<CardSection
  customClassSection="my-card-section"
  customStyle={{ backgroundColor: 'red', color: 'white' }}
  colNumber={4}
  gap="30px"
  defaultStyle={false}
  responsiveCols={3}
>
  // Card content goes here...
</CardSection>
```

## Props

| Prop                 | Type                     | Description                                                                           | Default Value  |
| -------------------- | ------------------------ | ------------------------------------------------------------------------------------- | -------------- |
| customClassSection   | string                   | Custom class for the card section.                                                     | -              |
| customStyle          | object                   | Custom styles to be applied to the card section.                                       | -              |
| colNumber            | number                   | Number of columns for the cards.                                                       | 3              |
| children             | React.ReactNode          | Content to be displayed inside the card section.                                       | -              |
| gap                  | string                   | Spacing between the cards.                                                             | '20px'         |
| defaultStyle         | boolean                  | Indicates whether to apply default styles.                                             | true           |
| responsiveCols       | number                   | Number of responsive columns for specific resolutions.                                 | 2              |

## Example with Default Styles

The `CardSection` component applies default responsive styles for different resolutions. If `defaultStyle` is set to `true`, the following styles will be applied:

```css
@media (min-width: 601px) and (max-width: 767px) {
  .mbi-grid-gap {
    gap: 20px;
  }
}

@media (min-width: 601px) and (max-width: 767px) {
  .mbi-grid-gap {
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .mbi-grid-gap {
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .mbi-grid-gap {
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .mbi-grid-gap {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Note

Make sure to include the necessary CSS styles for the component to work properly.

---

**NOTE:** This component is intended for use with React.
```

Please note that the documentation assumes the existence of CSS styles and the availability of the `card-section` package. You may need to adjust the package name and import statements to match your actual setup.
