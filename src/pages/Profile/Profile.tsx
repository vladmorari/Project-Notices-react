import React, { useEffect } from "react";
import * as c from "../../components";
import * as s from "./style";
import { connect } from "react-redux";
import { actionGetLocation } from "../../actions/locationActions";

const Profile: React.FC = (props: any) => {
  const userName: string = localStorage.getItem("userName") || "";
  const { actionGetLocation } = props;
  useEffect(() => {
   // actionGetLocation();
  }, [actionGetLocation]);

  return (
    <>
      {console.log("notes---", props.location.data)}
      <c.Header />
      <s.Profile>
        <s.Image src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" />
        <s.Wellcome>{`Hello ${userName}`}</s.Wellcome>
        {props.location.data === undefined ? null : (
          <>
            <s.Info>
              {`At the moment you are in 
             ${props.location.data.city}  ${props.location.data.country_name}`}
            </s.Info>
            <s.Flag src={props.location.data.country_flag} />
            <s.Info>To create or check your NOTES list, please access 'My Notices' link </s.Info>
          </>
        )}
      </s.Profile>
    </>
  );
};
const mapStateToProps = (state: any) => {
  return {
    location: state.data.location,
  };
};
const mapDispatchToProps = {
  actionGetLocation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
