import React from "react";
import MyInput from "./ui/input/MyInput";
import MySelect from "./ui/select/MySelect";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholder={"Search"}
        value={filter.setSearchQuery}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />

      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue={"order by"}
        options={[
          { value: "title", name: "order by title" },
          { value: "body", name: "order by description" },
        ]}
      />
    </div>
  );
}
