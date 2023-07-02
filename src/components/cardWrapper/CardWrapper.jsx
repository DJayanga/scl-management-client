import './CardWrapper.scss';

export const CardWrapper = ({ title, children }) => {
  return (
    <div className="card-wrapper mt-5">
      <div className="card-wrapper-title">{title}</div>
      <div className="child-data">{children}</div>
    </div>
  );
};
