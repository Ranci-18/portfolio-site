import React from "react";

interface ExtraProps {
    img: string;
}
const ExtraHelper: React.FC<ExtraProps> = ({ img }) => {
    return(
        <>
            <img src={img} alt="Extra icon" width={30} height={30} />
        </>
    )
}

export default ExtraHelper;