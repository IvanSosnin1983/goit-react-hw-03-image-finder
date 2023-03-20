import { RotatingLines } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        height="80"
        width="80"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="2"
        visible={true}
      />
    </div>
  );
};
export default Loader;
