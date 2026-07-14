import React from 'react'
import { donRequests } from "../helpers3/TeachingPostsList";
import Items from "../components3/Items";
import FilterBarTeaching from "../components3/FilterBarTeaching"
import "../styles3/TeachingPosts.css"
import TeacherNavBar from "../components3/TeacherNavBar";
import Footer from "../components3/Footer";

function TeachingPosts() {

    return (
      <div className="teachingposts">
        <TeacherNavBar />
        <FilterBarTeaching/>
          <h1 className="listTitle">Teaching Posts</h1>
          {donRequests.length > 0 ? (
              <div className="thelist">
                  {donRequests.map((thing, key) => (
                      <Items 
                          key={key}
                          image={thing.image} 
                          name={thing.name} 
                          category={thing.category}
                          linkTo={thing.linkTo}
                      />
                  ))}
              </div>
          ) : (
              <div className="noItemsFound">
                  No school supplies donation requests found.
              </div>
          )}
          <Footer/>
      </div>
  );
}

export default TeachingPosts
