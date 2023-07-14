import React, { useEffect, useState } from 'react';
import Heading from '../../common/MasterData/Heading/Heading';
import DataTable from '../../common/Datatable';
import { Row, Col, Alert } from 'react-bootstrap';
import { GET_TECH_DEPARTMENT, ADD_TECH_DEPARTMENT, DELETE_TECH_DEPARTMENT } from '../../../api/APIEndpoints';
import edit from '../../../assests/edit.svg';
import deleteIcon from '../../../assests/deleteNew.svg';
import Pagination from '../../../components/common/Pagination/index';

const TechDepartment = () => {
  const [tableInfo, setTableInfo] = useState([]);
  const [projectStatus, setProjectStatus] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [pageSize, setpageSize] = useState(2);
  const [pageIndex, setpageIndex] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [itemsPerPage, setItemPerPage] = useState(2);

  const editTable = (name, id) => {
    setProjectStatus(name);
    setId(id);
    setIsEdit(true);
  };

  const validate = () => {
    let err = false;
    if (projectStatus.length < 1) {
      setError('*Tech Department is required');
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
        await ADD_TECH_DEPARTMENT(body).then((res) => {
          setError('');
        });
        await GET_TECH_DEPARTMENT(pageIndex, pageSize).then((res) => {
          setTableInfo(res?.data?.data?.results);
          setTotalPage(res?.data?.data?.totalItems);
        });
        setLoading(false);
      } else {
        setLoading(true);
        await ADD_TECH_DEPARTMENT(bodyEdit).then((res) => {
          setError('');
        });
        await GET_TECH_DEPARTMENT(pageIndex, pageSize).then((res) => {
          setTableInfo(res?.data?.data?.results);
          setTotalPage(res?.data?.data?.totalItems);
          setLoading(false);
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
    await DELETE_TECH_DEPARTMENT(id).then((res) => {});
    await GET_TECH_DEPARTMENT(pageIndex, pageSize).then((res) => {
      setTableInfo(res?.data?.data?.results);
      setTotalPage(res?.data?.data?.totalItems);
    });
    setLoading(false);
  };

  const buildData = () => {
    const tableData = {
      labels: ['Department Name', 'Created By', 'Creation Date', 'Updated By', 'Updation Date', 'Action'],
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
              <div className="d-flex justify-content-center  gap-2">
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
    GET_TECH_DEPARTMENT(pageIndex, pageSize)
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
        title={'Tech Department'}
        addTitle={'Add New Tech Deaprtment'}
        name={'Tech Department'}
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

export default TechDepartment;
