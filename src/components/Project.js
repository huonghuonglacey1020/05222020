import React from 'react';

function Project(props) {
    return (
        <div>
            <div className='row'>

                {props.projects.map(item => (
                    <div className="col-6 col-md-4">
                        <a href={item.link}>
                            <div className="p-3 mb-2 bg-secondary text-white"><div className=" appLink"><p>{item.name}</p><img src={item.image}
                                className="img-thumbnail" alt="img-thumbnail" /></div></div>
                            <a href={item.link}>Git Repo</a></a>
                    </div>
                ))}
            </div>
        </div>
    )
                }
  
        
            
export default Project;