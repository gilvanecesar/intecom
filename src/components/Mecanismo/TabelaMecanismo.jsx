import React from "react";

export default function TabelaMecanismo({ registros, iniciarEdicao, excluirRegistro }) {
    return (
        <div className="tabela-wrapper">
            <table className="tabela__mec">
                <thead>
                    <tr>
                        <th>PERÍODO</th>
                        <th>PRODUZIDO</th>
                        <th>META</th>
                        <th>DIFERENÇA</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>

                <tbody>
                    {registros.map((item, i) => (
                        <tr key={i}>
                            <td data-label>{item.periodo}</td>
                            <td data-label>{item.produzido}</td>
                            <td data-label>{item.meta}</td>
                            <td data-label>{item.diferenca}</td>
                            <td data-label><button className="btn-editar" onClick={() => iniciarEdicao(item.id)}>
                                Editar
                            </button></td>
                            <td><button className="btn-excluir" onClick={() => excluirRegistro(item.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}