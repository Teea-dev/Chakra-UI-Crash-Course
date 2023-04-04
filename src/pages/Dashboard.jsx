import "../index.scss";

import DoughnutChart from "./Chart";
import SignalGroups from "./SignalGroups";

export default function Dashboard() {
  return (
    <div className=" container">
      <div className="wallet-container">
        <div className="wallet">
          <div className="wallet_header">
            <h1>My Wallet</h1>
          </div>
          <div className="wallet_body">
            <div className="coins">
              <ul>
                <li>
                  <div className="btc">
                    {" "}
                    BTC <span className="percent"> 36.77%</span>{" "}
                  </div>
                </li>
                <li>
                  <div className="usdt ">
                    {" "}
                    USDT <span className="percent"> 36.77%</span>{" "}
                  </div>
                </li>
                <li>
                  <div className="others">
                    {" "}
                    Others<span className="percent"> 36.77%</span>{" "}
                  </div>
                </li>
                <li>
                  <div className="bnb">
                    {" "}
                    BNB <span className="percent"> 36.77%</span>{" "}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="chart">
          <div className="balance">
            <h2>$5000</h2>
            <h3>Total Balance</h3>
          </div>
          <div className="donut">
            <DoughnutChart />
          </div>
        </div>
      </div>
      <div className="exchange-wallet">
        <div className="information-header">
          <ul>
            <li>Exchange wallet</li>
            <li> coin</li>
            <li> Balance</li>
          </ul>
        </div>
        <div className="information-body">
          <ul>
            <li>Binance</li>
            <li> BTC</li>
            <li> 0.0000123</li>
          </ul>

          <ul>
            <li>Binance</li>
            <li> USDT</li>
            <li> 0.0000123</li>
          </ul>
          <ul>
            <li>Binance</li>
            <li> BUSD</li>
            <li> 0.0000123</li>
          </ul>
        </div>
      </div>

      <SignalGroups />
    </div>
  );
}
