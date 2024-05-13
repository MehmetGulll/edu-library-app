interface LoadingOverlayProps {
  size?: number;
}

const LoadingOverlay = ({ size = 80 }: LoadingOverlayProps) => {
  const border = size / 10;

  return (
    <>
      <div className='h-full w-full  animate-pulse rounded-lg bg-gray-100/50'></div>
      <div
        className='absolute animate-spin rounded-full brightness-100'
        style={{
          border: `${border}px solid #f3f3f3`,
          borderTop: `${border}px solid #0095FF`,
          width: `${size}px`,
          height: `${size}px`,
          top: `calc(50% - ${size / 2}px)`,
          left: `calc(50% - ${size / 2}px)`,
        }}
      />
    </>
  );
};

export default LoadingOverlay;
