import React, { useState } from 'react';
import InvestmentInformation from './InvestmentInformation';

function Home() {
  const [investment, setInvestment] = useState('ABC');

  const handleInvestmentChange = (event) => {
    setInvestment(event.target.value);
  };

  const investments = {
    ABC: {name:"ABC",
      amountInvested: 5000,
      currentValue: 7000,
      projectedReturns: 9000,
    },
    DEF: {name:"DEF",
      amountInvested: 5000,
      currentValue: 3000,
      projectedReturns: 9000,
    },
    GHI: {name:"GHI",
      amountInvested: 5000,
      currentValue: 7000,
      projectedReturns: 19000,
    },
  };

  return (
    <div className="dropdown" style={{ backgroundColor:"#ECF2FF"}}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
         Companies Invested 
      </button>
      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item"
            onClick={handleInvestmentChange}
            value="ABC"
          >
            ABC
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={handleInvestmentChange}
            value="DEF"
          >
            DEF
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={handleInvestmentChange}
            value="GHI"
          >
            GHI
          </button>
        </li>
      </ul>

      <InvestmentInformation {...investments[investment]} />
    </div>
  );
}

export default Home;
