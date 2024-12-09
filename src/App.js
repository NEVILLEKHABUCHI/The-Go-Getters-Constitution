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

              <h3 id='Elections'><span>3.3:</span>Elections</h3>

              <h4 id='Election_of_Officers'><span>3.3.1:</span>Election of Officers</h4>
              <ol>
                  <li>Elections for the leadership positions within the chama shall be held after two years during the Annual General Meeting[AGM]</li>
                  <li>The positions subject to election shall include, but are not limited to, the Chairperson,Vice-Chairperson, Secretary and the treasurer.</li>
                  <li>All members in good standing are eligible to run for any office.</li>
              </ol>

              <h4 id='Nomination_Process'><span>3.3.2:</span>Nomination Process</h4>
              <ol>
                <li>Nominations for each position shall be submitted in writing to the Secretary at least two weeks before the AGM.</li>
                <li>Each nomination must be seconded by at least one other member.</li>
                <li>A list of all nominees shall be circulated to the membership one week before the AGM.</li>
              </ol>

              <h4 id='Voting_Procedure'><span>3.3.3:</span>Voting Procedure</h4>
              <ol>
                <li>Voting shall be conducted by secret ballot during the AGM.</li>
                <li>Each member shall have one vote per position.</li>
                <li>The candidate receiving the highest number of votes for each position shall be declared elected.</li>
                <li>In the event of a tie, a runoff election shall be held between the tied candidates.</li>
              </ol>

              <h4 id='Assumption_of_Office'><span>3.3.4:</span>Assumption of Office</h4>
              <ol>
                <li>Newly elected officers shall assume their roles immediately following the conclusion of the AGM.</li>
                <li>Outgoing officers shall ensure a smooth transition by providing all necessary documentation and briefings to the incoming officers within two weeks of the election.</li>
              </ol>

              <h4 id='Term_of_Office'><span>3.3.5:</span>Term of Office</h4>
              <ol>
                <li>The term of office for all elected positions shall be two years.</li>
                <li>Officers may be re-elected for consecutive terms without limitation.</li>
              </ol>

              <h4 id='Vacancies'><span>3.3.6:</span>Vacancies</h4>
              <ol>
                <li>In the event of a vacancy in any elected position, a special election shall be held at the next regular meeting to fill the position for the remainder of the term.</li>
                <li>Nominations for the special election shall follow the same process as regular elections.</li>
              </ol>

              <h4 id='Resignation'><span>3.3.7:</span>Resignation</h4>
              <ol>
                <li>Any officer may resign from their position by submitting a written notice to the Secretary.</li>
                <li>The resignation shall take effect immediately upon receipt of the notice unless a later date is specified in the resignation letter.</li>
                <li>In the event of a resignation, the position shall be considered vacant and a special election shall be conducted in accordance with Section 6 of Article 3 to fill the vacancy. </li>
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
                <li>The AGM shall be held once a year.</li>
                <li>The purpose of the AGM is to elect officers, review the financial status, review the set goals for that particular year, set goals for the coming year 
                  and discuss the overall progress of the chama.
                </li>
                <li>Notice of the AGM shall be given to all members at least four weeks in advance.</li>
              </ol>

              <p className='main-content'>
                <b>Regular Meetings:</b>
              </p>
              <ol>
                <li>Regular meetings shall be held on the 10th of every month.</li>
                <li>The purpose of the regular meetings is to discuss ongoing activities, financial contributions and any other matters arising.</li>
                <li>Notice of regular meetings shall be given to all members at least one week in advance.</li>
              </ol>

              <p className='main-content'>
                <b>Special Meetings:</b>
              </p>
              <ol>
                <li>Special meetings may be called by the Chairperson or by a written request from at least one-third of the members.</li>
                <li>The purpose of special meetings is to address urgent or specific issues that cannot wait until the next regular meeting.</li>
                <li>Notice of special meetings shall be given to all members at least three days in advance.</li>
              </ol>

              <h3 id='Quorum'><span>4.2:</span>Quorum</h3>
              <ol>
                <li>A quorum of any meeting shall consist of at least one-half of the total membership.</li>
                <li>No official business shall be conducted without a quorum present.</li>
              </ol>

              <h3 id='Agendas'><span>4.3:</span>Agendas</h3>
              <ol>
                <li>The agendas of each meeting shall be prepared by the Vice-Chairperson in consultation with the Chairperson.</li>
                <li>The agendas shall be circulated to all members at least three days before a regular or special meeting and four weeks before the AGM.</li>
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
                <li>Members are expected to attend all meetings.</li>
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
              <li>The amount of the fee shall be reviewed annually and approved by the general membership.</li>
              <li>Registration fees are non-refundable.</li>
            </ol>

            <p className='main-content'>
              <b>Merry-Go-Round Contributions: </b>
            </p>
            <ol>
              <li>Members shall contribute a fixed amount of money regularly as per the schedule agreed at the start of each financial period.</li>
              <li>Contribution amounts and intervals shall be determined by a majority vote during the Annual General Meeting. </li>
              <li>The treasurer shall record all contributions in the chama ledger, noting the date and contributing member.</li>
            </ol>

            <p className='main-content'>
              <b>Emergency Fund Contributions:</b>
            </p>
            <ol>
              <li>Members shall contribute a predetermined amount regularly to build the emergency fund.</li>
              <li>The contribution amount shall be set during a general meeting and reviewed periodically to reflect chama's financial capacity and needs.</li>
              <li>Emergency fund contributions are mandatory for all members.</li>
              <li>Emergency funds shall be contributed together with the merry-go-round</li>
            </ol>

            <p className='main-content'>
              <b>Project Contributions:</b>
            </p>
            <ol>
              <li>Project funds shall be raised through special contributions made by all members as per the requirements of approved projects.</li>
              <li>The amount to be contributed by each member shall be determined during a meeting and may be collected in installments or as a lump sum.</li>
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

              <li>Missing Meetings without Permission.</li>
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
            <h4 id='Loaning_Project'><span>5.2.1:</span>Loaning Project</h4>
            <p className='main-content'>
              The Go-Getters provides loans to members, generating income from interest and penalties.<br/>
            </p>

            <h4>Loan Types</h4>
            <p className='main-content'>
              <b>1. Voluntary Loans:</b>
              <ol>
                <li>Members can apply for loans based on their individual financial needs.</li>
                <li>Members can borrow upto <b>50%</b> of their total savings and contributions to the emergency fund.</li>
                <li>Loan applications must be approved by the executive committee or during a general meeting.</li>
                <li>Borrowers must be in good standing, with no outstanding loans, fines or overdue contributions.</li>
              </ol>
            </p>

            <p className='main-content'>
              <b>2. Compulsory Loans:</b>
              <ol>
                <li>The Go-Getters may offer loans where every member is required to take the same amount of loan.</li>
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
                <li>Members are allowed a grace period of <b>three months</b> to settle outstanding loan repayments.</li>
                <li>If a member fails to pay their loan within the specified period, an <b>interest rate of 15%</b> shall be charged for each month the loan remains unpaid beyond the grace period.</li>
              </ol>
            </p>
            <p className='main-content'>
              <b>3. Enforcement for Non-Compliance with Loan Repayment Terms:</b>
              <ol>
                <li>Restriction from Chama Benefits: </li>
                <p>i. The member shall be barred from accessing futuree loans until the overdue loan and penalties are fully settled.</p>
                <p>ii.  The member may be excluded from partcipating in profit-sharing activities, including dividends from chama projects.</p>

                <li>Deduction from Member Savings:</li>
                <p>i. The chama reserves the right to deduct unpaid amounts directly from the member's savings or emergency fund contributions.</p>
                <p>ii.  This action shall be taken after issuing a formal notice to the member.</p>

                <li>Suspension of Membership Rights:</li>
                <p>i. The member may be temporarily suspended from voting rights or holding leadership positions until they settle their debts.</p>
                <p>ii.  Such suspensions shall be documented in the minutes of a general meeting.</p>

                <li>Termination of Membership:</li>
                <p>i. Persistent non-compliance may result in the termination of the member's membership.</p>
                <p>ii.  Upon termination, the member shall forfeit certain rights, including access to the emergency fund or ongoing project benefits.</p>
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
              <li>Fines imposed shalled be added to the general account.</li>
              <li>The Treasurer shall document the reason for the fine, the date the fine was paid and the member who paid the fine.</li>
            </ol>

            <h4 id='Savings_Investments_Interests'><span>5.2.3: </span>Interest from Savings and Investments</h4>
            <ol>
              <li>Funds in the chama's savings or fixed deposit accounts shall earn interest, which shall be credited to the general account.</li>
              <li>The chama may also invest in low-risk financial instruments with member approval.</li>
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

            <h3><span>5.3:</span>Utilization of Funds.</h3>
            <ol>
              <li><b>Registration Fees: </b>Used for administrative costs particularly catering for transaction costs.</li>
              <li><b>Merry-Go-Round: </b>Funds distributed to members on a rotational basis based on the agreed schedule.</li>
              <li><b>Fines: </b>Added to the general fund unless earmarked for specific needs.</li>
              <li><b>Emergency Funds: </b></li>
              <p>i. Disbursed only for approved emergencies.</p>
              <p>ii.  A member receiving funds must provide accountability (e.g., medical bills, receipts)</p>

              <li><b>Project Funds: </b>Used strictly for approved projects, with regular progress reports provided.</li>
              <li><b>Additional Contributions: </b>Dedicated solely to the specified purpose (e.g., AGM events). Surplus, if any, shall revert to the general fund/account.</li>
            </ol>
          </section>
          
        </div>
    </div>
  )
}