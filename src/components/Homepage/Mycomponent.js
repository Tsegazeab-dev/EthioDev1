import ReactCurvedText from "react-curved-text";
const Mycomponent = () => {
  return (
    <h4 className="heloocurve">
      <ReactCurvedText
        width={1000}
        height={150}
        cx={430}
        cy={190}
        rx={105}
        ry={170}
        startOffset={100}
        text="LEMLEM SCHOOL"
        reversed={true}
      />
    </h4>
  );
};

export default Mycomponent;
