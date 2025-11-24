import React from "react";

export default function FormMecanismo({
  form,
  handleChange,
  handleSubmit,
  editandoID,
}) {
  return (
    <form className="form__mec" onSubmit={handleSubmit}>
      <h1>Cadastro de Peças Produzidas</h1>

      <div className="form__inp">
        <input
          type="date"
          name="periodo"
          value={form.periodo}
          onChange={handleChange}
        />
        <input
          type="number"
          name="produzido"
          placeholder="Qtde"
          value={form.produzido}
          onChange={handleChange}
        />

        <input
          type="number"
          name="meta"
          placeholder="Meta"
          value={form.meta}
          onChange={handleChange}
        />

        <input
          type="number"
          name="diferenca"
          placeholder="Diferença"
          value={form.diferenca}
          readOnly
        />
      </div>

      <div className="cnt__btn">
        <button className="btn__mec" type="submit">
          {editandoID ? "Salvar Alterações" : "Enviar"}
        </button>
      </div>
    </form>
  );
}
