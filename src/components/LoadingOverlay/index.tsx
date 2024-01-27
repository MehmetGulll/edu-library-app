const LoadingOverlay = () => {
  return (
    <>
      <div className="w-full h-full  animate-pulse bg-gray-100/50 rounded-lg"></div>
      <div className="absolute top-[calc(50%-40px)] left-[calc(50%-40px)] border-gray-300 h-20 w-20 brightness-100 animate-spin rounded-full border-8 border-t-persian_pink" />
    </>
  )
}

export default LoadingOverlay
