import React, {useState, useEffect} from 'react';
import classnames from "classnames"
import {useQuery} from "@apollo/react-hooks";
import {useDebounce} from "use-debounce";
import {SEARCH_FOR_REPOS,SEARCH_FOR_USERS} from "./queries";
import { IUser } from '../interfaces/interfaces';
import { About,Profile} from './Details';


const User: React.FC<IUser> = ({searchTerm}) => {
    const [isActive, setActive] = useState(false);
    const [expandedRepo, setExpandedRepo] = useState(null);
    const [tabActive, setTabActive] = useState<string>("About");
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
  console.log(data.user.issues);
  console.log(typeof(data.user.issues));
  console.log(Object.values(data.user.issues)[1]);
  // console.log(data.user.issues(totalCount));

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
                                    <a href="#" onClick={() => setTabActive("Profile")}>
                                        <h4>Profile</h4>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={() => setTabActive("About")}>
                                        <h4>About</h4>
                                    </a>
                                </li>
                            </ul>
                        </div>
                            {/* <div className="extender_cont">

                            </div> */}
                        <div className="cont_text_det_preparation">
                            {tabActive === "About" && <About 
                                bio={data.user.bio}
                                company={data.user.company}
                                createdAt={data.user.createAt}
                                email={data.user.email}
                                name={data.user.name}
                                followers={Object.values(data.user.followers)[1]}
                                following={Object.values(data.user.following)[1]}
                                issues={Object.values(data.user.issues)[1]}
                                weburl={data.user.websiteUrl}
                                location={data.user.location}
                            />}
                            {tabActive === "Profile" && <Profile 
                                repositoriesContributedTo={Object.values(data.user.repositoriesContributedTo)[1]}
                                commitComments={Object.values(data.user.commitComments)[1]} 
                                issueComments={Object.values(data.user.issueComments)[1]} 
                                pinnedItems={Object.values(data.user.pinnedItems)[1]} 
                                pullRequests={Object.values(data.user.pullRequests)[1]} 
                                repositories={Object.values(data.user.repositories)[1]}  
                                starredRepositories={Object.values(data.user.starredRepositories)[1]} 
                                watching={Object.values(data.user.watching)[1]} 
                            />}
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
