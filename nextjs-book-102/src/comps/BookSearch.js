// BookSearch 컴포넌트를 CSR 의 client Component로 사용하겠다.
"use client";
const BookSearch = ({ search, setSearch }) => {
  // delay 매개변수가 없으면 delay = 200 으로 해라
  const debounce = (callback, delay = 200) => {
    let debounceTimer;
    // args = 배열이 되는 요소들
    return (...args) => {
      // debounce 함수가 호출되면 무조건 Timer 를 reset 하라
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(
        () => callback.apply(this, args),
        delay
      );
    };
  };
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  // debounce 객체를 사용하여 onChangeHandler 제어 하기
  // 키보드에서 문자를 입력한 후 100 ms 동안 기다리면
  // 그때 onChangeHandler 를 실행하라
  // debounce 객체의 callback 이 onChangeHandler 가 된다.
  const OndebounceHandler = debounce(onChangeHandler, 1000);

  return (
    <div className="book search">
      <input
        placeholder="검색어"
        defaultValue={search}
        onChange={OndebounceHandler}
        // onChange={(e)=>OndebounceHandler(e)}
      />
    </div>
  );
};
export default BookSearch;
