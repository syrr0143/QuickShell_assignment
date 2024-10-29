// import { useCallback, useContext, useMemo } from "react";
// import styled from "styled-components";
// import { TopBar } from "./components/Layout/Layout.jsx";
// import { AppContext } from "./state/context";
// import DisplayButton from "./components/Component/DisplayButton/DisplayButton";
// import DisplayCard from "./components/Component/DisplayCard/DisplayCard";
// import { useEffect, useRef, useState } from "react";
// import { ColumnHeader } from "./components/Layout/Layout.jsx";
// import Card from "./components/Component/Card/Card";
// import Column from "./components/Layout/Column";

// function App() {
//   const { dataToRender } = useContext(AppContext);

//   // Checks for opening and closing based on mouse clicks
//   const [isOpen, setIsOpen] = useState(false);
//   // const displayCardRef = (useRef < HTMLDivElement) | (null > null);
//   const displayCardRef = (useRef < HTMLDivElement) | (null > null);

//   const handleClickOutside = (e) => {
//     if (displayCardRef.current && !displayCardRef.current.contains(e.target)) {
//       setIsOpen(false);
//     }
//   };
//   const toggleOpen = useCallback(() => {
//     setIsOpen((prevState) => !prevState);
//   }, []);

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   });

//   const renderedData = useMemo(() => {
//     return dataToRender?.map((category) => (
//       <Column>
//         <>
//           <ColumnHeader
//             icon={category.icon}
//             name={category.name}
//             count={category.tickets.length}
//             available={category.available}
//           />
//           <div className="column-cards">
//             {category.tickets.map((ticket) => (
//               <Card data={ticket} key={ticket.id} />
//             ))}
//           </div>
//         </>
//       </Column>
//     ));
//   }, [dataToRender]);

//   return (
//     <>
//       <TopBar>
//         <DispalyButtonWrapper ref={displayCardRef}>
//           <DisplayButton onClick={toggleOpen} />
//           {isOpen && <DisplayCard />}
//         </DispalyButtonWrapper>
//       </TopBar>
//       <Main>{renderedData}</Main>
//     </>
//   );
// }

// const Main = styled.div`
//   box-sizing: border-box;
//   padding: 1.5rem 3rem;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: no-wrap;
//   gap: 2rem;
//   /* width: 100vw; */
//   overflow-x: scroll;
//   min-height: calc(100vh - 66px); // ! Can be improved
//   /* .column {
//     width: 20vw;
//     min-width: 20vw;
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//   } */
//   .column-cards {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//   }
// `;

// const DispalyButtonWrapper = styled.div`
//   width: fit-content;
// `;

// export default App;
// import {
//   useCallback,
//   useContext,
//   useMemo,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import styled from "styled-components";
// import { TopBar } from "./components/Layout/Layout.jsx";
// import { AppContext } from "./state/context";
// import DisplayButton from "./components/Component/DisplayButton/DisplayButton";
// import DisplayCard from "./components/Component/DisplayCard/DisplayCard";
// import { ColumnHeader } from "./components/Layout/Layout.jsx";
// import Card from "./components/Component/Card/Card";
// import Column from "./components/Layout/Column";

// function App() {
//   const { dataToRender } = useContext(AppContext);

//   const [isOpen, setIsOpen] = useState(false);
//   const displayCardRef = useRef < HTMLDivElement > null;

//   const handleClickOutside = (e) => {
//     if (displayCardRef.current && !displayCardRef.current.contains(e.target)) {
//       setIsOpen(false);
//     }
//   };

//   const toggleOpen = useCallback(() => {
//     setIsOpen((prevState) => !prevState);
//   }, []);

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const renderedData = useMemo(() => {
//     return dataToRender?.map((category) => (
//       <Column key={category.name}>
//         <>
//           <ColumnHeader
//             icon={category.icon}
//             name={category.name}
//             count={category.tickets.length}
//             available={category.available}
//           />
//           <div className="column-cards">
//             {category.tickets.map((ticket) => (
//               <Card data={ticket} key={ticket.id} />
//             ))}
//           </div>
//         </>
//       </Column>
//     ));
//   }, [dataToRender]);

//   return (
//     <>
//       <TopBar>
//         <DisplayButtonWrapper ref={displayCardRef}>
//           <DisplayButton onClick={toggleOpen} />
//           {isOpen && <DisplayCard />}
//         </DisplayButtonWrapper>
//       </TopBar>
//       <Main>{renderedData}</Main>
//     </>
//   );
// }

// const Main = styled.div`
//   box-sizing: border-box;
//   padding: 1.5rem 3rem;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: no-wrap;
//   gap: 2rem;
//   overflow-x: scroll;
//   min-height: calc(100vh - 66px);

//   .column-cards {
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
//   }
// `;

// const DisplayButtonWrapper = styled.div`
//   width: fit-content;
// `;

// export default App;
import {
  useCallback,
  useContext,
  useMemo,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { TopBar } from "./components/Layout/Layout.jsx";
import { AppContext } from "./state/context";
import DisplayButton from "./components/Component/DisplayButton/DisplayButton";
import DisplayCard from "./components/Component/DisplayCard/DisplayCard";
import { ColumnHeader } from "./components/Layout/Layout.jsx";
import Card from "./components/Component/Card/Card";
import Column from "./components/Layout/Column";

function App() {
  const { dataToRender } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const displayCardRef = null;
  const handleClickOutside = (e) => {};

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderedData = useMemo(() => {
    return dataToRender?.map((category) => (
      <Column key={category.name}>
        <>
          <ColumnHeader
            icon={category.icon}
            name={category.name}
            count={category.tickets.length}
            available={category.available}
          />
          <div className="column-cards">
            {category.tickets.map((ticket) => (
              <Card data={ticket} key={ticket.id} />
            ))}
          </div>
        </>
      </Column>
    ));
  }, [dataToRender]);

  return (
    <>
      <TopBar>
        <DisplayButtonWrapper ref={displayCardRef}>
          <DisplayButton onClick={toggleOpen} />
          {isOpen && <DisplayCard />}
        </DisplayButtonWrapper>
      </TopBar>
      <Main>{renderedData}</Main>
    </>
  );
}

const Main = styled.div`
  box-sizing: border-box;
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  gap: 2rem;
  overflow-x: scroll;
  min-height: calc(100vh - 66px);

  .column-cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const DisplayButtonWrapper = styled.div`
  width: fit-content;
`;

export default App;
