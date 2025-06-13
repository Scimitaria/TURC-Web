'use client'

import React from 'react';
import { HTMLAttributes, useState } from 'react';

//helper functions for file handling

//attaches a file with download capability
export const download = (filepath:string,filename:string) => {
  const testPDF=filepath;
  const link = document.createElement("a");
  link.href = testPDF;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

//use props to add params to DocLst
interface Props extends HTMLAttributes<any> {
    engDocs: [string,string][]
    spanDocs:[string,string][]
}

//list of download buttons
export const DocLst = (props: Props) => {
  //language toggle vars
  const [lang, setLang] = useState(true);
  //file iteration vars
  const [currentFile, setCurrentFile] = useState<string | null>(null);

  //toggle lang
  const handleToggle = () => {setLang(!lang);};

  //if language==English show English docs else show Spanish docs
  var display = lang ? props.engDocs : props.spanDocs

  //allow files to be viewed in page
  function show() {
    if (currentFile != null) return <iframe src={currentFile} width="1000" height="700" />;
    else console.log(`WARNING: ${currentFile} is null`);
  }

  return (
    <div>
      {/* language toggle */}
      <button
        onClick={handleToggle}
        className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded text-black font-[Volkhov]"
      >
        {/* Display language button would switch to */}
        {lang ? 'Spanish' : 'English'}
      </button>

      {/* map formatting across doc list */}
      {display.map(([path, filename]: [string, string]) => (
        <React.Fragment key={path}>
          <div className="columns-2">
            <p className="font-[Volkhov] mt-5">{filename}</p>

            {/* display/hide file */}
            <button
              onClick={() => setCurrentFile(currentFile === path ? null : path)}
              className="bg-gray-300 hover:bg-gray-400 py-2 px-4 mr-5 rounded text-black font-[Volkhov]"
            >
              {currentFile === path ? "Hide File" : "View File"}
            </button>

            {/* download file */}
            <button
              onClick={() => download(path, filename)}
              className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded text-black font-[Volkhov]"
            >
              Download File
            </button>
          </div>

          {/* show file */}
          {currentFile === path && show()}
        </React.Fragment>
      ))}
    </div>
  );
};
