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
        {text: "Responsibilities",href: '#Responsibilities'},
        {text: "Loss of Membership", href: '#Loss_of_Membership'}
      ]
    },
    {
      mainLink: {text: "Leadership",href: '#Leadership'},
      subLinks: [
        {text:"Leadership Structure",href: '#Leadership_structure'},
        {text:"Roles and Responsibilities",href: "#Roles_and_Responsibilities"},
        {text: "Elections",href: "#Elections",subSubLinks:[
          {text:"Election of Officers",href:"#Elections_of_Officers"},
          {text:"Nomination Process",href:"#Nomination_Process"},
          {text:"Voting Procedure",href:"#Voting_Procedure"},
          {text:"Assumption of office",href:"#Assumption_of_Office"},
          {text:"Term of Office",href:"#Term_of_Office"},
          {text:"Vacancies",href:"#Vacancies"},
          {text:"Resignation",href:"#Resignation"}
        ]},
        {text: "Loss of Leadership",href: "#Loss_of_Leadership",subSubLinks:[
          {text:"Grounds for Loss of Leadership", href:"#Grounds_for_Loss_of_Leadership"},
          {text:"Process for Removal",href:"#Process_for_Removal"},
          {text:"Succession Plan", href:"#Succession_Plan"},
          {text:"Reinstatement of Leadership", href:"#Reinstatement_of_Leadership"}
        ]}
      ]
    },
    {
      mainLink: {text: "Meetings",href: '#Meetings'},
      subLinks:[
        {text:"Types of Meetings", href: '#Types_of_Meetings'},
        {text:"Quorum",href:'#Quorum'},
        {text:"Agendas",href:'#Agendas'},
        {text:"Conduct of Meetings",href: "#Conduct_of_Meetings"},
        {text:"Minutes",href:"#Minutes"},
        {text:"Attendance",href:"#Attendance"}
      ]
    },
    {
      mainLink: {text: "Finances",href: '#Finances'},
      subLinks: [
        {text:"Financial Contributions",href: '#Financial_Contributions'},
        {text:"Sources Of Income",href: '#Sources_of_Income', subSubLinks:[
          {text:"Loaning Project", href: '#Loaning_Project'},
          {text:"Fines", href: '#Fines'},
          {text:"Interest from Savings and Investments", href: '#Savings_Investments_Interest'},
          {text:"Donations and Grants", href: '#Donations_and_Grants'},
          {text:"Fundraising Activities", href: '#Fundraising_Activities'}
        ]},
        {text:"Utilization of Funds",href: "#Utilization_of_Funds"}
      ]
    },
    {
      mainLink:{text: "Farewell Support and Financial Support",href: '#Farewell_Support'},
      subLinks: [
        {text:"Purpose",href: "#Farewell_Purpose"},
        {text:"Amount per support",href: "#Amount_Per_Support"},
        {text:"Process",href: "#Process"},
        {text:"Record Keeping",href: "#Record_Keeping"},
        {text:"Extraordinary Circumstances",href: "#Extraordinary_Circumstances"}
      ]
    },
    {
      mainLink:{text: "Amendments",href: '#Amendments'},
      subLinks:[
        {text: "Purpose",href: "#Amendments_Purpose"},
        {text: "Authority to Amend",href: "#Authority_to_Amend"},
        {text: "Proposal for Amendments",href: "#Proposal_for_Amendments"},
        {text: "Notification to Members", href: "#Notification_to_Members"},
        {text: "Voting on Amendments", href: "#Voting_on_Amendments"},
        {text: "Effective Date of Amendments",href: "#Effective_Date_Of_Amendments"},
        {text: "Record Keeping", href: "#Record_Keeping"},
        {text: "Restrictions on Amendments", href: "#Restrictions_on_Amendments"},
        {text: "Review Period and Dispute Resolution", href: "#Review_Period"}
      ]
    },
    {
      mainLink:{text: "Dissolution",href:"Dissolution"},
      subLinks:[
        {text:"Purpose",href:"#Dissolution_Purpose"},
        {text:"Grounds for Dissolution",href:"#Grounds_for-Dissolution"},
        {text:"Notice of Dissolution",href:"#Notice_of_Dissolution"},
        {text:"Process of Dissolution",href:"#Process_of_Dissolution"},
        {text:"Distribution of Assets", href:"#Distribution_of_Assets"},
        {text:"Final Record Keeping", href:"#Final_Record_Keeping"}
      ]
    },
    {
      mainLink:{text: "Adoption", href:"#Adoption"},
      subLinks: [
        {text:"Purpose",href:"#Adoption_Purpose"},
        {text:"Approval of the Constitution",href:"#Approval_of_the_Constitution"},
        {text:"Declaration of Adoption",href:"#Declaration_of_Adoption"}
      ]
    }
  ]
  return (
    <div className="containerBody">
      <ContainerLeft show={showContainerLeft} setShowContainerLeft = {setShowContainerLeft} navContents={navContents}/>
      <ContainerRight setShowContainerLeft={setShowContainerLeft}/>
    </div>
  )
}

function ContainerLeft({show,setShowContainerLeft,navContents}){
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

  const handleLinkClick = () => {
    setShowContainerLeft(false);
  }

  return (
    <div className={`containerLeft ${show ? 'show' : 'hide'}`}>
      <h4>Table of Contents.</h4>
      <div className='content'>
        {navContents.map((content,index)=>(
          <div key={index} className='nav-bar'>
            <div className='mainLink'>
              <a href={content.mainLink.href} onClick={handleLinkClick}><span>Article {index+1}: </span>{content.mainLink.text}</a>
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
                    <a href={sublink.href} onClick={handleLinkClick}><span>{index+1}.{subIndex+1}: </span>{sublink.text}</a>
                    {sublink.subSubLinks && (
                      <button onClick={()=>toggleSubNav(index,subIndex)}>
                        {subNavState[index][subIndex] ? <i className='fa fa-chevron-up'></i> : <i className='fa fa-chevron-down'></i>}
                      </button>
                    )}
                  </div>
                  {sublink.subSubLinks && (
                    <div className={`nav-content ${subNavState[index][subIndex] ? 'show' : ''}`} id='sublink'>
                      {sublink.subSubLinks.map((subSublink,subSubIndex)=>(
                        <a key={subSubIndex} href={subSublink.href} onClick={handleLinkClick}><span>{index+1}.{subIndex+1}.{subSubIndex+1}: </span>{subSublink.text}</a>
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
            <h2 id='Membership'><span>Article 2:</span>Membership</h2>
            <p id='underline'><span></span></p>

            <h3 id='Eligibility'><span>2.1:</span>Eligibility</h3>
            <p className='main-content'>Membership shall be open to individuals aged 18 and above who reside in any part of the country[Kenya] and agree to abide by The Go-Getters'
               rules and regulations.
            </p>

            <h3 id='Admission'><span>2.2:</span>Admission</h3>
            <p className='main-content'>Prospective members must pay one hundred shillings[100/=] non-refundable registration fee plus the by then investment money[project money] 
               contributed by other members.
            </p>

            <h3 id='Responsibilities'><span>2.3:</span>Responsibilities</h3>
            <p className='main-content'>Members are expected to:</p>
            <ol>
              <li>Respect each other.</li>
              <li>Attend meetings regularly.</li>
              <li>Contribute the agreed-upon amount punctually.</li>
              <li>Participate in the group's activities.</li>
              <li>Support fellow members in times of need(bereavement)</li>
            </ol>

            <h3 id='Loss_of_Membership'><span>2.4:</span>Loss of Membership</h3>
            <ol>
              <li><b>Voluntary Withdrawal:</b></li>
                <p>i. A member may voluntarily withdraw their membership by submitting a written resignation to the secretary, stating their reasons and providing a notice period of at least <b>30 days</b>.</p>
                <p>ii. The member's financial obligations, including repayment of any outstanding loans, fines or contributions, must be cleared before their resignation is accepted by the chairperson.</p>
              <li><b>Involuntary Loss of Membership:</b></li>
                <p>A member may lose their membership for any of the following reasons:</p>
                <ol>
                  <li><b>Failure to Meet Financial Obligations:</b> Persistent failure to pay loans, fines or contributions after multiple reminders and warnings.</li>
                  <li><b>Violation of the Constitution:</b> Breaching key provisions of the constitution or engaging in activities that harm the reputation or objectives of the chama.</li>
                  <li><b>Non-Attendance:</b> Missing <b>three consecutive meetings</b> without valid reasons and failing to comply with penalties imposed.</li>
                </ol>
              <li><b>Process of Termination of Membership:</b></li>
                <p>i. For <b>involuntary loss of membership</b>, the matter shall be reviewed by the executive committee and the member will be given an opportunity to present their defence.</p>
                <p>ii. A resolution to terminate membership must be passed by a majority vote of the executive committee and ratified by members during the next meeting.</p>
                <p>iii. A <b>voluntary loss of membership</b> shall only be accepted at the end of a merry-go-round.</p>
              <li><b>Refund of Savings and Contributions:</b></li>
                <p>i. Upon withdrawal or termination, the member is entitled to a refund of their savings and other contributions, less any outstanding debts, fines or penalties, <b>on exiting</b>.</p>
              <li><b>Reinstatement of Membership:</b></li>
                <p>A former member may apply for reinstatement by submitting a written request and fulfilling the conditions for joining as a new member.</p>
              </ol>
          </section>

          <section>
            <h2 id='Leadership'><span>Article 3:</span>Leadership</h2>
            <p id='underline'><span></span></p>

            <h3 id='Leadership_structure'><span>3.1:</span>Leadership structure/Positions</h3>
            <p className='main-content'>
              The Go-Getters' shall provide for the following leadership positions:
            </p>
            <ol>
                <li>Chairperson.</li>
                <li>Vice-Chairperson.</li>
                <li>Secretary.</li>
                <li>Treasurer.</li>
              </ol>

              <h3 id='Roles_and_Responsibilities'><span>3.2:</span>Roles and Responsibilities</h3>

              <p className='main-content'>
                <b>Chairperson:</b>
              </p>
              <ol>
                <li>Oversees the overall functioning of the group.</li>
                <li>Preside over all meetings.</li>
                <li>Ensure adherence to the constitution and policies.</li>
                <li>Represent the group in external matters.</li>
                <li>Provide leadership and strategic direction.</li>
                <li>  Prepare Meeting Agendas.</li>
              </ol>

              <p className='main-content'>
                <b>Vice Chairperson:</b>
              </p>
              <ol>
                <li>Assist the Chairperson in his/her duties.</li>
                <li>Assume the role of the chairperson in his/her absence.</li>
                <li>Prepare meeting agendas.</li>
                <li>Oversee and manage register records.</li>
                <li>Approve loans.</li>
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

              <h3 id='Elections'><span>3.3:</span>Elections</h3>

              <h4 id='Election_of_Officers'><span>3.3.1:</span>Election of Officers</h4>
              <ol>
                  <li>Elections for the leadership positions within the chama shall be held after <b>two years</b> during the Annual General Meeting[AGM]</li>
                  <li>The positions subject to election shall include, but are not limited to, the Chairperson,Vice-Chairperson, Secretary and the treasurer.</li>
                  <li>All members in good standing are eligible to run for any office.</li>
              </ol>

              <h4 id='Nomination_Process'><span>3.3.2:</span>Nomination Process</h4>
              <ol>
                <li>Nominations for each position shall be submitted in writing to the Secretary at least <b>two weeks</b> before the AGM.</li>
                <li>Each nomination must be seconded by at least <b>one</b> other member.</li>
                <li>A list of all nominees shall be circulated to the membership <b>one week</b> before the AGM.</li>
              </ol>

              <h4 id='Voting_Procedure'><span>3.3.3:</span>Voting Procedure</h4>
              <ol>
                <li>Voting shall be conducted by <b>secret ballot</b> during the AGM.</li>
                <li>Each member shall have <b>one vote per position</b>.</li>
                <li>The candidate receiving the highest number of votes for each position shall be declared elected.</li>
                <li>In the event of a tie, a runoff election shall be held between the tied candidates.</li>
              </ol>

              <h4 id='Assumption_of_Office'><span>3.3.4:</span>Assumption of Office</h4>
              <ol>
                <li>Newly elected officers shall assume their roles <b>immediately</b> following the conclusion of the AGM.</li>
                <li>Outgoing officers shall ensure a smooth transition by providing all necessary documentation and briefings to the incoming officers <b>within two weeks</b> of the election.</li>
              </ol>

              <h4 id='Term_of_Office'><span>3.3.5:</span>Term of Office</h4>
              <ol>
                <li>The term of office for all elected positions shall be <b>two years</b></li>
                <li>Officers may be re-elected for consecutive terms without <b>limitation</b>.</li>
              </ol>

              <h4 id='Vacancies'><span>3.3.6:</span>Vacancies</h4>
              <ol>
                <li>In the event of a vacancy in any elected position, a special election shall be held at the <b>next regular meeting</b> to fill the position for the remainder of the term.</li>
                <li>Nominations for the special election shall follow the same process as regular elections.</li>
              </ol>

              <h4 id='Resignation'><span>3.3.7:</span>Resignation</h4>
              <ol>
                <li><b>Any officer</b> may resign from their position by submitting a written notice to the <b>secretary</b>.</li>
                <li>The resignation shall take effect <b>immediately</b> upon receipt of the notice unless a later date is specified in the resignation letter.</li>
                <li>In the event of a resignation, the position shall be considered vacant and a special election shall be conducted in accordance with <b>Section 6 of Article 3</b> to fill the vacancy. </li>
              </ol>

              <h3 id='Loss_of_Leadership'><span>3.4:</span>Loss of Leadership</h3>
              <h4 id='Grounds_for_Loss_of_Leadership'><span>3.4.1:</span>Grounds for Loss of Leadership</h4>
              <ol>
                   <p>A leader may lose their position for the following reasons:</p>
                   <li><b>Failure to Fulfill Duties:</b></li>
                   <ol>
                    <li>Consistent neglect of responsibilities outlined in the constitution or agreed upon by members.</li>
                    <li>Absence from <b>three consecutive meetings</b> without valid reasons.</li>
                   </ol>
                   <li><b>Financial Mismanagement or Misconduct:</b></li>
                   <ol>
                    <li>Misuse, embezzlement or fraud involving chama funds or resources.</li>
                    <li>Failure to account for financial transactions or maintain accurate records.</li>
                   </ol>
                   <li><b>Breach of Chama Constitution or Policies:</b></li>
                   <ol>
                    <li>Violation of constitutional provisions, including conflict of interest or engaging in actions detrimental to the chama's objectives.</li>
                   </ol>
                   <li><b>Misconduct or Abuse of Power:</b></li>
                   <ol>
                    <li>Unethical behaviour, harassment, intimidation or discrimination against members.</li>
                    <li>Abuse of power for personal gain or to unfairly influence decisions.</li>
                   </ol>
                   <li><b>Loss of Membership:</b></li>
                   <ol>
                    <li>A leader who loses their membership, whether voluntarily or involuntarily, automatically forfeits their leadership position.</li>
                   </ol>
                   <li><b>Loss of Confidence by Members:</b></li>
                   <ol>
                    <li>A vote of no confidence passed by at least <b>two-thirds of the members</b> during an Annual General Meeting(AGM).</li>
                   </ol>
              </ol>

              <h4 id='Process_for_Removal'><span>3.4.2:</span>Process for Removal</h4>
              <ol>
                <li><b>Initiation of Removal Process:</b></li>
                <ol>
                  <li>Any member can file written petition to the executive committee detailing the reasons for seeking the removal of a leader.</li>
                  <li>The petition must be signed by at least <b>one-third of the members</b> for it to be considered valid.</li>
                </ol>
                <li><b>Investigation:</b></li>
                <ol>
                  <li>The executive commmittee (<b>excluding the accused leader</b>) shall appoint an impartial panel to investigate the claims.</li>
                  <li>The leader in question shall be given an oppportunity to respond to the allegations in writing or in person.</li>
                </ol>
                <li><b>Resolution Meeting:</b></li>
                <ol>
                  <li>The findings of the investigation shall be presented to members during a Special General Meeting(SGM).</li>
                  <li>Members shall deliberate on the findings and vote on the removal.</li>
                </ol>
                <li><b>Voting Process:</b></li>
                <ol>
                  <li>A leader shall be removed if at least <b>two-thirds of the members present</b> vote in favour of their removal.</li>
                  <li>Voting shall be conducted by <b>secret ballot</b> to ensure fairness.</li>
                </ol>
                <li><b>Immediate Effects of Removal:</b></li>
                <p>Upon removal, the leader must:</p>
                <ol>
                  <li>Hand over all chama property, documents and responsibilities to their successor or the executive commmittee.</li>
                  <li>Clear any pending financial obligations with the chama.</li>
                </ol>
              </ol>

               <h4 id='Succession_Plan'><span>3.4.3:</span>Succession Plan</h4>
               <ol>
                <li>If a leader is removed, the chama shall:</li>
                <ol>
                  <li>Appoint an acting leader from among the members or the executive committee.</li>
                  <li>Conduct a by-election within <b>30 days</b> to fill the vacant position, unless the next AGM is scheduled within <b>three months</b>.</li>
                </ol>
                <li>The acting leader shall serve only until a permanent replacement is elected.</li>
               </ol>

               <h4 id='Reinstatement_of_Leadership'><span>3.4.4:</span>Reinstatement of Leadership</h4>
               <ol>
                <li>A removed leader may only be reinstated if:</li>
                <ol>
                  <li>They provide evidence refuting the allegations against them.</li>
                  <li>Members vote for their reinstatement with a <b>two-thirds majority</b>.</li>
                </ol>
                <li>Reinstatement must be approved at an AGM or SGM.</li>
               </ol>

          </section>

          <section>
             <h2 id='Meetings'><span>Article 4:</span>Meetings</h2>
            <p id='underline'><span></span></p>

            <h3 id='Types_of_Meetings'><span>4.1:</span>Types of Meetings</h3>
              <p className='main-content'>
                <b>Annual General Meeting[AGM]:</b>
              </p>
              <ol>
                <li>The AGM shall be held <b>once a year</b>.</li>
                <li>The purpose of the AGM is to elect officers, review the financial status, review the set goals for that particular year, set goals for the coming year 
                  and discuss the overall progress of the chama.
                </li>
                <li>Notice of the AGM shall be given to all members at least <b>four weeks</b> in advance.</li>
              </ol>

              <p className='main-content'>
                <b>Regular Meetings:</b>
              </p>
              <ol>
                <li>Regular meetings shall be held on the <b>10th of every month</b>.</li>
                <li>The purpose of the regular meetings is to discuss ongoing activities, financial contributions and any other matters arising.</li>
                <li>Notice of regular meetings shall be given to all members at least <b>three days</b> in advance.</li>
              </ol>

              <p className='main-content'>
                <b>Special Meetings:</b>
              </p>
              <ol>
                <li>Special meetings may be called by the <b>Chairperson</b> or by a <b>written request</b> from at least <b>one-third</b> of the members.</li>
                <li>The purpose of special meetings is to address urgent or specific issues that cannot wait until the next regular meeting.</li>
                <li>Notice of special meetings shall be given to all members at least <b>three days</b> in advance.</li>
              </ol>

              <h3 id='Quorum'><span>4.2:</span>Quorum</h3>
              <ol>
                <li>A quorum of any meeting shall consist of at least <b>one-half</b> of the total membership.</li>
                <li>No official business <b>shall</b> be conducted without a quorum present.</li>
              </ol>

              <h3 id='Agendas'><span>4.3:</span>Agendas</h3>
              <ol>
                <li>The agendas of each meeting shall be prepared by the Chairperson.</li>
                <li>The agendas shall be circulated to all members at least <b>three days</b> before a regular or special meeting and <b>four weeks</b> before the AGM.</li>
              </ol>

              <h3 id='Conduct_of_Meetings'><span>4.4:</span>Conduct of Meetings</h3>
              <ol>
                <li>Meetings shall be chaired by the Chairperson or in their absence, the Vice-Chairperson.</li>
                <li>All members shall have the right to speak and vote on any matter under discussion.</li>
                <li>Decisions shall be made by a simple majority vote of the members present, unless otherwise specified in this constitution.</li>
              </ol>

              <h3 id='Minutes'><span>4.5:</span>Minutes</h3>
              <ol>
                <li>The Secretary shall record the minutes of each meeting.</li>
                <li>The minutes shall include a summary of discussions, decisions made and any actions to be taken.</li>
                <li>The minutes shall be distributed to all members within one week after the meeting.</li>
                <li>The minutes of the previous meeting shall be reviewed and approved at the beginning of the next meeting.</li>
              </ol>

              <h3 id='Attendance'><span>4.6:</span>Attendance</h3>
              <ol>
                <li>Members are expected to attend <b>all meetings</b>.</li>
                <li>Any member who is unable to attend a meeting shall notify the group in advance, providing a valid reason for their absence.</li>
                <li>Persistent absenteeism without valid reason may lead to disciplinary action as stated in article 5 of this constitution.</li>
              </ol>
          </section>

          <section>
            <h2 id='Finances'><span>Article 5:</span>Finances</h2>
            <p id='underline'><span></span></p>

            <h3 id='Financial_Contributions'><span>5.1:</span>Financial Contributions.</h3>
            <p className='main-content'>
              <b>Registration Fee:</b>
            </p>
            <ol>
              <li>All new members must pay a one-time registration fee upon joining the chama.</li>
              <li>The amount of fee shall be reviewed annually and approved by the general membership.</li>
              <li>Registration fees are non-refundable.</li>
            </ol>

            <p className='main-content'>
              <b>Merry-Go-Round Contributions: </b>
            </p>
            <ol>
              <li>Members shall contribute a fixed amount of money regularly as per the schedule agreed at the start of each financial period.</li>
              <li>Contribution amounts and intervals shall be determined by a <b>majority vote</b> during the Annual General Meeting. </li>
              <li>Merry-Go-Round contributions are <b>mandatory</b> for all members.</li>
              <li>The treasurer shall record all contributions in the chama ledger, noting the date and contributing member.</li>
            </ol>

            <p className='main-content'>
              <b>Emergency Fund Contributions:</b>
            </p>
            <ol>
              <li>Members shall contribute a predetermined amount regularly to build the emergency fund.</li>
              <li>The contribution amount shall be set during a general meeting and reviewed periodically to reflect chama's financial capacity and needs.</li>
              <li>Emergency fund contributions are <b>mandatory</b> for all members.</li>
              <li>Emergency funds shall be contributed <b>together</b> with the merry-go-round.</li>
            </ol>

            <p className='main-content'>
              <b>Project Contributions:</b>
            </p>
            <ol>
              <li>Project funds shall be raised through special contributions made by all members as per the requirements of approved projects.</li>
              <li>The amount to be contributed by each member shall be determined during a meeting and may be collected in instalments or as a lump sum.</li>
              <li>Additional fundraising activities such as raffles or community events, may also be organized to boost project funds.</li>
            </ol>

            <p className='main-content'>
              <b>Fines: </b><br/>
              Fines are imposed to encourage discipline and accountability among members. The following rules apply: 
            </p>
            <ol>
              <li>Delays in Attending Meetings:</li>
              <p>i. A member who delays attending a meeting shall pay a fine of <b>20/=</b>.</p>
              <p>ii.  An executive member who delays shall pay a fine of <b>40/=</b>.</p>

              <li>Missing Meetings without Permission:</li>
              <p>i. A member who misses a meeting without prior permission shall pay a fine of <b>50/=</b>.</p>
              <p>ii.  An executive member who misses a meeting without permission shall pay a fine of <b>100/=</b>.</p>

              <li>Repeated Absences:</li>
              <p>i. If a member misses <b>three consecutive meetings</b>, whether with or without permission, they shall be required to pay a fine of <b>50/=</b> for each additional missed meeting thereafter.</p>
            </ol>

            <p className='main-content'>
              <b>Additional Contributions:</b>
            </p>
            <ol>
              <li>Members shall contribute for special purposes as determined by the chama, including but not limited to: </li>
              <p>i. Catering for events such as the Annual General Meeting (AGM).</p>
              <p>ii.  Appreciation tokens for leaders or outstanding members.</p>
              <p>iii. Specific one-time needs as identified and agreed upon during chama meetings.</p>
              <li>The contribution amounts and payment timelines for these purposes shall be communicated in advance.</li>
            </ol>

            <h3 id='Sources_of_Income'><span>5.2:</span>Sources of Income.</h3>
            <h4 id='Loaning_Project'><span>5.2.1:</span>Loaning Project.</h4>
            <p className='main-content'>
              The Go-Getters provides loans to members, generating income from interest and penalties.<br/>
            </p>

            <h4>Loan Types</h4>
            <p className='main-content'>
              <b>1. Voluntary Loans:</b>
              <ol>
                <li>Members can apply for loans based on their individual financial needs.</li>
                <li>Members can borrow up to <b>50%</b> of their total savings and contributions to the emergency fund.</li>
                <li>Loan applications must be approved by the executive committee or during a general meeting.</li>
                <li>Borrowers <b>must</b> be in good standing, with no outstanding loans, fines or overdue contributions.</li>
                <li>A loan amount of between <b>One Hundred Shillings</b> and <b>Five Hundred Shillings</b><b>[100/= - 500/=] must</b> be paid within <b>a month</b>.</li>
                <li>A loan amount of between <b>Five Hundred and Fifty Shillings</b> and <b>One Thousand Shillings [550/= - 1000/=]</b> must be paid within <b>two months</b>.</li>
                <li>A loan amount of <b>more</b> than <b>One Thousand and Fifty Shillings [1050/=]</b> must be paid within <b>three months.</b></li>
              </ol>
            </p>

            <p className='main-content'>
              <b>2. Compulsory Loans:</b>
              <ol>
                <li>The Go-Getters may offer loans where every member is required to take the <b>same</b> amount of loan.</li>
                <li>Distribution shall be done in small groups (e.g. groups of 2 or 3 members) to manage risk and ensure fairness.</li>
                <li>The loan amount and duration shall be determined by the Go-Getters at the beginning of the loan cycle.</li>
              </ol>
            </p>

            <h4>Interest and Penalties</h4>
            <p className='main-content'>
              <b>1. Normal Interest Rate:</b>
              <ol>
                <li>Loans shall attract a standard interest rate of <b>10%</b> per month.</li>
                <li>Interest shall be calculated based on the principal amount and repayment period agreed upon during the loan approval.</li>
              </ol>
            </p>

            <p className='main-content'>
              <b>2. Penalties for Delayed Payments:</b>
              <ol>
                <li>If a member fails to pay their loan within the specified period, an <b>interest rate of 15%</b> shall be charged for each month the loan remains unpaid beyond the grace period.</li>
              </ol>
            </p>
            <p className='main-content'>
              <b>3. Enforcement for Non-Compliance with Loan Repayment Terms:</b>
              <ol>
                <li>Restriction from Chama Benefits: </li>
                <p>i. The member shall be barred from accessing future loans until the overdue loan and penalties are fully settled.</p>
                <p>ii.  The member may be excluded from partcipating in profit-sharing activities, including dividends from chama projects.</p>

                <li>Deduction from Member Savings:</li>
                <p>i. The chama reserves the right to deduct unpaid amounts directly from the member's savings or emergency fund contributions.</p>
                <p>ii.  This action shall be taken after issuing a formal notice to the member.</p>

                <li>Suspension of Membership Rights:</li>
                <p>i. The member may be temporarily suspended from voting rights or holding leadership positions until they settle their debts.</p>
                <p>ii.  Such suspensions shall be documented in the minutes of a general meeting.</p>

                <li>Termination of Membership:</li>
                <p>i. Persistent non-compliance may result in the termination of the member's membership.</p>
                <p>ii.  Upon termination, the member <b>shall</b> forfeit certain rights, including <b>access</b> to the emergency fund or <b>ongoing</b> project benefits.</p>
                <p>iii. Any remaining debts shall still be recoverable by the chama.</p>
              </ol>
            </p>

            <h4>Interest and Profit Sharing</h4>
            <ol>
              <li>The interest generated from the loans shall be divided as follows: </li>
              <p>i. <b>50% of the interest</b> is allocated as the borrowing member's individual profit.</p>
              <p>ii. <b>50% of the interest</b> is retained as the group's profit.</p>
              <p>iii. Interest generated from <b>penalties</b> is retained as the group's profit.</p>
              <li>The group's profit shall be discussed during the Annual General Meeting(AGM) to determine its purpose, which may include reinvestment, member benefits or funding projects.</li>
            </ol>

            <h4 id='Fines'><span>5.2.2: </span>Fines</h4>
            <ol>
              <li>Fines imposed shall be added to the general account.</li>
              <li>The Treasurer shall document the reason for the fine, the date the fine was paid and the member who paid the fine.</li>
            </ol>

            <h4 id='Savings_Investments_Interests'><span>5.2.3: </span>Interest from Savings and Investments</h4>
            <ol>
              <li>Funds in the chama's savings or fixed deposit accounts shall earn interest, which shall be credited to the general account.</li>
              <li>The chama may also invest in low-risk financial investments with members' approval.</li>
            </ol>

            <h4 id='Donations_and_Grants'><span>5.2.4: </span>Donations and Grants</h4>
            <ol>
              <li>The chama may accept financial support from individuals, organizations or institutions.</li>
              <li>All donations and grants must be transparently recorded and used as per agreed terms.</li>
            </ol>

            <h4 id='Fundraising_Activities'><span>5.2.5: </span>Fundraising Activities</h4>
            <ol>
              <li>Income may be generated through events such as: </li>
              <p>i. Raffles, auctions and charity drives.</p>
              <p>ii.  Organized activities to support specific projects or operational needs.</p>
              <li>Funds raised shall be accounted for separately and used according to the purpose of the event.</li>
            </ol>

            <h3 id='Utilization_of_Funds'><span>5.3:</span>Utilization of Funds.</h3>
            <ol>
              <li><b>Registration Fees: </b>Used for administrative costs particularly catering for transaction costs.</li>
              <li><b>Merry-Go-Round: </b>Funds distributed to members on a rotational basis based on the agreed schedule.</li>
              <li><b>Fines: </b>Added to the general fund unless earmarked for specific needs.</li>
              <li><b>Emergency Funds: </b></li>
              <p>i. Disbursed only for approved emergencies.</p>
              <p>ii.  A member receiving funds must provide accountability (e.g., medical bills, receipts).</p>

              <li><b>Project Funds: </b>Used strictly for approved projects, with regular progress reports provided.</li>
              <li><b>Additional Contributions: </b>Dedicated solely to the specified purpose (e.g., AGM events). Surplus, if any, shall revert to the general fund/account.</li>
            </ol>
          </section>

          <section>
            <h2 id='Farewell_Support'><span>Article 6:</span>Farewell and Financial Support</h2>
            <p id='underline'><span></span></p>

            <h3 id='Farewell_Purpose'><span>6.1:</span>Purpose</h3>
            <p className='main-content'>
              The purpose of the Farewell Support article is to provide financial and moral support to members and their families during times of bereavement. 
              This support ensures solidarity and collective care among members of the chama.
            </p>

            <h3 id='Amount_Per_Support'><span>6.2:</span>Amount Per Support</h3>
            <ol>
              <li><b>Loss of a Member:</b> A contribution of <b>Five Hundred Shillings[500/=]</b> is withdrawn from each member's emergency fund.</li>
              <li><b>Loss of a Parent:</b> A contribution of <b>One Thousand Shillings[1000/=]</b> is withdrawn from each member's emergency fund.</li>
              <li><b>Loss of a Sibling:</b> A contribution of <b>Three Hundred[300/=]</b> is withdrawn from each member's emergency fund.</li>
              <li><b>Graduation of Members:</b> Each member <b>shall</b> be required to contribute <b>Two Hundred Shillings [200/=]</b></li>
              <li><b>Additional Support:</b> Any other support shall be voluntary, except in extreme cases where the chairperson may approve additional compulsory contributions.</li>
            </ol>

            <h3 id='Process'><span>6.3:</span>Process</h3>
            <ol>
              <li><b>Notification:</b></li>
                <p>The affected member or their representative shall notify the <b>chairperson</b> or <b>secretary</b> of the bereavement immediately.</p>
              <li><b>Approval and Execution:</b></li>
                <p>i. The chairperson shall confirm the eligibility of the claim and authorize the withdrawal of the specified amounts from members' emergency funds.</p>
                <p>ii. The treasurer shall ensure timely collection and disbursement of funds to the affected party.</p>
              <li><b>Voluntary Contributions:</b></li>
              <p>i. Members willing to provide additional support can do so voluntarily.</p>
              <p>ii. These contributions shall be coordinated and recorded separately by the treasurer.</p>
              <p>iii. The affected member can as well create a WhatsApp group for the same and invite members to join. In such a case, the group's treasurer shall not manage the contributions.</p>
            </ol>

            <h3 id='Record_Keeping'><span>6.4:</span>Record Keeping</h3>
            <ol>
              <li>The treasurer shall maintain detailed records of all contributions, withdrawals and disbursements related to farewell support.</li>
              <li>These records shall be presented during the next chama meeting for transparency.</li>
            </ol>

            <h3 id='Extraordinary_Circumstances'><span>6.5:</span>Extraordinary Cicumstances</h3>
            <ol>
              <li>In extreme or unforeseen situations, the chairperson, with the approval of the executive committee, may determine the need for additional compulsory contributions.</li>
              <li>Such cases shall be communicated clearly to all members.</li>
            </ol>
          </section>

          <section>
            <h2 id='Amendments'><span>Article 7:</span>Amendments</h2>
            <p id='underline'><span></span></p>

            <h3 id='Amendments_Purpose'><span>7.1:</span>Purpose</h3>
            <p className='main-content'>
              The purpose of this article is to outline the process and guidelines for making changes, additions or deletions to the chama's constitution to ensure it remains 
              relevant, fair and effective in governing the chama.
            </p>

            <h3 id='Authority_to_Amend'><span>7.2:</span>Authority to Amend</h3>
            <ol>
              <li>Amendments to this constitution <b>can only be made</b> during an Annual General Meeting(AGM) or a Special General Meeting(SGM) convened for this purpose.</li>
              <li>Only members in good standing (having no outstanding fines, loans or disciplinary actions) are eligible to participate in the amendment process.</li>
            </ol>

            <h3 id='Proposal_for_Amendments'><span>7.3:</span>Proposal for Amendments</h3>
            <ol>
              <li>Any member wishing to propose an amendment must submit their proposal in writing to the secretary at least <b>30 days</b> before the AGM or SGM.</li>
              <li>The proposal must clearly state:</li>
                <p>i. The section(s) of the constitution to be amended.</p>
                <p>ii. The specific changes being proposed.</p>
                <p>iii. The reasons and benefits of the proposed amendment.</p>
              <li>The executive committee shall review the proposal to ensure it aligns with the objectives and values of the chama.</li>
            </ol>

            <h3 id='Notification_to_Members'><span>7.4:</span>Notification to Members</h3>
            <ol>
              <li>The secretary shall circulate the proposed amendments to all members at least <b>14 days</b> before the meeting where they will be discussed.</li>
              <li>The notification shall include:</li>
                <p>i. A copy of the currrent section(s) of the constitution.</p>
                <p>ii. The proposed amendment(s).</p>
                <p>iii. The date, time and venue of the meeting.</p>
            </ol>

            <h3 id='Voting_on_Amendments'><span>7.5:</span>Voting on Amendments</h3>
            <ol>
              <li>Amendments shall only be adopted by a <b>two-thirds majority vote</b> of the members present at the meeting.</li>
              <li>Voting shall be conducted by secret ballot unless members agree to vote by show of hands.</li>
              <li>Each member shall have one vote and proxy votes are not allowed.</li>
            </ol>

            <h3 id='Effective_Date_of_Amendments'><span>7.6:</span>Effective Date of Amendments</h3>
            <ol>
              <li>Approved amendments shall take effect immediately unless otherwise specified in the resolution.</li>
              <li>The secretary shall update the constitution to reflect the changes and distribute the revised constitution to all members within <b>30 days</b> of approval.</li>
            </ol>

            <h3 id='Record_Keeping'><span>7.7:</span>Record Keeping</h3>
            <ol>
              <li>The minutes of the meeting at which the amendment was adopted shall include:</li>
                <p>i. The proposed changes.</p>
                <p>ii. The number of members present and voting.</p>
                <p>iii. The results of the vote.</p>
              <li>The updated constitution shall include a revision history section, detailing:</li>
                <p>i. The date of each amendment.</p>
                <p>ii. A summary of the changes made.</p>
            </ol>

            <h3 id='Restrictions_on_Amendments'><span>7.8:</span>Restrictions on Amendments.</h3>
            <ol>
              <li>No amendment shall be made that contradicts the fundamental objectives of the chama or violates any national laws.</li>
              <li>Core provisions, such as those governing membership, financial integrity and emergency funds, may require a higher threshold of <b>three-quarters majority vote</b> for amendment.</li>
            </ol>

            <h3 id='Review_Period'><span>7.9:</span>Review Period and Dispute Resolution</h3>
            <ol>
              <li>The chama's constitution shall be reviewed after every <b>two years</b> to ensure its provisions remain relevant.</li>
              <li>During the review period, members are encouraged to submit suggestions for consideration.</li>
              <li>Any disputes arising from proposed amendments shall be referred to an arbitration committee composed of impartial members selected by the chama.</li>
              <li>The committee's decision shall be binding, subject to approval by the AGM or SGM.</li>
            </ol>
          </section>

          <section>
            <h2 id='Dissolutioin'><span>Article 8:</span>Dissolution</h2>
            <p id='underline'><span></span></p>

            <h3 id='Dissolution_Purpose'><span>8.1:</span>Purpose</h3>
            <p className='main-content'>
              This article outlines the process and conditions under which the chama may be dissolved and the subsequent distribution of assets and liabilities.
            </p>

            <h3 id='Grounds_for_Dissolution'><span>8.2:</span>Grounds for Dissolution</h3>
            <p className='main-content'>The chama may be dissolved under the following circumstances:</p>
            <ol>
              <li>When the chama's objectives can no longer be achieved.</li>
              <li>By a resolution passed by at least <b>three quarters</b> of all members in good standing during a Special General Meeting(SGM) convened specifically for this purpose.</li>
              <li>When the chama becomes insolvent and is unable to meet its financial obligations.</li>
            </ol>

            <h3 id='Notice_of_Dissolution'><span>8.3:</span>Notice of Dissolution</h3>
            <ol>
              <li>A proposal for dissolution must be submitted in writing to the executive committee at least <b>60 days</b> before the SGM.</li>
              <li>The secretary shall notify all members of the proposal and the meeting date at least <b>30 days</b> in advance.</li>
            </ol>

            <h3 id='Process_of_Dissolution'><span>8.4:</span>Process of Dissolution</h3>
            <ol>
              <li>The resolution for dissolution must be adopted by <b>three-quarters majority vote</b> of members present at the SGM.</li>
              <li>Upon adoption of the resolution, the executive committee shall oversee the dissolution process, including:</li>
                <p>i. Settling all outstanding debts and liabilities.</p>
                <p>ii. Liquidating assets where necessary.</p>
                <p>iii. Distributing any remaining funds equitably among members based on their contributions and savings.</p>
            </ol>

            <h3 id='Distribution_of_Assets'><span>8.5:</span>Distribution of Assets</h3>
            <ol>
              <li>All assets and funds remaining after settling liabilities shall be distributed as follows:</li>
                <p>i. Emergency funds and savings shall be refunded to members.</p>
                <p>ii. Group profits or reserves shall be distributed according to <b>Article 5, Sub-Article 5.2, Sub-Sub-Article 5.2.1</b> of this constitution</p>
              <li>Any funds held for specific projects or initiatives shall be redirected or refunded based on a resolution by members.</li>
            </ol>

            <h3 id='Final_Record_Keeping'><span>8.6:</span>Final Record Keeping</h3>
            <ol>
              <li>The treasurer shall prepare a final financial report detailing the distribution of assets and settlement of liabilities.</li>
              <li>The secretary shall archive all records for future reference.</li>
            </ol>
          </section>

          <section>
            <h2 id='Adoption'><span>Article 9:</span>Adoption</h2>
            <p id='underline'><span></span></p>

            <h3 id='Adoption_Purpose'><span>9.1:</span>Purpose</h3>
            <p className='main-content'>
              This article governs the formal adoption of the constitution, ensuring that all members agree to abide by its provisions.
            </p>

            <h3 id='Approval_of_the_Constitution'><span>9.2:</span>Approval of the Constitution</h3>
            <ol>
              <li>The constitution shall be adopted by a <b>two-thirds majority vote</b> of members present during the founding meeting or AGM.</li>
              <li>Only members who are in good standing shall participate in the voting process.</li>
            </ol>

            <h3 id='Declaration_of_Adoption'><span>9.3:</span>Declaration of Adoption</h3>
            <ol>
              <li>Upon approval, the chairperson shall formally declare the constitution adopted, and it shall take effect immediately unless otherwise specified.</li>
              <li>All members shall sign a declaration of commitment to abide by the constitution.</li>
            </ol>


          </section>
        </div>
    </div>
  )
}