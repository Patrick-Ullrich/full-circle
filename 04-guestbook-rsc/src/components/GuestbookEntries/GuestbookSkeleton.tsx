export const GuestbookSkeleton = () => {
  return (
    <div className="divide-y-2">
      {[1, 2, 3, 4, 5].map((idx) => (
        <div className="py-6" key={idx}>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4"></div>
        </div>
      ))}
    </div>
  );
};
