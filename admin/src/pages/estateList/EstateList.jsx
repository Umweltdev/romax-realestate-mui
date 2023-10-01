import "./estatelist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEstate, getEstates } from "../../redux/apiCalls";

export default function EstateList() {
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.estate.estates);

  useEffect(() => {
    getEstates(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteEstate(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "estate",
      headerName: "Estate",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "categories",
      headerName: "Categories",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.categories}
          </div>
        );
      },
    },
    {
      field: "location",
      headerName: "Location",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.location}
          </div>
        );
      },
    },
    {
      field: "house",
      headerName: "House",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.house}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/estate/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={timelines}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}