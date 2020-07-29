import React from "react";

const ExperienceContent = ({ styles }) => {
  const dummyPost = {
    title: `Here's a blog post title`,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  const posts = Array(1).fill(dummyPost);

  const contentStyle = {
    borderTop: "5vh solid #00363a",
    borderBottom: "5vh solid #00363a",
    borderRight: "5vh solid #00363a",
    borderLeft: "2vh solid #00363a",
    marginLeft: '20%',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
  };

  const col1 ={ 
    backgroundColor: 'white',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    height: '85vh',
    width: '50%',
  }

  const col2 ={ 
    backgroundColor: 'white',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    height: '85vh',
    width: '50%',
  }

  return (
    <div style={contentStyle}>
      <div style={col1}>
          <p> Experience</p>
      </div>
      <div style={col2}>
     
      </div>
    </div>
  );
};

export default ExperienceContent;