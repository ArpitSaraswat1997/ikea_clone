import React from "react";
import { useRef, useState } from "react";
import { PinInput, PinInputField } from "@chakra-ui/react";

function PinInputFun(props) {
  const [otp, setOtp] = useState("");
  let pinInp = useRef();

  return (
    <div
    //   ref={pinInp}
    //   style={{ display: "flex", width: "100px", height: "50px", gap: "20px" }}
    //
    >
      <PinInput otp>
        <PinInputField size="lg" />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput otp>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </div>
  );
}

export default PinInputFun;
