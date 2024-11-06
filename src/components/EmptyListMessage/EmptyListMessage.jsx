export default function EmptyListMessage({ children, className }) {
  return (
    <h3 className={`fw-bold text-center my-3 ${className || ""} capitalize`}>{children}</h3>
  );
}
