import ReactCurvedText from "react-curved-text";
const Mycomponent = () => {
  return (
    <h4 className="heloocurve container-fluid title-wraper">
      <ReactCurvedText
        width={1000}
        height={150}
        cx={210}
        cy={200}
        rx={100}
        ry={170}
        startOffset={100}
        text="LEMLEM SCHOOL"
        reversed={true}
      />
    </h4>
  );
};

export default Mycomponent;
