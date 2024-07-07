import React, { useState } from "react";

const PasswordGenerator = () => {
  const [value, setValue] = useState(9);
  const [password, setPassword] = useState("");
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const [copyPassword, setCopyPassword] = useState("")

  const eventHandler = (e) => {
    setValue(e.target.value);
  };

  let number = "0123456789";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let symbols = "!@#$%^&*()";

  const generate = () => {
    let add = "";
    if (includeUpperCase) add += upperCase;
    if (includeLowerCase) add += lowerCase;
    if (includeNumbers) add += number;
    if (includeSymbols) add += symbols;

    let generatedPassword = "";
    for (let i = 0; i < value; i++) {
      const random = Math.floor(Math.random() * add.length);
      generatedPassword += add[random];
    }

    setPassword(generatedPassword);
  };


  const copyPass = ()=> {
    navigator.clipboard.writeText(password).then(()=>{
        setCopyPassword(alert(`password copy: ${password}`))
    })
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-3xl">Password Generator</h1>
        <div className=" flex">
          <input
            type="text"
            className="border border-black w-[99%] mx-2 px-2"
            readOnly
            value={password}
          />

          <button onClick={copyPass}
           className=" px-2 py-2 bg-red-500">Copy Password</button>
        </div>
        <div className="flex justify-between w-[99%] mx-2">
          <p>Select Password length (**8-50 characters**)</p>
          <input
            type="number"
            className="border border-black"
            onChange={eventHandler}
            value={value}
            min="8"
            max="50"
          />
        </div>

        <div className="flex mx-2 gap-1">
          <input
            type="checkbox"
            checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
          />
          <p>Include UpperCase</p>
        </div>
        <div className="flex mx-2 gap-1">
          <input
            type="checkbox"
            checked={includeLowerCase}
            onChange={(e) => setIncludeLowerCase(e.target.checked)}
          />
          <p>Include LowerCase</p>
        </div>
        <div className="flex mx-2 gap-1">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <p>Include Numbers</p>
        </div>
        <div className="flex mx-2 gap-1">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <p>Include Symbols</p>
        </div>

        <button
          onClick={generate}
          className="bg-red-500 py-2 rounded-md mx-2"
        >
          Generate Password
        </button>
      </div>
    </>
  );
};

export default PasswordGenerator;
