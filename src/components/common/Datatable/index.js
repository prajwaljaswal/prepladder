import React from 'react';
import Pagination from '../Pagination';

const DataTable = ({
  tableData,
  totalPageCount,
  totalElementCount,
  updatePageNum,
  currentPageNum,
  hidePaginationFromTable,
  updatePaginationParams,
  loading,
}) => {
  const onPageChanged = (data) => {
    updatePaginationParams(data);
  };

  const resultCount = tableData.results.length;

  return tableData?.results?.length > 0 ? (
    <div>
      {resultCount > 0 &&
        (loading ? (
          <div className="loading">Loading</div>
        ) : (
          <div id="no-more-tables">
            <table className="table text-center">
              <thead className="cf">
                <tr className="numeric">
                  {tableData.labels.map(
                    (col) =>
                      col !== null && (
                        <th id="master-head" key={col}>
                          {col}
                        </th>
                      ),
                  )}
                </tr>
              </thead>
              <tbody>
                {tableData.results.map((result) => (
                  <tr key={result.key}>
                    {Object.keys(result.colData).map((key, index) => {
                      return (
                        result.colData[key] !== null && (
                          <td data-title={key} id="table__cell" key={key}>
                            {result.colData[key]}
                          </td>
                        )
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  ) : (
    <>{loading ? <div className="loading">Loading</div> : <h3>No data available for your selection criteria</h3>}</>
  );
};
export default DataTable;
