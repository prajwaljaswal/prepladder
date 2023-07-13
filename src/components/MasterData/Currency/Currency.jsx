import React, { useEffect, useState } from "react";
import CurrencyHeader from "../../common/MasterData/CurrencyHeader/CurrencyHeader";
import DataTable from "../../common/Datatable";
import { Row, Col, Alert } from "react-bootstrap";
import {
  GET_CURRENCY,
  ADD_CURRENCY,
  DELETE_CURRENCY,
} from "../../../api/APIEndpoints";
import edit from "../../../assests/edit.svg";
import deleteIcon from "../../../assests/deleteNew.svg";
import Pagination from "../../../components/common/Pagination/index";

const Currency = () => {
  const [tableInfo, setTableInfo] = useState([]);
  const [projectStatus, setProjectStatus] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageSize, setpageSize] = useState(2);
  const [pageIndex, setpageIndex] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [image, setImage] = useState("");
  const [imageError,setImageError]  = useState("");
  const [fileToShowCurrency, setFileToShowCurrency] = useState("");



  const editTable = (name, id, imageUrl) => {
    setProjectStatus(name);
    setId(id);
    setImage(imageUrl);
    setFileToShowCurrency(`${process.env.REACT_APP_BASE_URL}/${imageUrl}`);
    setIsEdit(true);
  };

  const validate = () => {
    let err = false;
    if (projectStatus.length < 1) {
      setError("*Currency is required");
      err = true;
    }

    if(image.length<1){
      setImageError("*Image is required");
      err = true;
    }
    if (!projectStatus.match("^[a-zA-Z ]*$")) {
      setError("*Only text is allowed");
      err = true;
    }

    return err;
  };

  const addData = async () => {
    if (!validate()) {
      const formData = new FormData();
      formData.append("languageId", 1);
      formData.append("Name", projectStatus);
      formData.append("CurrencyIcon", "image");
      if (typeof image !== "string") {
        formData.append("AttachFiles", image);
      }

      formData.append("publicKey", "key@123");
      formData.append("userId", 1);
      if (isEdit) {
        formData.append("id", id);
      }

      if (!isEdit) {
        setLoading(true);
        await ADD_CURRENCY(formData).then((res) => {
          setError("");
          setImageError("");
        });
        await GET_CURRENCY(pageIndex, pageSize).then((res) => {
          setTableInfo(res?.data?.data?.results);
          setTotalPage(res?.data?.data?.totalItems);
        });
        setLoading(false);
      } else {
        setLoading(true);
        await ADD_CURRENCY(formData).then((res) => {
          setError("");
          setImage("");
          setImageError("");
        });
        await GET_CURRENCY(pageIndex, pageSize).then((res) => {
          setTableInfo(res?.data?.data?.results);
          setTotalPage(res?.data?.data?.totalItems);
          setLoading(false);
        });
      }
      setIsEdit(false);
      setProjectStatus("");
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
    await DELETE_CURRENCY(id).then((res) => {});
    await GET_CURRENCY(pageIndex, pageSize).then((res) => {
      setTableInfo(res?.data?.data?.results);
      setTotalPage(res?.data?.data?.totalItems);
    });
    setLoading(false);
  };

  const buildData = () => {
    const tableData = {
      labels: [
        "Currency",
        "Currency Icon",
        "Created By",
        "Creation Date",
        "Updated By",
        "Updation Date",
        "Action",
      ],
      results: tableInfo?.map((result, index) => ({
        key: result.id,
        colData: {
          projectName: <span>{result.name}</span>,
          currencyIcon: (
            <span>
              <img
                src={`${process.env.REACT_APP_BASE_URL}/${result.imageUrl}`}
                height={30}
                width={30}
                alt="currenct icon"
              />
            </span>
          ),
          createddBy: <span>{result.createdBy}</span>,
          creationDate: <span>{result.creationDate}</span>,
          updatedBy: <span>{result.updatedBy}</span>,
          updationdate: <span>{result.updatedDate}</span>,
          action: (
            <span>
              <div className="d-flex justify-content-center  gap-2">
                <div
                  onClick={() => {
                    editTable(result.name, result.id, result.imageUrl);
                  }}
                >
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
    GET_CURRENCY(pageIndex, pageSize)
      .then((res) => {
        setTableInfo(res?.data?.data?.results);
        setTotalPage(res?.data?.data?.totalItems);
        setLoading(false);
      })
      .catch((err) => {
        if (err) {
          <Alert variant={"danger"}>Somethig went wrong</Alert>;
        }
      });
  }, [pageIndex]);

  const cancel = () => {
    setProjectStatus("");
    setError("");
    setIsEdit(false);
    setFileToShowCurrency("");
    setImageError("");
  };

  useEffect(()=>{
    setTotalPage(totalPage)
 console.log(totalPage)
  },[totalPage])

  return (
    <div className="container">
      <CurrencyHeader
        title={"Currency"}
        addTitle={"Add Currency"}
        name={"Currency"}
        inputValue={projectStatus}
        setInputValue={setProjectStatus}
        submit={addData}
        error={error}
        cancel={cancel}
        setImage={setImage}
        image={image}
        edit={isEdit}
        imageError={imageError}
        fileToShowCurrency={fileToShowCurrency}
        setFileToShowCurrency={setFileToShowCurrency}
      />
      <Row className="mt-4">
        <Col>
          <div style={{ marginLeft: ".72rem", marginRight: ".72rem" }}>
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
              <Pagination
                totalItems={totalPage}
                itemsPerPage={pageSize}
                setpageIndex={setpageIndex}
              />
            ) : (
              ""
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Currency;
