import { studentSelectAll } from "@/app/api/student";
export default async ({ setS_code }) => {
  const List = await studentSelectAll();
  const viewList = List.map((item) => {
    return (
      <li key={item.s_code} onClick={() => setS_code(item.s_code)}>
        <span>{item.s_code}</span>
        <span>{item.s_name}</span>
      </li>
    );
  });
  return <ul>{viewList}</ul>;
};
