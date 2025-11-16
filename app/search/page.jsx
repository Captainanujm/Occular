import { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0b1720] text-white p-10 pt-28 flex justify-center">
          <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <SearchClient />
    </Suspense>
  );
}
