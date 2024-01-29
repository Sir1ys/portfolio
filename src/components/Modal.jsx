export default function Modal({ active, setActive, children, styles }) {
  return (
    <div
      className={`h-screen w-screen bg-gray-600 fixed top-0 left-0 flex items-center justify-center opacity-0 pointer-events-none duration-200 ${
        !active ? "scale-0" : "scale-100 opacity-95 pointer-events-auto"
      }`}
      onClick={() => {
        setActive(false);
      }}
    >
      <div
        className={`p-6 rounded-2xl bg-gray-50 transition-all delay-200 h-77 w-10/12 md:w-96 flex justify-center items-center${
          !active ? "scale-50" : "scale-100"
        } ${styles}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
