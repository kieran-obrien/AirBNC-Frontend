export default function PropertyCardSkeletons() {
  return (
    <div className="grid grid-cols-2 gap-4 p-3 pb-20">
      {Array(12)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="flex w-48 flex-col gap-2">
            <div className="skeleton h-40 w-40 mask mask-squircle"></div>
            <div className="skeleton h-4 w-36"></div>
            <div className="skeleton h-4 w-16"></div>
          </div>
        ))}
    </div>
  );
}
