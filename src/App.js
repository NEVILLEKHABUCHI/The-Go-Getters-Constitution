import React, {useState} from 'react';

export default function AppContainer(){
  const [showContainerLeft,setShowContainerLeft]=useState(false);

  return(
    <div className="appContainer">
      <ContainerTop showContainerLeft={showContainerLeft} setShowContainerLeft={setShowContainerLeft}/>
      <ContainerBody showContainerLeft={showContainerLeft} setShowContainerLeft={setShowContainerLeft}/>
    </div>
  )
}

function ContainerTop({showContainerLeft,setShowContainerLeft}){
  const handleClick=()=>{
    setShowContainerLeft(!showContainerLeft);
  }

  return(
    <div className="containerTop">
        <div className='button'><button onClick={handleClick}><i className={showContainerLeft?'fa fa-times' : 'fa fa-bars'} id='icon'></i></button></div>
        <h2>THE GO-GETTERS' <span>CONSTITUTION</span></h2>
    </div>
  )
}

function ContainerBody({showContainerLeft,setShowContainerLeft}){
  const navContents=[
    {
      mainLink: {text: "Date Founded and Purpose",href: "#Purpose-DateFounded"},
      subLinks: [
        {text: "Date Founded",href:"#Date-Founded"},
        {text: "Purpose",href : "#Purpose"}
      ]
    },
    {
      mainLink: {text: "Membership",href: "#Membership"},
      subLinks: [
        {text: "Eligibility",href:'#Eligibility'},
        {text: "Admission",href: '#Admission'},
        {text: "Responsibilities",href: '#Responsibilities'}
      ]
    },
    {
      mainLink: {text: "Leadership",href: '#leadership'},
      subLinks: [
        {text:"Leadership Structure",href: '#'},
        {text:"Roles and Responsibilities",href: "#"},
        {text: "Elections",href: "#",subSubLinks:[
          {text:"Election of Officers",href:"#"},
          {text:"Nomination Process",href:"#"},
          {text:"Voting Procedure",href:"#"},
          {text:"Assumption of office",href:"#"},
          {text:"Term of Office",href:"#"},
          {text:"Vacancies",href:"#"},
          {text:"Resignation",href:"#"}
        ]}
      ]
    },
    {
      mainLink: {text: "Meetings",href:''},
      subLinks:[
        {text:"Frequency", href: '#'},
        {text:"Notice",href:'#'},
        {text:"Quorum",href:'#'}
      ]
    },
    {
      mainLink: {text: "Finances",href: '#'},
      subLinks: [
        {text:"Merry-go-round",href: '#'},
        {text:"Savings",href: '#'},
        {text:"Emergency Fund",href: '#'},
        {text:"Project",href: '#',subSubLinks:[
          {text:"Project Rules",href: ''},
          {text:"Project Interest",href: ''}
        ]},
        {text:"Fines",href:"#"},
        {text:"Withdrawals",href: "#"}
      ]
    },
    {
      mainLink:{text: "Farewell Support",href: '#'},
      subLinks: [
        {text:"Purpose",href: "#"},
        {text:"Amount per support",href: "#"},
        {text:"Process",href: "#"}
      ]
    },
    {
      mainLink:{text: "Amendments",href: '#'},
      subLinks:[
        {text: "Process",href: "#"},
        {text: "Notification",href: "#"}
      ]
    },
    {
      mainLink:{text: "Dissolution"},
      subLinks:[]
    },
    {
      mainLink:{text: "Adoption"},
      subLinks: []
    }
  ]
  return (
    <div className="containerBody">
      <ContainerLeft show={showContainerLeft} navContents={navContents}/>
      <ContainerRight setShowContainerLeft={setShowContainerLeft}/>
    </div>
  )
}

function ContainerLeft({show,navContents}){
  const [navState,setNavState]=useState(Array(navContents.length).fill(false));
  const [subNavState,setSubNavState]=useState(
    navContents.map(content=>Array(content.subLinks.length).fill(false))
  );

  const toggleNav=(index)=>{
    setNavState(prevState=>{
      const newState=[...prevState];
      newState[index]=!newState[index];
      return newState;
    });
  };
  
  const toggleSubNav=(mainIndex,subIndex)=>{
    setSubNavState(prevState=>{
      const newState=[...prevState];
      newState[mainIndex]=[...prevState[mainIndex]];
      newState[mainIndex][subIndex]=!prevState[mainIndex][subIndex];
      return newState;
    });
  };

  return (
    <div className={`containerLeft ${show ? 'show' : 'hide'}`}>
      <h4>Table of Contents.</h4>
      <div className='content'>
        {navContents.map((content,index)=>(
          <div key={index} className='nav-bar'>
            <div className='mainLink'>
              <a href={content.mainLink.href}><span>Article {index+1}: </span>{content.mainLink.text}</a>
                {content.subLinks.length>0 && (
                    <button onClick={()=>toggleNav(index)}>
                    {navState[index] ? <i className='fa fa-chevron-up'></i> : <i className='fa fa-chevron-down'></i>}
                  </button>
                )}
            </div>
            <div className={`nav-content ${navState[index] ? 'show' : ''}`}>
              {content.subLinks.map((sublink,subIndex)=>(
                <div key={subIndex}>
                  <div>
                    <a href={sublink.href}><span>{index+1}.{subIndex+1}: </span>{sublink.text}</a>
                    {sublink.subSubLinks && (
                      <button onClick={()=>toggleSubNav(index,subIndex)}>
                        {subNavState[index][subIndex] ? <i className='fa fa-chevron-up'></i> : <i className='fa fa-chevron-down'></i>}
                      </button>
                    )}
                  </div>
                  {sublink.subSubLinks && (
                    <div className={`nav-content ${subNavState[index][subIndex] ? 'show' : ''}`} id='sublink'>
                      {sublink.subSubLinks.map((subSublink,subSubIndex)=>(
                        <a key={subSubIndex} href={subSublink.href}><span>{index+1}.{subIndex+1}.{subSubIndex+1}: </span>{subSublink.text}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <p id='ownership'>Website powered by <a href='https://nevoline-company.vercel.app/' target='_blank' rel='noopener noreferrer'>NEVOLINE</a></p>
      </div>
          
    </div>
  )
}

function ContainerRight({setShowContainerLeft}){
  const handleClick=()=>{
    setShowContainerLeft(false);
  }
  return (
    <div  onClick={handleClick} className="containerRight">
        <div className='content'>
          <section>
            <h2 id='Purpose-DateFounded'><span>Article 1:</span>Purpose and Date Founded</h2>
            <p id='underline'><span></span></p>

            <h3 id='Date-Founded'><span>1.1:</span>Date Founded.</h3>
            <p className='main-content'>The Go-Getters was founded on 13th April 2023 by Neville Khabuchi, Bense Mwikhali and Charles Joe.</p>

            <h3 id='Purpose'><span>1.2:</span>Purpose</h3>
            <p className='main-content'>The purpose of this chama shall be to promote financial growth, stability and support among its members through regular 
              contributions[merry-go-rounds], savings, investments and farewell support during times of bereavement.
            </p>
          </section>

          <section>
            <h2><span>Article 2:</span>Membership</h2>
            <p id='underline'><span></span></p>

            <h3><span>2.1:</span>Eligibility</h3>
            <p className='main-content'>Membership shall be open to individuals aged 18 and above who reside in any part of the country[Kenya] and agree to abide by The Go-Getters'
               rules and regulations.
            </p>

            <h3><span>2.2:</span>Admission</h3>
            <p className='main-content'>Prospective members must pay one hundred shillings[100/=] non-refundable registration fee plus the by then investment money[project money] 
               contributed by other members.
            </p>

            <h3><span>2.3:</span>Responsibilities</h3>
            <p className='main-content'>Members are expected to:</p>
            <ol>
              <li>Respect each other.</li>
              <li>Attend meetings regularly.</li>
              <li>Contribute the agreed-upon amount punctually.</li>
              <li>Participate in the group's activities.</li>
              <li>Support fellow members in times of need(bereavement)</li>
            </ol>
          </section>

          <section>
            <h2><span>Article 3:</span>Leadership</h2>
            <p id='underline'><span></span></p>

            <h3 id='leadership'><span>3.1:</span>Leadership structure/Positions</h3>
            <p className='main-content'>
              The Go-Getters' shall provide for the following leadership positions:
            </p>
            <ol>
                <li>Chairperson.</li>
                <li>Vice-Chairperson.</li>
                <li>Secretary.</li>
                <li>Treasurer.</li>
              </ol>

              <h3><span>3.2:</span>Roles and Responsibilities</h3>

              <p className='main-content'>
                <b>Chairperson:</b>
              </p>
              <ol>
                <li>Oversees the overall functioning of the group.</li>
                <li>Preside over all meetings.</li>
                <li>Ensure adherence to the constitution and policies.</li>
                <li>Represent the group in external matters.</li>
                <li>Provide leadership and strategic direction.</li>
              </ol>

              <p className='main-content'>
                <b>Vice Chairperson:</b>
              </p>
              <ol>
                <li>Assist the Chairperson in his/her duties.</li>
                <li>Assume the role of the chairperson in his/her absence.</li>
                <li>Prepare meeting agendas.</li>
                <li>Oversee and manage register records.</li>
                <li>Approve special loans.</li>
                <li>Monitor group goals.</li>
              </ol>

              <p className='main-content'>
                <b>Secretary:</b>
              </p>
              <ol>
                <li>Record and maintain minutes of meetings.</li>
                <li>Maintain an up-to-date list of members.</li>
                <li>Incharge of the group's welfare.</li>
              </ol>

              <p className='main-content'>
                <b>Treasurer:</b>
              </p>
              <ol>
                <li>Keep accurate financial records.</li>
                <li>Manage group accounts and transactions.</li>
                <li>Prepare financial reports and present them at meetings.</li>
                <li>Ensure timely collection of member contributions.</li>
                <li>Handle the distribution of funds as per group decisions.</li>
              </ol>

              <h3><span>3.3:</span>Elections</h3>

              <h4><span>3.3.1:</span>Election of Officers</h4>
              <ol>
                  <li>Elections for the leadership positions within the chama shall be held after two years during the Annual General Meeting[AGM]</li>
                  <li>The positions subject to election shall include, but are not limited to, the Chairperson,Vice-Chairperson, Secretary and the treasurer.</li>
                  <li>All members in good standing are eligible to run for any office.</li>
              </ol>

              <h4><span>3.3.2:</span>Nomination Process</h4>
              <ol>
                <li>Nominations for each position shall be submitted in writing to the Secretary at least two weeks before the AGM.</li>
                <li>Each nomination must be seconded by at least one other member.</li>
                <li>A list of all nominees shall be circulated to the membership one week before the AGM.</li>
              </ol>

              <h4><span>3.3.3:</span>Voting Procedure</h4>
              <ol>
                <li>Voting shall be conducted by secret ballot during the AGM.</li>
                <li>Each member shall have one vote per position.</li>
                <li>The candidate receiving the highest number of votes for each position shall be declared elected.</li>
                <li>In the event of a tie, a runoff election shall be held between the tied candidates.</li>
              </ol>

              <h4><span>3.3.4:</span>Assumption of Office</h4>
              <ol>
                <li>Newly elected officers shall assume their roles immediately following the conclusion of the AGM.</li>
                <li>Outgoing officers shall ensure a smooth transition by providing all necessary documentation and briefings to the incoming officers within two weeks of the election.</li>
              </ol>

              <h4><span>3.3.5:</span>Term of Office</h4>
              <ol>
                <li>The term of office for all elected positions shall be one year.</li>
                <li>Officers may be re-elected for consecutive terms without limitation.</li>
              </ol>

              <h4><span>3.3.6:</span>Vacancies</h4>
              <ol>
                <li>In the event of a vacancy in any elected position, a special election shall be held at the next regular meeting to fill the position for the remainder of the term.</li>
                <li>Nominations for the special election shall follow the same process as regular elections.</li>
              </ol>

              <h4><span>3.3.7:</span>Resignation</h4>
              <ol>
                <li>Any officer may resign from their position by submitting a written notice to the Secretary.</li>
                <li>The resignation shall take effect immediately upon receipt of the notice unless a later date is specified in the resignation letter.</li>
                <li>In the event of a resignation, the position shall be considered vacant and a special election shall be conducted in accordance with Section 6 of Article 3 to fill the vacancy. </li>
              </ol>

          </section>
        </div>
    </div>
  )
}