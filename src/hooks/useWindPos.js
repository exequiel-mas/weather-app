import React from "react";

function useWindPos(windValue) {
  const [windDirection, setWindDirection] = React.useState("");
  const number = Number(windValue);
  const angleRotation = windValue - 45 + "deg";

  React.useEffect(() => {
    switch (true) {
      case number < 23 || number >= 337:
        setWindDirection("WE");
        break;
      case number >= 23 && number < 68:
        setWindDirection("WNE");
        break;
      case number >= 68 && number < 113:
        setWindDirection("WN");
        break;
      case number >= 113 && number < 158:
        setWindDirection("WNW");
        break;
      case number >= 158 && number < 203:
        setWindDirection("WW");
        break;
      case number >= 203 && number < 248:
        setWindDirection("WSW");
        break;
      case number >= 248 && number < 293:
        setWindDirection("WS");
        break;
      case number >= 293 && number < 337:
        setWindDirection("WSE");
        break;
      default:
        setWindDirection("Unknown");
        break;
    }
  }, [number, windValue]);

  return { windDirection, angleRotation };
}

export default useWindPos;
