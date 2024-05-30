import css from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';

type Props = {
  onSubmit: (data: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const onSubmitBar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = form.elements.namedItem("topic") as HTMLInputElement;
    if (data.value.trim() === "") {
      toast.error("Please, enter your request!");
      return;
    }
    onSubmit(data.value);
    form.reset();
  };

  return (
    <div>
      <div><Toaster /></div>
      <header className={css.header}>
        <form className={css.form} onSubmit={onSubmitBar}>
          <input
            className={css.input}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <AiOutlineSearch size="18" /> Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
