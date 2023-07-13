import React from "react";
import Pagination from "../Pagination";


const DataTable = ({tableData,totalPageCount,totalElementCount,updatePageNum,currentPageNum,hidePaginationFromTable,updatePaginationParams,loading})=>{

const  onPageChanged = (data) => {
  
    updatePaginationParams(data);
  };


    const resultCount = tableData.results.length;

    return tableData?.results?.length > 0 ? (
      <div>
        {resultCount > 0 && (
          loading ? <div className="loading">Loading</div>:
          <table className="table table-responsive text-center">
            <thead>
              <tr className="table__row table__row--header">
                {tableData.labels.map(
                  (col) =>
                    col !== null && (
                      <th className="master-head"  key={col}>
                        {(
                          col 
                        )}
                      </th>
                    )
                )}
              </tr>
            </thead>
            <tbody>
              {tableData.results.map((result) => (
                <tr
                  className="table__row table__row--selectable"
                  key={result.key}
                >
                  {Object.keys(result.colData).map((key, index) => {
                    if (index === 0) {
                      return (
                        <th className="table__cell" key={key}>
                          {result.colData[key]}
                        </th>
                      );
                    }
                    return (
                      result.colData[key] !== null && (
                        <td className="table__cell" key={key}>
                          {result.colData[key]}
                        </td>
                      )
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* {!hidePaginationFromTable && (
          <div className="row">
            <div className="col">
              <Pagination
                // totalPageCount={totalPageCount}
                // totalElementCount={totalElementCount}
                // updatePageNum={updatePageNum}
                // currentPageNum={currentPageNum}
                totalItems={200}
                 itemsPerPage={2} 
              />
            </div>
          </div>
        )} */}
      </div>
    ) : (
      <>
      {loading ? <div className="loading">Loading</div> : <h3>No data available for your selection criteria</h3>}
      
      </>
    );
 
}
export default DataTable
