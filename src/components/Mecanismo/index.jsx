import React, { useState } from 'react';
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

  function handleChange(e) {
    const { name, value } = e.target;


    const novoValor = name === "produzido" || name === "meta"
      ? Number(value)
      : value

    //atualiza campos alterados
    const novoForm = {
      ...form,
      [name]: novoValor
    };

    //calculo automatico em tempo real
    if (name === "produzido" || name === "meta") {
      const produzido = Number(novoForm.produzido) || 0;
      const meta = Number(novoForm.meta) || 0;
      novoForm.diferenca = produzido - meta;
    }
    setForm(novoForm)
  }

  // Quando clicar em EDITAR
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

  function excluirRegistro(id) {
    const filtrados = registros.filter(item => item.id !== id);
    setRegistros(filtrados)
  }


  // Cadastrar ou Atualizar
  function handleSubmit(e) {
    e.preventDefault();

    // impedir registro vazio
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
      // CADASTRAR
      const novoRegistro = {
        id: registros.length + 1,
        ...form
      };

      setRegistros([...registros, novoRegistro]);

    } else {
      // ATUALIZAR
      const registrosAtualizados = registros.map(item => {
        if (item.id === editandoID) {
          return {
            ...item,      // mantém o ID
            ...form,
            id: item.id   // garante que o ID não muda
          };
        } else {
          return item;
        }
      });

      setRegistros(registrosAtualizados);
      setEditandoID(null);
    }

    // limpar form
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
