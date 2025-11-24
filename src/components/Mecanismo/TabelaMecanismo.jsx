export default function TabelaMecanismo({
  registros,
  iniciarEdicao,
  excluirRegistro,
}) {
  function formatarData(iso) {
    if (!iso) return "";
    const [ano, mes, dia] = iso.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  return (
    <table className="tabela__mec">
      <thead>
        <tr>
          <th>Período</th>
          <th>Produzido</th>
          <th>Meta</th>
          <th>Diferênça</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {registros.map((item) => (
          <tr key={item.id}>
            <td>{formatarData(item.periodo)}</td>
            <td>{item.produzido}</td>
            <td>{item.meta}</td>
            <td>{item.diferenca}</td>

            <td>
              <button
                className="btn-editar"
                onClick={() => iniciarEdicao(item.id)}
              >
                Editar
              </button>
              <button
                className="btn-excluir"
                onClick={() => excluirRegistro(item.id)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
