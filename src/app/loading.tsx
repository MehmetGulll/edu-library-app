import LoadingOverlay from "@/components/LoadingOverlay";

export default function Loading() {
  return (
    <div className='absolute left-0 top-0 h-screen w-screen bg-[#f5f6fa] '>
      <LoadingOverlay />
    </div>
  );
}
