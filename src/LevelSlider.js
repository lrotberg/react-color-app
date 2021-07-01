import Slider from "rc-slider";

const LevelSlider = ({ level, changeLevel, className }) => {
  return (
    <div>
      <span>Level: {level}</span>
      <div className={className}>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
          trackStyle={[{ backgroundColor: "transparent" }]}
          dotStyle={{
            backgroundColor: "transparent",
            borderColor: "transparent"
          }}
          handleStyle={[
            {
              backgroundColor: "green",
              outline: "none",
              border: "2px solid green",
              boxShadow: "none",
              width: "13px",
              height: "13px",
              marginLeft: "-7px",
              marginTop: "-3px"
            }
          ]}
          railStyle={{
            height: "8px"
          }}
        />
      </div>
    </div>
  );
};

export default LevelSlider;
