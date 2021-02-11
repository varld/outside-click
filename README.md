# Outside Click

A simple outside click listener, with no external dependencies.

## Install

```
# yarn
yarn add @varld/outside-click

# npm
npm install --save @varld/outside-click
```

## Usage

```typescript
import outsideClick from '@varld/outside-click';

outsideClick(element, (clickEvent) => {
  console.log('Someone clicked outside!');
});
```

## API

### `outsideClick(elements, onOutsideClick, isEnabled)`

#### `elements: HTMLElement | HTMLElement[]`

The element(s) to attache the outside-click listener to. This can be a single `HTMLElement` or an array of `HTMLElement`.

#### `onOutsideClick: (evt: MouseEvent) => any`

This callback will be called, when an outside-click occurs.

#### `isEnabled?: () => boolean`

An __optional__ function which disables the outside-click listener if it returns false.

## License

MIT © [Tobias Herber](https://herber.space)
