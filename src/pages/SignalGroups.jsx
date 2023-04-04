import Ellipse1 from "../assets/images/Ellipse 1.svg";
import Ellipse2 from "../assets/images/Ellipse 2.svg";
import Ellipse3 from "../assets/images/Ellipse 3.svg";
import Ellipse4 from "../assets/images/Ellipse 4.svg";
import Ellipse5 from "../assets/images/Ellipse 5.svg";
import Ellipse from "../assets/images/Ellipse.svg";
import "../index.scss";
const SignalGroups = () => {
  return (
    <>
      <div className="tasks">
        <h1>Signal Groups</h1>
        <div className="signal-container">

        <div className="signal">
          <h2>Groups You Manage</h2>
          <h3>Other Signal Groups</h3>
        </div>
        <div className="new-group">
            <h3>Create New Signal Group</h3>
        </div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card__header">
              <h1>Signal Groups You Belong To</h1>
            </div>
            <ul>
              <div className="coin">
                <img src={Ellipse} alt="" />

                <li>ABC 15</li>
              </div>
              <div className="coin">
                <img src={Ellipse1} alt="" /> <li> The Champions</li>
              </div>
              <div className="coin">
                <img src={Ellipse2} alt="" /> <li> Bloom Group</li>
              </div>
              <div className="coin">
                <img src={Ellipse3} alt="" /> <li> SHA 145</li>
              </div>
              <div className="coin">
                <img src={Ellipse4} alt="" /> <li>ETDA Gurus</li>
              </div>
              <div className="coin">
                <img src={Ellipse5} alt="" /> <li>Req Group</li>
              </div>
            </ul>
          </div>
          <div className="card-1 ">
            <div>
              <div className="card-head">
                <div className="coin-name">
                  <div>
                    <img src={Ellipse} alt="" />
                  </div>
                  <div>
                    <h1>ABC 15</h1>
                  </div>
                </div>
                <h3 className="signal">Edit signal Group</h3>
              </div>
              <h3>Private Group</h3>
            </div>
            <div className="min-allocation">
              <h2 className="min">Minimum Allocation</h2>
              <h2 className="min-amount">100 USDT</h2>
            </div>
            <div className="max-allocation">
              <h2 className="max">Maximum Allocation</h2>
              <h2 className="max-amount">1000 USDT</h2>
            </div>
            <div className="subscription">
              <h2>Subscription</h2> <span className="free">Free </span>
            </div>
            <div>
              <h2>Total Revenue Generated</h2>
            </div>
            <div className="revenue">
              <h2 className="month">This Month</h2>
              <h2 className="amount">$1000.00</h2>
            </div>
            <button className="button">View Signal Group</button>
          </div>
          <div className="card-2">
            <div className="membership_header">
              <h1>Membership</h1>
            </div>
            <button className="invite-button">Invite Members</button>
            <div className="member-info">
              <div className="member-amount">
                <h3>Members</h3>
                <h1>78</h1>
              </div>
              <div className="request">
                <h3>Connection Request</h3>
                <h1>5</h1>
              </div>
            </div>
            <div className="mail">
              <div className="active">
                <h1>Active Member Emails</h1>
              </div>
              <ul>
                <li>johnryan@gmail.com</li>
                <li> jonathanwhite@gmail.com</li>
                <li>macryenoldsjean@gmail.com</li>
                <li>josephjacobjudah@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignalGroups;
