import { useState } from "react";

export default function ListState() {
  const [data, setData] = useState([]);
  return { a: 45, data };
}
