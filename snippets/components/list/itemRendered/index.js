export default function ItemRenderer({ data = [], Element = <></>, id = "" }) {
  const array = [];

  data.every((item, index) => {
    const final = {};
    const keys = Object.keys(item);
    keys.every((k) => {
      const toLower = k.toLowerCase();
      final[toLower] = item[k];
      return true;
    });
    const Ele = <Element item={final} key={final[id] || index} />;
    if (Ele) {
      array.push(Ele);
    }
    return true;
  });
  return array;
}
