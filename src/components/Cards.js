import Card from './Card';
import React, { useState } from 'react'

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    
    function getCourses() {
      if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
      } else{
        return courses[category];
      }
    } 
  return (
    <div className='flex flex-wrap gap-4 mb-4 justify-center'>
      {
        getCourses().map((course) => (
            <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
