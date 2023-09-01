import {
  GuestbookEntries,
  GuestbookSkeleton,
} from "@/components/GuestbookEntries";
import { GuestbookForm } from "@/components/GuestbookForm";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<GuestbookSkeleton />}>
        <GuestbookEntries />
      </Suspense>

      <div className="flex mt-10 justify-center">
        <div className="w-full">
          <GuestbookForm />
        </div>
      </div>
    </>
  );
}
