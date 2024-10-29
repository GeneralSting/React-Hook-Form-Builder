import { FC } from "react";
import TreeStage1Svg from "./TreeStage1Svg";
import TreeStage2Svg from "./TreeStage2Svg";
import TreeStage3Svg from "./TreeStage3Svg";
import TreeStage4Svg from "./TreeStage4Svg";
import TreeStage5Svg from "./TreeStage5Svg";
import TreeStage7Svg from "./TreeStage7Svg";
import { GrowingTreeStages } from "../../types/growingTreeStages";
import TreeStage6MotionSvg from "./TreeStage6Svg";

const GrowingTreeSvg: FC<GrowingTreeStages> = ({ stage }) => {
  switch (stage) {
    case 1:
      return <TreeStage1Svg />;
    case 2:
      return <TreeStage2Svg />;
    case 3:
      return <TreeStage3Svg />;
    case 4:
      return <TreeStage4Svg />;
    case 5:
      return <TreeStage5Svg />;
    case 6:
      return <TreeStage6MotionSvg />;
    case 7:
      return <TreeStage7Svg />;
  }
};

export default GrowingTreeSvg;
