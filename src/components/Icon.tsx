type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className = "" }: IconProps) {
  if (name === "leaf") {
    return (
      <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.4 27.5C9.9 24.6 5.8 19.8 5.8 14.4c0-3.9 2.7-6.7 6.4-6.7 2.6 0 4.7 1.2 6 3.3 1.6-3.1 5.1-5.1 9.9-4.8.1 8.9-3.7 16.6-11.7 21.3Z" />
        <path d="M16.8 24.3c.5-6 3.1-10.4 8-14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M7 25h18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M9 22V12M16 22V7M23 22v-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "link") {
    return (
      <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M13.6 18.4a5.2 5.2 0 0 1 0-7.4l2.1-2.1a5.2 5.2 0 0 1 7.4 7.4l-1.4 1.4" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M18.4 13.6a5.2 5.2 0 0 1 0 7.4l-2.1 2.1a5.2 5.2 0 0 1-7.4-7.4l1.4-1.4" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "stack") {
    return (
      <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
        <path d="m16 5 10 5.6-10 5.6L6 10.6 16 5Z" />
        <path d="m8 15.5 8 4.5 8-4.5M8 20.2l8 4.5 8-4.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 27c6.1 0 11-4.9 11-11S22.1 5 16 5 5 9.9 5 16s4.9 11 11 11Z" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <path d="M10.5 17.2h4.3l1.8-5.4 2.2 8.4 1.7-3h3" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
