import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";

function App() {
  const [data, setData] = useState({
    homeValue: 500,
    downPayment: 100,
    loanAmount: 400,
    interestRate: 5,
    tenure: 1,
  });

  const principal = data.homeValue - data.downPayment;
  const totalMonths = data.tenure * 12;
  const interestPerMonth = data.interestRate / 100 / 12;

  const monthlyPayment =
    interestPerMonth === 0
      ? principal / totalMonths
      : Math.floor(
          (principal *
            interestPerMonth *
            Math.pow(1 + interestPerMonth, totalMonths)) /
            (Math.pow(1 + interestPerMonth, totalMonths) - 1)
        );

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold w-full flex items-center justify-center pt-8 pb-8 bg-black text-white shadow-2xl">
        Loan Calculator
      </h1>

      <div className="flex flex-col md:flex-row p-4 gap-6">
        {/* Input Section */}
        <div className="flex-1">
          <div className="space-y-6">

            {/* Home Value */}
            <div className="w-full md:w-[40vw] border-2 p-4 rounded shadow-lg bg-white transition-all duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="font-semibold mb-2">Home Value</h3>
              <h1 className="flex items-center text-xl font-medium mb-2">
                <FaRupeeSign className="mr-1" />
                {data.homeValue}
              </h1>
              <input
                className="w-full transition duration-300"
                type="range"
                min={1000}
                max={10000}
                value={data.homeValue}
                onChange={(e) =>
                  setData({ ...data, homeValue: Number(e.target.value) })
                }
              />
              <div className="flex justify-between mt-2 text-sm">
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> 1000
                </span>
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> 10000
                </span>
              </div>
            </div>

            {/* Down Payment */}
            <div className="w-full md:w-[40vw] border-2 p-4 rounded shadow-lg bg-white transition-all duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="font-semibold mb-2">Down Payment</h3>
              <h1 className="flex items-center text-xl font-medium mb-2">
                <FaRupeeSign className="mr-1" />
                {data.downPayment}
              </h1>
              <input
                className="w-full transition duration-300"
                type="range"
                min={0}
                max={data.homeValue}
                value={data.downPayment}
                onChange={(e) =>
                  setData({ ...data, downPayment: Number(e.target.value) })
                }
              />
              <div className="flex justify-between mt-2 text-sm">
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> 0
                </span>
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> {data.homeValue}
                </span>
              </div>
            </div>

            {/* Loan Amount */}
            <div className="w-full md:w-[40vw] border-2 p-4 rounded shadow-lg bg-white transition-all duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="font-semibold mb-2">Loan Amount</h3>
              <h1 className="flex items-center text-xl font-medium mb-2">
                <FaRupeeSign className="mr-1" />
                {data.homeValue - data.downPayment}
              </h1>
              <input
                className="w-full transition duration-300"
                type="range"
                min={0}
                max={data.homeValue}
                value={data.homeValue - data.downPayment}
                onChange={(e) =>
                  setData({ ...data, loanAmount: Number(e.target.value) })
                }
              />
              <div className="flex justify-between mt-2 text-sm">
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> 0
                </span>
                <span className="flex items-center">
                  <FaRupeeSign className="mr-1" /> {data.homeValue}
                </span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="w-full md:w-[40vw] border-2 p-4 rounded shadow-lg bg-white transition-all duration-300 ease-in-out hover:shadow-2xl">
              <h3 className="font-semibold mb-2">Interest Rate (%)</h3>
              <h1 className="text-xl font-medium mb-2">
                {data.interestRate}%
              </h1>
              <input
                className="w-full transition duration-300"
                type="range"
                min={1}
                max={15}
                step={0.1}
                value={data.interestRate}
                onChange={(e) =>
                  setData({ ...data, interestRate: Number(e.target.value) })
                }
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>1%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Tenure Dropdown */}
            <div className="w-full md:w-[40vw] rounded shadow-lg bg-white transition-all duration-300 ease-in-out hover:shadow-2xl">
              <select
                className="w-full p-4 border-2 rounded text-base"
                onChange={(e) =>
                  setData({ ...data, tenure: Number(e.target.value) })
                }
                value={data.tenure}
              >
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5 Years</option>
              </select>
            </div>
          </div>
        </div>

        {/* Monthly EMI Output */}
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded shadow-lg p-8 w-full md:w-[50vw] text-center transition-all duration-300 ease-in-out hover:shadow-2xl">
            <span className="text-xl md:text-3xl font-semibold block mb-2">Monthly EMI</span>
            <div className="text-3xl md:text-5xl font-bold flex justify-center items-center gap-2">
              <FaRupeeSign />
              {monthlyPayment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
