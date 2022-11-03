import React from "react";
import Activity from "../Activity/Activity";
import { useSelector } from "react-redux";
import NavBar from "../Nav_bar/NavBar";

const Activities = () => {
  const activities = useSelector((state) => state.activities);

  return (
    <div>
      <NavBar/>
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
