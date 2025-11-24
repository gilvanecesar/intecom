import React, { useState, useEffect } from 'react';
import './mecanismo.style.css';
import FormMecanismo from "./FormMecanismo";
import TabelaMecanismo from "./TabelaMecanismo";

export default function Mecanismo() {

  const [editandoID, setEditandoID] = useState(null);

  const [form, setForm] = useState({
    periodo: "",
    produzido: "",
    meta: "",
    diferenca: ""
  });

  const [registros, setRegistros] = useState([]);

  // ============================
  // 🔵 Carregar dados do banco
  // ============================
  useEffect(() => {
    fetch("http://localhost:8000/mecanismo")
      .then(resp => resp.json())
      .then(data => setRegistros(data));
  }, []);


  // ============================
  // 🔵 Atualização do form
  // ============================
  function handleChange(e) {
    const { name, value } = e.target;

    const novoValor = name === "produzido" || name === "meta"
      ? Number(value)
      : value;

    const novoForm = {
      ...form,
      [name]: novoValor
    };

    if (name === "produzido" || name === "meta") {
      const produzido = Number(novoForm.produzido) || 0;
      const meta = Number(novoForm.meta) || 0;
      novoForm.diferenca = produzido - meta;
    }

    setForm(novoForm);
  }


  // ============================
  // 🔵 Editar item
  // ============================
  function iniciarEdicao(id) {
    const item = registros.find(r => r.id === id);

    setForm({
      periodo: item.periodo,
      produzido: item.produzido,
      meta: item.meta,
      diferenca: item.diferenca
    });

    setEditandoID(id);
  }


  // ============================
  // 🔵 Excluir item
  // ============================
  async function excluirRegistro(id) {
    await fetch(`http://localhost:8000/mecanismo/${id}`, {
      method: "DELETE"
    });

    const dados = await fetch("http://localhost:8000/mecanismo")
      .then(r => r.json());

    setRegistros(dados);
  }


  // ============================
  // 🔵 Salvar / Atualizar no banco
  // ============================
  async function handleSubmit(e) {
    e.preventDefault();

    if (
      form.periodo.trim() === "" ||
      form.produzido === "" ||
      isNaN(form.produzido) ||
      form.meta === "" ||
      isNaN(form.meta)
    ) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    if (editandoID === null) {

      // ➤ Cadastrar no banco
      await fetch("http://localhost:8000/mecanismo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

    } else {

      // ➤ Atualizar no banco
      await fetch(`http://localhost:8000/mecanismo/${editandoID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setEditandoID(null);
    }

    // Recarregar dados do banco
    const dados = await fetch("http://localhost:8000/mecanismo")
      .then(r => r.json());

    setRegistros(dados);

    // Limpar form
    setForm({
      periodo: "",
      produzido: "",
      meta: "",
      diferenca: ""
    });
  }


  return (
    <div>

      <FormMecanismo
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editandoID={editandoID}
      />

      <TabelaMecanismo
        registros={registros}
        iniciarEdicao={iniciarEdicao}
        excluirRegistro={excluirRegistro}
      />

    </div>
  );
}
