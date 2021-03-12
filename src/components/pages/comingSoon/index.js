import React from "react";
import Image from "../../../Elements/Image";
import comingSoon from "../../../assets/images/coming-soon.png";
import PageWrapper from "../../pageWrapper";

const ComingSoon = () => {
  return (
    <PageWrapper>
      <div className="text-center">
        <Image src={comingSoon} alt="coming-soon" />;
      </div>
    </PageWrapper>
  );
};

export default ComingSoon;
