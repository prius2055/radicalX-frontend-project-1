import arrowsquaredown from "../images/arrowsquaredown.svg";
import qualifiedcandidates from "../images/qualifiedcandidates.svg";
import buttonsgroup from "../images/buttonsgroup.svg";

import "./InternTable.css";

export default function InternTable() {
  return (
    <>
      <table cellPadding="0" cellSpacing="0">
        <thead>
          <tr>
            <th>
              <td className="thead-title">Internship Title</td>
              <td className="thead-title-img">
                <img src={arrowsquaredown} alt="arrow square down" />
              </td>
            </th>
            <th>
              <td className="thead-period">Completion period</td>
              <td className="thead-period-img">
                <img src={arrowsquaredown} alt="arrow square down" />
              </td>
            </th>
            <th>
              <td className="thead-total">Total Enrolled</td>
              <td className="thead-total-img">
                <img src={arrowsquaredown} alt="arrow square down" />
              </td>
            </th>
            <th>
              <td className="thead-candidates">Qualified candidates</td>
              <td className="thead-candidates-img">
                <img src={arrowsquaredown} alt="arrow square down" />
              </td>
            </th>
            <th>
              <td className="thead-actions">
                <p>Actions</p>
              </td>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="tbody-title">
              <h4>Product design GVI </h4>
              <p>
                Amet minim mollit non deserunt est sit aliqua dolor do amet
                sint.
              </p>
            </td>

            <td className="tbody-period">
              <h4>120 days</h4>
              <p>(created on 10/12/2021)</p>
            </td>
            <td>20,000</td>
            <td>
              <p>120</p>
              <img src={qualifiedcandidates} alt="qualified candidates" />
            </td>
            <td>
              <img src={buttonsgroup} alt="buttons" />
            </td>
          </tr>

          <tr>
            <td className="tbody-title">
              <h4>Product design GVI </h4>
              <p>
                Amet minim mollit non deserunt est sit aliqua dolor do amet
                sint.
              </p>
            </td>

            <td className="tbody-period">
              <h4>120 days</h4>
              <p>(created on 10/12/2021)</p>
            </td>
            <td>20,000</td>
            <td>
              <p>120</p>
              <img src={qualifiedcandidates} alt="qualified candidates" />
            </td>
            <td>
              <img src={buttonsgroup} alt="buttons" />
            </td>
          </tr>

          <tr>
            <td className="tbody-title">
              <h4>Product design GVI </h4>
              <p>
                Amet minim mollit non deserunt est sit aliqua dolor do amet
                sint.
              </p>
            </td>

            <td className="tbody-period">
              <h4>120 days</h4>
              <p>(created on 10/12/2021)</p>
            </td>
            <td>20,000</td>
            <td>
              <p>120</p>
              <img src={qualifiedcandidates} alt="qualified candidates" />
            </td>
            <td>
              <img src={buttonsgroup} alt="buttons" />
            </td>
          </tr>

          <tr>
            <td className="tbody-title title-last-child">
              <h4>Product design GVI </h4>
              <p>
                Amet minim mollit non deserunt est sit aliqua dolor do amet
                sint.
              </p>
            </td>

            <td className="tbody-period">
              <h4>120 days</h4>
              <p>(created on 10/12/2021)</p>
            </td>
            <td>20,000</td>
            <td>
              <p>120</p>
              <img src={qualifiedcandidates} alt="qualified candidates" />
            </td>
            <td className="actions-last-child">
              <img src={buttonsgroup} alt="buttons" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
