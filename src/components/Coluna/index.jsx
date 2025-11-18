import './coluna.style.css'
import { useState } from "react";

export default function Coluna() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    data: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dados enviados:", form);
  }

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-4">Formulário dentro da Coluna</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">

        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
            type="date"
            name="data"
            placeholder="Data"
            value={form.data}
            oneChange={handleChange}
            className='date__col'
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
