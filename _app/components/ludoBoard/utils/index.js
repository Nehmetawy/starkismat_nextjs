export function _getCordsFromRef(gridRef = undefined) {
  if (!gridRef.current) return;
  const boundingRect = gridRef.current.getBoundingClientRect();
  const { width } = boundingRect;
  const positionX = boundingRect.left;
  const positionY = boundingRect.top;
  const widthInt = Math.floor(width);
  const remainder = widthInt % 3;
  const newGridWidth = widthInt - remainder;
  //   -------------------------------------------------
  gridRef.current.style.width = newGridWidth + "px";
  gridRef.current.style.height = newGridWidth + "px";
  //   -------------------------------------------------
  const cellWidth = newGridWidth / 15;
  if (cellWidth === 0 || !cellWidth) return;
  return cellWidth;
}
