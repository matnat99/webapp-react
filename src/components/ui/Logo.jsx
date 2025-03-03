export default function Logo({ width, rounded }) {
  return (
    <img
      width={width}
      className={`${rounded} shadow-sm shadow-black`}
      src="img/Logo.webp"
      alt="Logo"
    />
  );
}
