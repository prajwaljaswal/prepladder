import React, { useEffect, useState } from 'react';
import Heading from '../../../common/MasterData/Heading';
import DataTable from '../../../common/Datatable';
import { Row, Col, Alert } from 'react-bootstrap';
import { GET_PROJECT_STATUS, ADD_PROJECT_STATUS, DELETE_PROJECT_STATUS } from '../../../../api/APIEndpoints';
import edit from '../../../../assests/edit.svg';
import deleteIcon from '../../../../assests/deleteNew.svg';
import Pagination from '../../../common/Pagination';
import { sweetAlertComponent } from '../../../../components/common/Alert';

const ProjectStatus = () => {
  const [tableInfo, setTableInfo] = useState([]);
  const [projectStatus, setProjectStatus] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [pageSize, setpageSize] = useState(5);
  const [pageIndex, setpageIndex] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const editTable = (name, id) => {
    setProjectStatus(name);
    setId(id);
    setIsEdit(true);
  };

  const validate = () => {
    let err = false;
    if (projectStatus.length < 1) {
      setError('*Project status is required');
      err = true;
    }
    if (!projectStatus.match('^[a-zA-Z ]*$')) {
      setError('*Only text is allowed');
      err = true;
    }

    return err;
  };

  const addData = async () => {
    if (!validate()) {
      const body = {
        languageId: 1,
        publicKey: 'key@123',
        name: projectStatus,
        userId: 1,
      };
      const bodyEdit = {
        languageId: 1,
        id: id,
        publicKey: 'key@123',
        name: projectStatus,
        userId: 1,
      };
      if (!isEdit) {
        setLoading(true);
        await ADD_PROJECT_STATUS(body)
          .then((res) => {
            setError('');
            sweetAlertComponent('success', 'Project Status Added');
            if (res?.data?.statusCode == 204) {
              sweetAlertComponent('error', 'Project Status already exsist');
            }
          })
          .catch((err) => {
            sweetAlertComponent('error', 'Something went wrong');
          });
        await GET_PROJECT_STATUS(pageIndex, pageSize)
          .then((res) => {
            setTableInfo(res?.data?.data?.results);
            setTotalPage(res?.data?.data?.totalItems);
          })
          .catch((err) => {
            sweetAlertComponent('error', 'Something went wrong');
          });
        setLoading(false);
      } else {
        setLoading(true);
        await ADD_PROJECT_STATUS(bodyEdit)
          .then((res) => {
            setError('');
            sweetAlertComponent('success', 'Project Status updated');
          })
          .catch((err) => {
            sweetAlertComponent('error', 'Something went wrong');
          });
        await GET_PROJECT_STATUS(pageIndex, pageSize)
          .then((res) => {
            setTableInfo(res?.data?.data?.results);
            setTotalPage(res?.data?.data?.totalItems);
            setLoading(false);
          })
          .catch((err) => {
            sweetAlertComponent('error', 'Something went wrong');
          });
      }
      setIsEdit(false);
      setProjectStatus('');
    }
  };
  const [pagination, setPagination] = useState({
    currentPageNum: 1,
    loaded: false,
  });
  const totalPageCount = 100;
  const totalElementCount = 1000;

  const deleteTrigger = async (id) => {
    setLoading(true);
    await DELETE_PROJECT_STATUS(id)
      .then((res) => {
        sweetAlertComponent('success', 'Project Status deleted');
      })
      .catch((err) => {
        sweetAlertComponent('error', 'Something went wrong');
      });
    await GET_PROJECT_STATUS(pageIndex, pageSize)
      .then((res) => {
        setTableInfo(res?.data?.data?.results);
        setTotalPage(res?.data?.data?.totalItems);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'Something went wrong');
      });
    setLoading(false);
  };

  const buildData = () => {
    const tableData = {
      labels: ['Project Status', 'Created By', 'Creation Date', 'Updated By', 'Updation Date', 'Action'],
      results: tableInfo?.map((result, index) => ({
        key: result.id,
        colData: {
          projectName: <span>{result.name}</span>,
          createddBy: <span>{result.createdBy}</span>,
          creationDate: <span>{result.creationDate}</span>,
          updatedBy: <span>{result.updatedBy}</span>,
          updationdate: <span>{result.updatedDate}</span>,
          action: (
            <span>
              <div className="d-flex justify-content-center  gap-2 action">
                <div onClick={() => editTable(result.name, result.id)}>
                  <img src={edit} alt="edit" />
                </div>
                <div onClick={() => deleteTrigger(result.id)}>
                  <img src={deleteIcon} alt="delete icon" />
                </div>
              </div>
            </span>
          ),
        },
      })),
    };
    return tableData;
  };

  const updatePageNum = (pageNum) => {
    if (pageNum > 0) {
      setPagination({
        currentPageNum: pageNum,
        loaded: false,
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    GET_PROJECT_STATUS(pageIndex, pageSize)
      .then((res) => {
        setTableInfo(res?.data?.data?.results);
        setTotalPage(res?.data?.data?.totalItems);
        setLoading(false);
      })
      .catch((err) => {
        if (err) {
          <Alert variant={'danger'}>Somethig went wrong</Alert>;
        }
      });
  }, [pageIndex]);

  const cancel = () => {
    setProjectStatus('');
    setError('');
    setIsEdit(false);
  };

  useEffect(() => {
    setTotalPage(totalPage);
    console.log(totalPage);
  }, [totalPage]);

  return (
    <div className="container">
      <Heading
        title={'Project Status'}
        addTitle={'Add Project Status'}
        name={'Project Status'}
        inputValue={projectStatus}
        setInputValue={setProjectStatus}
        submit={addData}
        error={error}
        cancel={cancel}
        edit={isEdit}
      />
      <Row className="mt-4">
        <Col>
          <div style={{ marginLeft: '.72rem', marginRight: '.72rem' }}>
            <DataTable
              tableData={buildData()}
              updatePageNum={updatePageNum}
              totalPageCount={totalPageCount}
              totalElementCount={totalElementCount}
              currentPageNum={pagination.currentPageNum}
              loading={loading}
            />
          </div>
          <div>
            {totalPage > 0 && pageSize > 0 ? (
              <Pagination totalItems={totalPage} itemsPerPage={pageSize} setpageIndex={setpageIndex} />
            ) : (
              ''
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectStatus;
