import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "../Activity/Activity";
import NavBar from "../Nav_bar/NavBar";
import style from './Activities.module.css'
import { getActivities } from "../../Redux/actions/index";

const Activities = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  // console.log(activities, "soy act de selector");

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div> 
      <NavBar />
      <h2>Activities</h2>

      <div className={style.container}>
        {activities?.map((act) => {
          console.log(activities, "soy el de act");
          console.log(act.id);
          return (
            <div key={act.id} className={style.containerActivities}>
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
