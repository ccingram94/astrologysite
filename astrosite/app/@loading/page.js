export default function Loading() {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-base-100 bg-opacity-50 z-[9999]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  