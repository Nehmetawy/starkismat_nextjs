import SapreeLiveItem from "./sapreeItem";

export default function RenderLiveItems({ data = [], ping }) {
  const array = [];

  if (!Array.isArray(data)) return;

  data.forEach((element, index) => {
    if (!element.claimed) {
      array.push(<SapreeLiveItem item={element} key={index} ping={ping} />);
    }
  });
  return array;
}
