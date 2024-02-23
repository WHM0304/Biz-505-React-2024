import "../css/MemoList.css";
import logo from "../logo.svg";
const MemoList = ({ children }) => {
  return (
    <ul>
      <li>
        <>
          <img src={logo} alt="" width={"20px"} />
        </>
        {children}
      </li>
    </ul>
  );
};

export default MemoList;
