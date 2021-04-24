import "./Tab.css";

const Tab = ({ name, tabIsActive, id, handleTabSelection }) => {
  return (
    <div className={tabIsActive ? "tab" : "tab tab-inactive"}>
      <div key={id} onClick={() => handleTabSelection(id)}>
        {name}
      </div>
    </div>
  );
};

export default Tab;
