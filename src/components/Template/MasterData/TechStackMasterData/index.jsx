import React, { useEffect, useState } from 'react';
import TechStackHeader from '../../../common/MasterData/TechStackHeader';
import DataTable from '../../../common/Datatable';
import { Row, Col, Alert } from 'react-bootstrap';
import {
  GET_TECH_STACK,
  ADD_TECH_STACK,
  DELETE_TECH_STACK,
  GET_TECH_DEPARTMENT,
  GET_TECH_STACK_BY_ID,
} from '../../../../api/APIEndpoints';
import edit from '../../../../assests/edit.svg';
import deleteIcon from '../../../../assests/deleteNew.svg';
import Pagination from '../../../common/Pagination';

import { sweetAlertComponent } from '../../../../components/common/Alert';

const TechStackMasterData = () => {
  const [tableInfo, setTableInfo] = useState([]);
  const [projectStatus, setProjectStatus] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [pageSize, setpageSize] = useState(2);
  const [pageIndex, setpageIndex] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [selectedValue, setSelectedValue] = useState(null);
  const [optionToShow, setOptionToShow] = useState(null);
  const [option, setOption] = useState([]);

  const editTable = async (id) => {
    setIsEdit(true);
    setLoading(true);
    await GET_TECH_STACK_BY_ID(id).then((res) => {
      setProjectStatus(res?.data?.data?.name);
      setOptionToShow(res?.data?.data?.departmentId);
      setLoading(false);
    });
  };

  useEffect(() => {
    GET_TECH_DEPARTMENT()
      .then((res) => {
        setOption(res?.data?.data);
        setSelectedValue(res?.data?.data[0].id);
      })
      .catch((err) => {
        sweetAlertComponent('error', 'Something went wrong');
      });
  }, []);

  const validate = () => {
    let err = false;
    if (projectStatus.length < 1) {
      setError('*Tech Stack is required');
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
        departmentId: Number(selectedValue),
        userId: 1,
      };
      const bodyEdit = {
        languageId: 1,
        id: id,
        publicKey: 'key@123',
        name: projectStatus,
        departmentId: Number(selectedValue),
        userId: 1,
      };
      if (!isEdit) {
        setLoading(true);
        await ADD_TECH_STACK(body)
          .then((res) => {
            setError('');
            sweetAlertComponent('success', 'Tech stack added');
            if (res?.data?.statusCode == 204) {
              sweetAlertComponent('error', 'Tech Department already exsist');
            }
          })
          .catch((err) => {
            sweetAlertComponent('error', 'Something went wrong');
          });
        await GET_TECH_STACK(pageIndex, pageSize)
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
        await ADD_TECH_STACK(bodyEdit)
          .then((res) => {
            setError('');
            sweetAlertComponent('success', 'Tech stack updated');
          })
          .catch((err) => {
            sweetAlertComponent('error', 'Something went wrong');
          });
        await GET_TECH_STACK(pageIndex, pageSize)
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
    await DELETE_TECH_STACK(id)
      .then((res) => {
        sweetAlertComponent('success', 'Tech stack deleted');
      })
      .catch((err) => {
        sweetAlertComponent('error', 'Something went wrong');
      });
    await GET_TECH_STACK(pageIndex, pageSize)
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
      labels: ['Tech Department', 'Tech Stack', 'Created By', 'Creation Date', 'Updated By', 'Updation Date', 'Action'],
      results: tableInfo?.map((result, index) => ({
        key: result.id,
        colData: {
          techDepartment: <span>{result.departName}</span>,
          techStack: <span>{result.stackName}</span>,
          createdBy: <span>{result.createdBy}</span>,
          creationDate: <span>{result.creationDate}</span>,
          updatedBy: <span>{result.updatedBy}</span>,
          updationdate: <span>{result.updatedDate}</span>,
          action: (
            <span>
              <div className="d-flex justify-content-center  gap-2">
                <div
                  onClick={() => {
                    editTable(result?.stackId);
                    setId(result?.stackId);
                  }}
                >
                  <img src={edit} alt="edit" />
                </div>
                <div onClick={() => deleteTrigger(result.stackId)}>
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
    GET_TECH_STACK(pageIndex, pageSize)
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
      <TechStackHeader
        title={'Tech Department'}
        addTitle={'Add New Tech Deaprtment'}
        name={'Tech Stack'}
        inputValue={projectStatus}
        setInputValue={setProjectStatus}
        submit={addData}
        error={error}
        cancel={cancel}
        setSelectedValue={setSelectedValue}
        option={option}
        optionToShow={optionToShow}
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

export default TechStackMasterData;
