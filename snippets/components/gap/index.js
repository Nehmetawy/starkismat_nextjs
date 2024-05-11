export default function GAP({ h = 0, w = 0, unit = "px" }) {
  const style = {
    height: `${h}${unit}`,
    width: `${w}${unit}`,
  };
  return <div style={style} />;
}
