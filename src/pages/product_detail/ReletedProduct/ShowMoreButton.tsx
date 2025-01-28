
const ShowMoreButton = ({
  onClick,
  isVisible,
}: {
  onClick: () => void;
  isVisible: boolean;
}) => {
  if (!isVisible) return null;

  return (
    <div className="text-center mt-6">
      <button
        onClick={onClick}
        className="px-14 py-2 border border-bg-primary text-bg-primary text-lg hover:bg-bg-primary hover:text-white transition duration-300"
      >
        Show More
      </button>
    </div>
  );
};

export default ShowMoreButton;
