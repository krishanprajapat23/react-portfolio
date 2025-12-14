interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
     <div
      className={`relative overflow-hidden rounded bg-gray-700/40 ${className ?? ""}`}
    >
      <div
        className="animate-shimmer absolute inset-0 bg-linear-to-r from-transparent via-gray-500/30 to-transparent"
      />
    </div>
  )
}

export default Skeleton
