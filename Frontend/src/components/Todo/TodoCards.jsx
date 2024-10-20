import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";
const TodoCards = ({
  title,
  description,
  id,
  delid,
  display,
  updateId,
  toBeUpdate,
}) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h1>{title}</h1>
        <p className="todo-card-para">{description}...</p>
      </div>
      <div className="d-flex justify-content-around ">
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1"
          onClick={() => {
            display("block");
            toBeUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="card-icons col-icon-del" /> Update
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger"
          onClick={() => {
            delid(id);
          }}
        >
          <RiDeleteBin6Fill className="card-icons col-icon-del" /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
