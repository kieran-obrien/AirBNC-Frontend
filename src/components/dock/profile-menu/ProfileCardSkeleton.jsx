import Line from "../../Line";

export default function ProfileCardSkeleton() {
  return (
    <section className="card-body flex flex-col relative gap-3 justify-center items-center">
      <div className="skeleton w-8 h-8 rounded-full absolute top-2 right-2 z-10"></div>
      <div className="w-32">
        <div className="skeleton w-32 h-32 mask mask-squircle"></div>
        <Line />
      </div>
      <div className="flex flex-col items-center gap-1 -mt-5">
        <div className="skeleton h-4 w-12"></div>
        <div className="skeleton h-4 w-8 mb-2"></div>
        <div className="skeleton h-4 w-48"></div>
        <div className="skeleton h-4 w-48"></div>
      </div>
    </section>
  );
}
