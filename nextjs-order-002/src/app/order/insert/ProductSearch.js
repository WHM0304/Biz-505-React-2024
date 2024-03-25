import css from "@/css/order.insert.module.css";
export default ({ productList, setProductList, setProduct }) => {
  const onClickHandler = (product) => {
    setProduct({ ...product });
    console.log(product);
    setProductList([]);
  };
  const viewList = productList.map((item) => {
    return (
      <li
        key={item.p_code}
        p_code={item.p_code}
        onClick={() => onClickHandler(item)}
      >
        {item.p_code} , {item.p_name}
      </li>
    );
  });
  return (
    <>
      <ul className={css.pro_list}>{viewList}</ul>
    </>
  );
};
