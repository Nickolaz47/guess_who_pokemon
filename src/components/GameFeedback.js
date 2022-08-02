// Hooks
import { useContext, useEffect, useState } from "react";
// Contexts
import { FeaturesContext } from "../context/FeaturesContext";

const GameFeedback = () => {
  const [rightFeatures, setRightFeatures] = useState([]);
  const [wrongFeatures, setWrongFeatures] = useState([]);
  const { features } = useContext(FeaturesContext);

  useEffect(() => {
    const filteredRightFeatures = features.filter(
      (feature) => feature.type === "right"
    );
    const filteredWrongFeatures = features.filter(
      (feature) => feature.type === "wrong"
    );
    setRightFeatures(
      filteredRightFeatures.map((rightFeature) => rightFeature.name)
    );
    setWrongFeatures(
      filteredWrongFeatures.map((wrongFeature) => wrongFeature.name)
    );
  }, [features]);

  return (
    <div className="col-md-4 text-center">
      <span>Right features</span>
      <div
        className="p-2 mb-2 bg-success text-white rounded"
        style={{ opacity: 0.6 }}
      >
        {rightFeatures.join(", ")}
      </div>
      <span>Wrong features</span>
      <div
        className="p-2 mb-2 bg-danger text-white rounded"
        style={{ opacity: 0.6 }}
      >
        {wrongFeatures.join(", ")}
      </div>
    </div>
  );
};

export default GameFeedback;
