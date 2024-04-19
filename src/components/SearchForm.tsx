"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchForm() {
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    router.push(`events/${searchText}`);
  };

  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        onChange={handleChangeSearchText}
        className="w-full h-16 rounded-lg bg-white/[7%] outline-none px-6 ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        type="text"
        value={searchText}
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
}

export default SearchForm;
