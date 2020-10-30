import React, {useState, useEffect} from 'react';
import classnames from "classnames"
import {useQuery} from "@apollo/react-hooks";
import {useDebounce} from "use-debounce";
import {SEARCH_FOR_REPOS,SEARCH_FOR_USERS} from "./queries";
import { IUser } from './interfaces';


const User: React.FC<IUser> = ({searchTerm}) => {
  const [isActive, setActive] = useState(false);
  const [expandedRepo, setExpandedRepo] = useState(null);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 3000);
  const {data, loading, error} = useQuery(SEARCH_FOR_USERS,
    {variables: {search_term: debouncedSearchTerm}}
    );

  
  // useEffect(() => {
  //   setExpandedRepo(null);
  // }, [data]);

  if (loading) {
    return (
      <div >
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div
      >
        error
      </div>
    )
  }

  // if (!data.search.repositoryCount) {
  //   return (
  //     <div
  //     >
  //       There are no such repositories!
  //     </div>
  //   )
  // }
  console.log(window.onload);
// window.onload = function() {
//     document.querySelector('.cont_modal').className = "cont_modal";
// }
// useEffect(() => {
//     // document.querySelector('.cont_modal').className = "cont_modal";
    
//     }
// },[]);

// function handleClick() {
//     console.log(clas);
//     console.log(c);
//     console.log(typeof(c));
//     if (c % 2 === 0) {
//         c++;
//         setClas(false);
        
//     } else {
//         c++;
//         setClas(true);
//         // document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
        
//     }
// }
const buttonClasses = classnames({"cont_modal": true},{"cont_modal_active": isActive})

console.log(data.user.repositories)
console.log(data.user);
  return (
    
    
       <div className="cont_principal" >
        <div className="cont_central" >
            <div className={buttonClasses}> 
                <div className="cont_photo" >
                    <div className="cont_img_back">
                        <img src={data.user.avatarUrl} alt="" />
                        {/* <h3>{data.user.login}</h3> */}
                    </div>
                    {/* <div className="cont_mins">
                        <div className="sub_mins">
                            <h3>50</h3>
                            <span>MINS</span>
                        </div>
                        <div className="cont_icon_right">
                            <a href="#"> <i className="material-icons">&#xE8E7;</i></a>
                        </div>
                    </div>
                    <div className="cont_servings">
                        <h3>4</h3>
                        <span>SERVINGS</span>
                    </div> */}
                    <div className="cont_detalles">
                        <h3>{data.user.login}</h3>
                        {data.user.bio ? <p>{data.user.bio}</p>:<p>No Bio provided</p>}
                    </div>
                </div>
                <div className="cont_text_ingredients">
                    <div className="cont_over_hidden">
                        <div className="cont_tabs">
                            <ul>
                                <li>
                                    <a href="#">
                                        <h4>Profile</h4>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h4>About</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                            {/* <div className="extender_cont">
                                
                            </div> */}
                        <div className="cont_text_det_preparation">
                            <div className="cont_title_preparation">
                                <p>STEP 1</p>
                            </div>
                            <div className="cont_info_preparation">
                                <p>Heat oven to 375 degress</p>
                            </div>
                            <div className="cont_text_det_preparation">
                                <div className="cont_title_preparation">
                                    <p>STEP 2</p>
                                </div>
                                <div className="cont_info_preparation">
                                    <p>Heat oil in a large skillet over medium-low head. Add onion and bell papper. Cook gently until very soft, about 20 minutes. Add garlic and cook until tender, 1 to 2 minutes; stir in cumin, paprika and cook 1 minute.
                                        Pour in tomatoes and season with 3/4 teaspoon salt and 1/4 teaspoon pepper;</p>
                                </div>
                            </div>
                        </div>
                        <div className="cont_text_det_">
                            {/* <div className="cont_title_preparation">
                                <p>STEP 1</p>
                            </div>
                            <div className="cont_info_preparation">
                                <p>Heat oven to 375 degress</p>
                            </div>
                            <div className="cont_text_det_preparation">

                                <div className="cont_title_preparation">
                                    <p>STEP 2</p>
                                </div>
                                <div className="cont_info_preparation">
                                    <p>Heat oil in a large skillet over medium-low head. Add onion and bell papper. Cook gently until very soft, about 20 minutes. Add garlic and cook until tender, 1 to 2 minutes; stir in cumin, paprika and cook 1 minute.
                                        Pour in tomatoes and season with 3/4 teaspoon salt and 1/4 teaspoon pepper;</p>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="cont_btn_mas_dets">
                            <a href="#"><i className="material-icons">&#xE313;</i></a>
                        </div> */}
                    </div>
                    <div className="cont_btn_open_dets">
                        <a href="#e" onClick={() => setActive(!isActive)}><i className="material-icons">&#xE314;</i></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    
   
  );
};


export default User;
