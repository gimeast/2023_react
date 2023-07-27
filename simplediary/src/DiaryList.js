import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";
import { useContext } from "react";

const DiaryList = ({ onEdit, onRemove }) => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className="DiaryList">
      <h2>일기리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>

      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} onEdit={onEdit} onRemove={onRemove} {...it} />
        ))}
      </div>
    </div>
  );
};
DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
