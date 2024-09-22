import React from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import highPriority from '../../Asset/Img - High Priority.svg'
import lowPriority from '../../Asset/Img - Low Priority.svg'
import mediumPriority from '../../Asset/Img - Medium Priority.svg'
import noPriority from '../../Asset/No-priority.svg'
import urgent from '../../Asset/SVG - Urgent Priority colour.svg'
import inProgress from '../../Asset/in-progress.svg'
import "./DashView.css";
import todo from '../../Asset/To-do.svg'
import backlog from '../../Asset/Backlog.svg'
import done from '../../Asset/Done.svg'
import cancel from '../../Asset/Cancelled.svg'
import Card from "../Card/Card";
import { useState } from "react";

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  const [grouping, setGrouping] = useState("Progress");

  const progress = [
    todo,
    inProgress,
    backlog,
    done,
    cancel
  ];

  const priority = [
    noPriority,
    lowPriority,
    mediumPriority,
    highPriority,
    urgent
  ];

  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          const icons = selectedData.length == 5 ? priority : progress;

          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <img
                        src={icons[index]}
                      >
                      </img>
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display: 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
