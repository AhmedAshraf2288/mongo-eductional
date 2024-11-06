import "./Loading.css";

export default function Loading({ className, widthFit, small }) {
  return (
    <div className={`d-flex justify-content-center ${widthFit ? 'w-auto' : 'w-100'}`}>
      <div className={`lds-ring ${className || ""} ${small ? 'loading--small' : ''}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
