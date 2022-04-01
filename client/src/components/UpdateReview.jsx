import React from "react";

const UpdateReview = () => {
  const createNewElement = () => {
    let newInputBox = document.createElement("div");
    newInputBox.innerHTML = <input type="text" id="newInputBox"></input>;
    document.getElementById("newElementId").appendChild(newInputBox);
  };

  return (
    <main>
      <div className="Update Button">
        <button value="Create Element" onclick="createNewElement();">
          Update
        </button>
      </div>
      <div id="newElementId"></div>
    </main>
  );
};

export default UpdateReview;
