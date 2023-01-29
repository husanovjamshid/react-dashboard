import "./table.scss";
import filter from "../../assets/images/filter.svg";
import sort from "../../assets/images/sort.svg";
import { data } from "../Data/data";
import left from '../../assets/images/arrow - left.svg'
import right from '../../assets/images/arrow - right.svg'

export const TichketPage = () => {
  return (
    <>
      <div className="table__Wrap mb-4">
        <div className="table__sort d-flex align-items-center justify-content-between">
          <h3 className="all__ticket">All tickets</h3>
          <div className="filter d-flex align-items-center justify-content-between gap-4">
            <p className="table__filter gap-1">
              <img src={sort} alt="" /> Sort
            </p>
            <p className="table__filter gap-1">
              <img src={filter} alt="" /> Filter
            </p>
          </div>
        </div>
        <table className="table align-middle mt-4 mb-0 bg-white ">
          <thead className="bg-light">
            <tr>
              <th className="ticket__category">Ticket details</th>
              <th className="ticket__category">Customer name</th>
              <th className="ticket__category">Date</th>
              <th className="ticket__category">Priority</th>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={item.img}
                      alt=""
                      width="45"
                      height="45"
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="ticket__top mb-1">{item.details.linked}</p>
                      <p className="ticket__bottom mb-0">
                        {item.details.update}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="ticket__top mb-1">{item.customers.name}</p>
                  <p className="ticket__bottom mb-0">{item.customers.date}</p>
                </td>

                <td>
                  <p className="ticket__top">{item.date.month}</p>
                  <p className="ticket__bottom">{item.date.hour}</p>
                </td>
                <td>
                  <button type="button" className={item.classes}>
                    {item.priority}
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>

        <div className="footer gap-5">
          <p className="footer__page">
            Rows per page:{" "}
            <select className="ticket__select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </p>

          <div className="d-flex align-items-center gap-3">
          <p className="footer__page">1-8 of 1240 </p>
          <div className="imgs">
            <img src={left} alt="" />
            <img src={right} alt="" />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
