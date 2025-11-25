import { useEffect, useState } from "react";

export default function Kpis({ onCalcular }) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetch("http://localhost:8000/mecanismo")
      .then((resp) => resp.json())
      .then((data) => {
        setDados(data);

        const total = data.reduce(
          (acc, item) => acc + Number(item.produzido || 0),
          0,
        );

        onCalcular(total);
      })
      .catch((err) => {
        console.error(err);
        setDados([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const producaoTotal = dados.reduce((acc, item) => {
    const valor = Number(item.produzido) || 0;
    return acc + valor;
  }, 0);

  return <div style={{ color: "white", textAlign: "center" }}></div>;
}
