import { useRef, useState } from "react";

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  created_date,
  onRemove,
  onEdit,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const localContentInput = useRef();

  const removeBtn = () => {
    console.log("remove id:" + id);
    if (window.confirm(`${id}번째 일기를 정말 삭제 하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const [localContent, setLocalContent] = useState(content);

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      setIsEdit(false);
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info" key={id}>
        <span>
          작성자: {author} | 감정점수: {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <textarea
            ref={localContentInput}
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
          />
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정취소</button>
          <button onClick={handleEdit}>수정완료</button>
        </>
      ) : (
        <>
          <button onClick={toggleIsEdit}>수정</button>
          <button onClick={removeBtn}>삭제</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
