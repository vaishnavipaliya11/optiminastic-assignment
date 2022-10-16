export const SubHeading = () =>{
    return(
        <div className="subheading-container common-flex spc-around">
        <p>
          <span style={{"color":"#9333ea"}}>My projects</span>
          <span>Explore</span>
        </p>
  
        <div>
          <input type="search" placeholder="search by name....." />
        </div>
      </div>
    )
}