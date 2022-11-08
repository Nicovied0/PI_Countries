import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "../Activity/Activity";
import NavBar from "../Nav_bar/NavBar";
import { getActivities } from "../../Redux/actions/index";

const Activities = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  console.log(activities, "soy act de selector");

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <h2>Activitys</h2>

      <div>
        {activities?.map((act) => {
          console.log(activities, "soy el de act");
          console.log(act.id);
          return (
            <div key={act.id}>
              <Activity
                key={act.id}
                name={act.name}
                duration={act.duration}
                season={act.season}
                difficulty={act.difficulty}
                countryId={act.countryId}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
