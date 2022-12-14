import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import DonateBlood from './DonateBlood';
import BloodRequest from './BloodRequest';
import DonationHistory from './DonationHistory';
import RequestHistory from './RequestHistory';

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [isDonate, setIsDonate] = useState(true);
  const [isBloodRequest, setIsBloodRequest] = useState(false);
  const [isDonationHistory, setIsDonationHistory] = useState(false);
  const [isRequestHistory, setIsRequestHistory] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const openDonate = () => {
    setIsDonate(!isDonate);
    setIsBloodRequest(false);
    setIsDonationHistory(false);
    setIsRequestHistory(false);
  };

  const openBloodRequest = () => {
    setIsBloodRequest(!isBloodRequest);
    setIsDonate(false);
    setIsDonationHistory(false);
    setIsRequestHistory(false);
  };

  const openDonationHistory = () => {
    setIsDonationHistory(!isDonationHistory);
    setIsDonate(false);
    setIsBloodRequest(false);
    setIsRequestHistory(false);
  };

  const openRequestHistory = () => {
    setIsRequestHistory(!isRequestHistory);
    setIsDonate(false);
    setIsBloodRequest(false);
    setIsDonationHistory(false);
  };

  // const navLinksStyles = ({ isActive }) => ({
  //   backgroundColor: isActive ? '#25253C' : '#1B1C22',
  //   border: isActive ? '1px solid rgba(0, 56, 255, 0.75)' : ' ',
  //   borderRadius: isActive ? '6px' : ' ',
  //   paddingLeft: isActive ? '0px' : ' ',
  // });

  return (
    <div className="sidebar">
      <header className="flex fixed z-10">
        <nav
          className={`${open ? 'w-60' : 'w-0'} 
        h-screen p-5 pt-8 bg-[#1B1C22] duration-300 z-1 relative`}
        >
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className={`bg-[#14142B] text-[#fff] rounded-full -right-3 border-dark-purple 
            absolute cursor-pointer top-9 w-7 border-2 ${
              !open && 'rotate-[180]'
            }`}
            onClick={() => setOpen(!open)}
          />
          <ul className="text-[#fff] mt-[100px]">
            <li>
              <button type="button" onClick={openDonate} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
                <p>Donate Blood</p>
              </button>
            </li>
            <li className="mt-5">
              <button type="button" onClick={openBloodRequest} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
                {' '}
                <p>Blood Request</p>
              </button>
            </li>
            <li className="my-5">
              <button type="button" onClick={openDonationHistory} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
                {' '}
                <p>Donation History</p>
              </button>
            </li>
            <li>
              <button type="button" onClick={openRequestHistory} className="flex gap-5 items-center">
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
                {' '}
                <p>Request History</p>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        {isDonate && (<DonateBlood />)}
        {isBloodRequest && (<BloodRequest />)}
        {isDonationHistory && (<DonationHistory />)}
        {isRequestHistory && (<RequestHistory />)}
      </section>
    </div>
  );
};

export default SideBar;
