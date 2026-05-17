interface Props {
  size?: number;
}

const SearchIcon = ({ size = 52 }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M21 21L15.8 15.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
};

export default SearchIcon;
