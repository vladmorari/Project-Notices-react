import React, { useEffect } from "react";
import * as c from "../../components";
import * as s from "./style";

import { actionGetLocation } from "../../actions/locationActions";
import { useDispatch, useSelector } from "react-redux";
const Profile: React.FC = () => {
  const [userName, setUserName] = React.useState("");
  const dispatch = useDispatch();
  const location = useSelector((state: any) => state.location.location.data);
  useEffect(() => {
    setUserName(localStorage.getItem("userName") || "");
    dispatch(actionGetLocation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <c.Header />
      <s.Profile>
        <s.Image src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" />
        <s.Wellcome>{`Hello ${userName}`}</s.Wellcome>
        {location === undefined ? null : (
          <>
            <s.Info>
              {`At the moment you are in 
             ${location.city}  ${location.country_name}`}
            </s.Info>
            <s.Flag src={location.country_flag} />
            <s.Info>
              To create or check your NOTES list, please access 'My Notices'
              link
            </s.Info>
          </>
        )}
      </s.Profile>
    </>
  );
};

export default Profile;
