interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  center = true,
  className = "",
}: Props) {
  return (
    <div
      className={`mb-6 sm:mb-8 md:mb-10 ${center ? "text-center" : ""} ${className}`}
    >
      {label && (
        <span className="theme-badge inline-flex mb-2 sm:mb-3 text-xs">{label}</span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold theme-text mb-2 sm:mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="theme-text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
