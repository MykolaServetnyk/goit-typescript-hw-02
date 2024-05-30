import css from "./LoadMoreBtn.module.css";
import { MdOutlineCloudDownload } from "react-icons/md";

type Props = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={onClick} type="button">
        <MdOutlineCloudDownload size="20" />
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;