import "./GSTInfo.scss";

// Assets
import Layer2Icon from "../../assets/icons/Layer_2.svg";
import exclaimation from "../../assets/icons/exclaimation.svg";
import RightArrow from "../../assets/icons/arrow.svg";
import BigCrossIcon from "../../assets/icons/capital_x.svg";
import SmallCrossIcon from "../../assets/icons/small_x.svg";

const GSTInfo = ({
  closeModal,
  userValue,
  gstVal,
  remainingValue,
  totalGSTBenefits,
}) => {
  console.log("thios is user vcalu", userValue);
  return (
    <div className="gst-container">
      <div className="gst-header">
        <h3>GST? No Worries!</h3>
        <button className="close-btn big-close-btn" onClick={closeModal}>
          <img src={BigCrossIcon} alt="X" className="big-cross-icon" />
        </button>
        <button className="close-btn small-close-btn" onClick={closeModal}>
          <img src={SmallCrossIcon} alt="x" className="small-cross-icon" />
        </button>
      </div>
      <div className="gst-body">
        <div className="gst-alert">
          <p>
            <span>
              <img src={exclaimation} alt="Exclamation Icon" />
            </span>
            Starting 1st October 2023, 28% GST is being charged by the
            Government on your deposits.
          </p>
          <div className="gst-highlight">
            <img src={Layer2Icon} alt="GST Info Icon" className="icon" />
            <strong>100% Govt. GST paid by RummyCircle</strong>
          </div>
        </div>

        <div className="gst-benefits">
          <p>GST benefits earned so far</p>
          <h2>₹{totalGSTBenefits.toLocaleString()}</h2>
        </div>

        <div className="gst-explanation">
          <h4>How GST on deposit works?</h4>
          <p>You Pay</p>
          <h2>₹{userValue}</h2>
          <p className="subtext">Inclusive of Govt. GST</p>

          <div className="gst-breakdown">
            <div className="gst-box">
              <h3>₹{remainingValue}</h3>
              <p>Goes to your wallet</p>
            </div>
            <div className="gst-box">
              <h3 className="red-text">₹{gstVal}</h3>
              <p>Govt. GST on your deposit</p>
            </div>
          </div>

          <div className="gst-paid-wallet-container">
            <div className="gst-paid-box">
              <h3>₹{gstVal}</h3>
              <div className="gst-thumb-icon-textbox">
                <img
                  src={Layer2Icon}
                  alt="GST Info Icon"
                  className="gst-icon"
                />
                <p>
                  GST paid by <strong>RummyCircle</strong>
                </p>
              </div>
              <p>on your behalf</p>
            </div>
            <img src={RightArrow} alt="- - - ->" className="right-arrow" />
            <div className="wallet-info">
              <p className="wallet-prefix">You get</p>
              <h2 className="final-amount">₹{remainingValue + gstVal}</h2>
              <p className="wallet-suffix">in your wallet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSTInfo;
