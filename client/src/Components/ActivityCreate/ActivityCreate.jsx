import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, postActivities } from "../../Redux/actions";

const ActivityCreate = () => {
  
  const dispatch = useDispatch();
  // const history = useHistory();
  const countries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div>
      <form/>
      </div>
  )
}

export default ActivityCreate