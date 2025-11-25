import "./dashboard.style.css";
import { CiCalendarDate } from "react-icons/ci";
import { FaIndustry } from "react-icons/fa";

export default function Dashboard() {
  return (
    <>
      <div className="card-titulo">
        <h1>Cards Indicadores</h1>
      </div>

      {/* container principal */}
      <div className="container">
        {/* CARD 1 */}
        <div className="card-1">
          <div className="card-1-interno">
            <FaIndustry className="fa-ind" />
            <h2>Peças por dia</h2>
          </div>
        </div>

        {/* CARD 02     */}
        <div className="card-2">
          <div className="card-2-interno">
            <CiCalendarDate className="fa-ind" />
            <h2>Dias trabalhados</h2>
          </div>
        </div>

        {/* CARD 03 */}
        <div className="card-3">
          <div className="card-3-interno">
            <CiCalendarDate className="fa-ind" />
            <h2>Dias trabalhados</h2>
          </div>
        </div>

        {/* CARD 04     */}
        <div className="card-4">
          <div className="card-4-interno">
            <FaIndustry className="fa-ind" />
            <h2>Dias trabalhados</h2>
          </div>
        </div>
      </div>

      <section className="section-container">
        <div className="cnt-section">
          <h1>AQUI VAI OS INDICADORES</h1>
        </div>
      </section>
    </>
  );
}
