import React from "react";
import Activity from "../Activity/Activity";
import { useSelector } from "react-redux";

const Activities = (props) => {
  const activities = useSelector((state) => state.activities);

  return (
    <div>
      <h2>Activitys</h2>
      
      <div>
        {activities.map((act) => {
          return (
            <div>
              <Activity
                name={act.name}
                duration={act.duration}
                season={act.season}
                difficulty={act.difficulty}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
