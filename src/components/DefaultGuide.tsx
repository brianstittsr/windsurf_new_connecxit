interface DefaultGuideProps {
  title: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function DefaultGuide({
  title,
  className = "",
  width = 400,
  height = 300,
}: DefaultGuideProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-[#ff5722] to-[#f4511e] text-white ${className}`}
      style={{ width, height }}
    >
      <div className="text-center p-4">
        <div className="text-lg font-medium">{title}</div>
        <div className="text-sm mt-2">Guide</div>
      </div>
    </div>
  );
}
