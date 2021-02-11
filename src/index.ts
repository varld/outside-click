/**
 * Attach outside click listener
 * @param elements The inside elements
 * @param onOutsideClick Called on outside click
 */
let outsideClick = (
  elements: HTMLElement | HTMLElement[],
  onOutsideClick: (evt: MouseEvent) => any,
  isEnabled?: () => boolean
) => {
  if (typeof window == 'undefined') return () => {};

  let elementsArray = Array.isArray(elements) ? elements : [elements];

  let handler = (evt: MouseEvent) => {
    if (typeof isEnabled == 'function' && !isEnabled()) return;
    let targetElement = evt.target as HTMLElement;

    do {
      if (elementsArray.indexOf(targetElement) != -1) return;
      targetElement = targetElement.parentNode as HTMLElement;
    } while (targetElement);

    onOutsideClick(evt);
  };

  document.addEventListener('click', handler);
  return () => document.removeEventListener('click', handler);
};

export default outsideClick;
