import { useEffect, useState } from "react";
import { useSearchUsersQuery } from "../store/gitHub/github.api";
import { useDebounce } from "../hooks/debounce";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const debaunced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debaunced, {
    skip: debaunced.length < 3,
  });

  useEffect(() => {
    console.log(debaunced);
  }, [debaunced]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong</p>
      )}
      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2 "
          placeholder="search for github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolut top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          ipsam, quasi laboriosam commodi perspiciatis nobis fugiat quod
          sapiente nemo aliquid ut facilis delectus nisi molestias libero, a
          veniam, iste rem?
        </div>
      </div>
    </div>
  );
}
