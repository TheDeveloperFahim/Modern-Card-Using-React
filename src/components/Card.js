import Image from "./Image";
import Info from "./Info";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="card-info">
            <Info />
          </div>
          <div className="card-image">
            <Image />
          </div>
        </div>
      </div>
    </>
  );
}
